class Ball{
    x
    y
    ballRadius
    dx
    dy
    speed
    constructor(x = canvas.width/2, y = canvas.height-30, ballRadius = 10, dx = 2, dy = -2, speed = 2){
        this.x = x
        this.y = y
        this.ballRadius = ballRadius
        this.dx = dx
        this.dy = dy
        this.speed = speed
    }
    drawBall(){
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#1a1010";
        ctx.fill();
    }
    move(speed){
        this.dx = speed
        this.dy = -speed
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getBallRadius(){
        return this.ballRadius
    }
    getDx(){
        return this.dx
    }
    getDy(){
        return this.dy
    }
    setX(x){
        this.x = x
    }
    setY(y){
        this.y = y
    }
    setBallRadius(ballRadius){
        this.ballRadius = ballRadius
    }
    setDx(dx){
        this.dx = dx
    }
    setDy(dy){
        this.dy = dy
    }
}