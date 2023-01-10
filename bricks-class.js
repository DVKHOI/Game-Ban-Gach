class Bricks{
    brickRowCount 
    brickColumnCount 
    brickWidth 
    brickHeight 
    brickPadding 
    brickOffsetTop 
    brickOffsetLeft

    constructor(brickRowCount,brickColumnCount ,brickWidth = 75,brickHeight = 20,brickPadding = 10,brickOffsetTop = 30,brickOffsetLeft = 30){
        this.brickRowCount = brickRowCount
        this.brickColumnCount = brickColumnCount
        this.brickWidth = brickWidth
        this.brickHeight = brickHeight
        this.brickPadding = brickPadding
        this.brickOffsetTop = brickOffsetTop
        this.brickOffsetLeft = brickOffsetLeft
    }
  
    drawBrick(){
        for(c = 0; c < this.brickColumnCount; c++) {
            for(r = 0; r < this.brickRowCount; r++) {
                if(bricks[c][r].status == 1) {
                    var brickX = (r * (this.brickWidth + this.brickPadding)) + this.brickOffsetLeft;
                    var brickY = (c * (this.brickHeight + this.brickPadding)) + this.brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#7a3f3f";
                    ctx.fill();
                }
            }
        }
    }
    getBrickRowCount(){
        return this.brickRowCount
    }
    getBrickColumnCount(){
        return this.brickColumnCount
    }
    getBrickWidth(){
        return this.brickWidth
    }
    getBrickHeight(){
        return this.brickHeight
    }
    getBrickPadding(){
        return this.brickPadding
    }
    getBrickOffsetTop(){
        return this.brickOffsetTop
    }
    
    getBrickOffsetLeft(){
        return this.brickOffsetLeft
    }
}

  

