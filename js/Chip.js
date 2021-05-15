class Chip {

    constructor(x,y,radio,color,img, ctx) {
        this.x = x;
        this.y = y;
        this.radio = radio;
        this.color = color;
        this.img = img;
        this.ctx = ctx;
        this.draggable = true;
        this.startX = x;
        this.startY = y;
        // let img = new Image();
        // img.src = `../imagenes/fichas/${this.color}.png`;
        // img.onload = () => {
        // }
    }
    
    draw() {
        // debugger;
        this.ctx.beginPath();
        this.ctx.fillStyle = '#FFF';
        this.ctx.arc(this.x,this.y,this.radio,0,Math.PI*2);
        this.ctx.fill();
        this.ctx.drawImage(this.img, this.x-this.radio, this.y-this.radio, this.radio*2, this.radio*2);
        this.ctx.closePath();
    }

    // Me estan clickeando?
    isHit() {
        // Math.sqrt((e.offsetX - x)*(e.offsetX - x) + (e.offsetY - y)*(e.offsetY - y) );
        // ** => operador de exponenciación ES7.
        return Math.sqrt((e.offsetX - x)**2 + (e.offsetY - y)**2 ) < this.radio;
    }

    updateXY(x,y) {
        this.x = x;
        this.y = y;
    }

    setDraggable(isDraggable) {
        this.draggable = isDraggable;
    }

    isDraggable() {
        return this.draggable;
    }
    
    // const reubicar = (e) => {
    //     console.log("mueve");
    //     let mx = e.offsetX;
    //     let my = e.offsetY;
    //     canvas.width = canvas.width;

    //     ctx.beginPath();
    //     ctx.arc(mx,my,radio,0,Math.PI*2);
    //     // ctx.createImageData(75,75);
    //     // ctx.putImageData(img,mx,my);
    //     // ctx.fillStyle=img;
    //     ctx.fill();
    //     ctx.closePath();
    //     canvas.addEventListener('mouseup', e => {
    //         console.log("suleta");
    //         x = e.offsetX;
    //         y = e.offsetY;
    //         canvas.removeEventListener('mousemove', reubicar);
    //     })
    // }

    // canvas.addEventListener('mousedown', e => {
    //     console.log("aprieta");
    //     let mouse = Math.sqrt((e.offsetX - x)**2 + (e.offsetY - y)**2 );
    //     if(mouse < radio) {
    //         console.log("if ok");
    //         canvas.addEventListener('mousemove', reubicar);
    //     }
    // })

}