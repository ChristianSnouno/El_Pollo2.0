class EndbossBar extends DrawableObject {
    percentage = 0;
    IMAGES = [

        'img/7.Marcadores/2_statusbar_endboss/0.png',
        'img/7.Marcadores/2_statusbar_endboss/20.png',
        'img/7.Marcadores/2_statusbar_endboss/40.png',
        'img/7.Marcadores/2_statusbar_endboss/60.png',
        'img/7.Marcadores/2_statusbar_endboss/80.png',
        'img/7.Marcadores/2_statusbar_endboss/100.png',

    ];


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
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