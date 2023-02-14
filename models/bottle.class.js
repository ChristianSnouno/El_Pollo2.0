class Bottle extends MovableObject {
    width = 100;
    height = 100;
    IMAGES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/1.Marcador.png',
        'img/6.botella/2.Botella_enterrada2.png',
        'img/6.botella/2.Botella_enterrada2.png',


    ];
    constructor(x, y) {
        console.log(y);
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 300);
    }
}