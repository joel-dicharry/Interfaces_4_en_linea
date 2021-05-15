class Board {

    constructor( ctx){
        this.x = 100;
        this.y = 100;
        this.positions = this.generatePositions();
        this.dropPositions = this.generateDropPositions();
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = '../imagenes/tablero2.png';
        this.chips = [];
        // this.chips.push(new Chip(ctx));
        // this.draw();
    }

    draw() {
        this.generatePositions();
        this.img.onload = () =>{
            this.ctx.drawImage(this.img, 250,100,500,500);

            this.ctx.beginPath();
            let degrade = this.ctx.createLinearGradient(257, 10, 257, 161);
            degrade.addColorStop(0, '#00000080');
            degrade.addColorStop(0.57, 'rgba(0,0,0,0)');
            this.ctx.fillStyle = degrade;
            this.ctx.fillRect(257, 10, 68, 161);
            this.ctx.fillRect(327, 10, 68, 161);
            this.ctx.fillRect(397, 10, 68, 161);
            this.ctx.fillRect(467, 10, 68, 161);
            this.ctx.fillRect(537, 10, 68, 161);
            this.ctx.fillRect(607, 10, 68, 161);
            this.ctx.fillRect(677, 10, 68, 161);
            this.ctx.closePath();
        }

        // fichas ya colocadas
        // this.chips.forEach(c => {
        //     c.draw();
        // });
    }

    addChip(chip, column) {
        this.chips.push(chip);


    }
    // addChips(newChips) {
    //     this.chips.push(...newChips);
    // }

    generatePositions() {
        let positions = [
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}],
            [{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}},{x:{},y:{}}]
        ];

        let pos1_1=[291.5, 137];
        let pos_x = pos1_1[0];
        let pos_y = pos1_1[1];

        let diff_x = 361.5 - 291.5;
        let diff_y = 207 - 137;

        for(let x = 0; x < 6; x++) {
            for(let y = 0; y < 7; y++) {
                positions[x][y].x = pos_x;
                positions[x][y].y = pos_y;

                pos_x += diff_x;
            }
            pos_y += diff_y;
            pos_x = pos1_1[0];
        }
        return positions;
    }

    generateDropPositions() {
        let ww = 68;

        let pos_x = 257;
        let diff_x = 70;
        
        let positions = [
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}},
                            {x1:{}, y1:{}, x2:{}, y2:{}}
                        ];
        for(let i = 0; i < 7; i++){
            positions[i].x1 = pos_x;
            positions[i].y1 = 10;
            positions[i].x2 = pos_x + ww;
            positions[i].y2 = 161;

            pos_x += diff_x;
        }

        console.log(positions);
    }

    drawDropZones() {
        for(let i = 0; i < 7; i++){
            this.ctx.beginPath();
            let degrade = this.ctx.createLinearGradient(x1, y1, x2, y2);
            degrade.addColorStop(0, '#00000080');
            degrade.addColorStop(0.57, 'color');
            this.ctx.fillStyle = '#80808060';
            this.ctx.fillRect(257, 10, 68, 161);
        }
    }

    getDropRow(x, y) {

    }

    // testDrawOneChip(x,y) {
    //     this.ctx.beginPath();
    //     this.ctx.fillStyle = '#FFF';
    //     this.ctx.arc(x,y,30,0,Math.PI*2);
    //     this.ctx.fill();
    //     this.ctx.closePath();
    // }
}