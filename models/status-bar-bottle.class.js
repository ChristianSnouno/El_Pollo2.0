class BottleBar extends DrawableObject {
    percentage = 100;
    IMAGES = [

        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/100_.png',

    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }
    // setPercentage(50);

    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}