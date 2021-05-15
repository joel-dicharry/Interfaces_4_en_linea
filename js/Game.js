class Game {

    constructor(gamers, ctx) {
        this.gamers = gamers;
        this.ctx = ctx;
        this.radio = 30;
        this.board = new Board(ctx);
        this.quantityChips = 42;
        this.chips = [];
        this.imgChip1;
        this.imgChip2;
    }
    
    draw() {
        //borra canvas
        canvas.width = canvas.width;
        
        this.board.draw();
        this.cargarFichas();

        // debugger;
        // // fichas en mesa listas para jugar
        // this.chips.forEach(c => c.draw());
    }

    addChipsImg(imgChip1, imgChip2) {
        this.imgChip1 = imgChip1;
        this.imgChip2 = imgChip2;
    }

    cargarFichas() {
        
        
        this.y = 113;
        
        // let imgChip1 = new Image();
        // imgChip1.src = `../imagenes/fichas/${this.color1}.png`;
        // imgChip1.onload = () => {
            // debugger;
            // console.log(this.gamers);
            this.y1 = this.y;
            for(this.i = 0; this.i < this.quantityChips/2; this.i+=3) {

                this.chips.push(new Chip(60, this.y1, this.radio, this.gamers.g1.color, this.imgChip1, this.ctx));
                this.chips.push(new Chip(125, this.y1, this.radio, this.gamers.g1.color, this.imgChip1, this.ctx));
                this.chips.push(new Chip(190, this.y1, this.radio, this.gamers.g1.color, this.imgChip1, this.ctx));
                
                this.y1 += 65;
            }
            // fichas en mesa listas para jugar
            // this.chips.forEach(c => c.draw());
        // }

        // let imgChip2 = new Image();
        // imgChip2.src = `../imagenes/fichas/${this.color2}.png`;
        // imgChip2.onload = () => {
            // console.log("cargó img 2");
            this.y2 = this.y;
            for(this.i = 0; this.i < this.quantityChips/2; this.i+=3) {

                this.chips.push(new Chip(810, this.y2, this.radio, this.gamers.g2.color, this.imgChip2, this.ctx));
                this.chips.push(new Chip(875, this.y2, this.radio, this.gamers.g2.color, this.imgChip2, this.ctx));
                this.chips.push(new Chip(940, this.y2, this.radio, this.gamers.g2.color, this.imgChip2, this.ctx));

                this.y2 += 65;
            }
            // }
            
        // fichas en mesa listas para jugar
        this.chips.forEach(c => c.draw());
        
    }

}