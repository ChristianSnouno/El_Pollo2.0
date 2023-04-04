class StatusBar extends DrawableObject {
    percentage = 100; // Initialwert der Prozentzahl der Statusleiste
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 30;
        this.y = 0;
        this.width = 140;
        this.height = 50;
        this.setPercentage(100);
    }

    /**
     * Setzt die Prozentzahl der Statusleiste
     * @param {number} percentage - Prozentzahl, die die Statusleiste anzeigen soll (0-100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Ermittelt den Index des Bildes in this.IMAGES, das anhand des aktuellen Prozentsatzes der Statusleiste angezeigt werden soll
     * @returns {number} - Index des Bildes, das angezeigt werden soll
     */
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
