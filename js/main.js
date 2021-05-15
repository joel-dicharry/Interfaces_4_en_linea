document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let canvas = document.querySelector('#canvas');
    canvas.width = 1000;
    canvas.height = 550;
    let ctx = canvas.getContext('2d');
    
    
    // canvas.addEventListener('mousemove', (e) => console.log(e.offsetX, e.offsetY));

    let gamers = {
        'g1' : {
            name:'jugador1',
            color: 'red'
        },
        'g2' : {
            name:'jugador2',
            color: 'green'
        }
    };

    let game = new Game(gamers, ctx);

    let imgChip1 = new Image();
    imgChip1.src = `../imagenes/fichas/${gamers.g1.color}.png`;

    let imgChip2 = new Image();
    imgChip2.src = `../imagenes/fichas/${gamers.g2.color}.png`;
    
    imgChip1.onload = () => {
        imgChip2.onload = () =>{
            game.addChipsImg(imgChip1, imgChip2);
            game.draw();
        }
    }

    // this.color1 = this.gamers.jugador1.color;
    // this.color2 = this.gamers.jugador2.color;



    // console.log(jugadores.jugador1.color);

    //EVENTS MANAGER

    canvas.addEventListener('mousedown', () => {
        console.log('mousedow');
        // canvas.addEventListener('mousemove', game.)
    });

    

    


    // const reubicar = (e) => {
    //     console.log("mueve");
    //     let mx = e.offsetX;
    //     let my = e.offsetY;
    //     canvas.width = canvas.width;
    //     ctx.fillStyle = "#FFF";
    //     ctx.beginPath();
    //     ctx.arc(mx,my,f.ww/2,0,Math.PI*2);
    //     ctx.fill();
    //     ctx.closePath();
    //     ctx.drawImage(img, mx-75/2, my-75/2, 75, 75);
    //     canvas.addEventListener('mouseup', e => {
    //         console.log("suleta");
    //         x = e.offsetX;
    //         y = e.offsetY;
    //         canvas.removeEventListener('mousemove', reubicar);
    //     })
    // }
    // canvas.addEventListener('mousedown', e => {
    //     console.log("aprieta");
    //     fichas.forEach(f => {
    //         console.log(f);
    //         if (Math.sqrt((e.offsetX - (f.x+f.ww/2))**2 + (e.offsetY - (f.y+f.ww/2))**2 ) < radio)
    //             canvas.addEventListener('mousemove', reubicar);
    //         });
    // });

        
});
