class Plank{
    plankHeight 
    plankWidth
    plankX  
    plankY
    constructor(plankX = (canvas.width-this.plankWidth)/2,plankY = canvas.height-this.plankHeight,plankHeight = 10,plankWidth = 75){
        this.plankX = plankX
        this.plankY = plankY
        this.plankWidth = plankWidth
        this.plankHeight = plankHeight
    }
    drawplank(){
        ctx.rect(plankX, canvas.height-plankHeight, plankWidth, plankHeight);
        ctx.fillStyle = "#1a1010";
        ctx.fill();
    }
    getplankX(){
        return this.plankX
    }
    getplankY(){
        return this.plankY
    }
    getplankWidth(){
        return this.plankWidth
    }
    getplankHeightx(){
        return this.plankHeight
    }
    
}