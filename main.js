var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let ball = new Ball()
let ballRadius = ball.getBallRadius()
let x = ball.getX()
let y = ball.getY()
let dx = ball.getDx()
let dy = ball.getDy()

let plank = new Plank()
let plankHeight = plank.getplankHeightx();
let plankWidth = plank.getplankWidth();
let plankX = plank.getplankX();
let plankY = plank.getplankY()

let brick = new Bricks(7,3)
let brickRowCount = brick.getBrickRowCount();
let brickColumnCount = brick.getBrickColumnCount();
let brickWidth = brick.getBrickWidth();
let brickHeight = brick.getBrickHeight();

let score = 0;
let lives = 3;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
let rightPressed = false;
let leftPressed = false;
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        plankX = relativeX - plankWidth/2;
    }
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("GAME LÀ DỄ!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function play() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    brick.drawBrick()
    ball.drawBall()
    plank.drawplank()
    drawScore();
    drawLives();
    collisionDetection();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > plankX && x < plankX + plankWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("É É THUA RỒI ^-^");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = -4;
                dy = 4;
                plankX = (canvas.width-plankWidth)/2;
            }
        }
    }
    if(rightPressed && plankX < canvas.width-plankWidth) {
        plankX += 7;
    }
    else if(leftPressed && plankX > 0) {
        plankX -= 7;
    }
    x += dx
    y += dy
    requestAnimationFrame(play);
}
play()