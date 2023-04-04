/**
 * Eine Klasse, die eine Flaschenanzeige darstellt.
 * Erbt von der DrawableObject-Klasse.
 */
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

    /**
     * Konstruiert ein neues BottleBar-Objekt.
     * Initialisiert die Bilder, Position und Größe der Flaschenanzeige.
     */
    constructor() {
        // Aufruf des Konstruktors der DrawableObject-Klasse
        super();
        // Laden der Bilder für die Flaschenanzeige
        this.loadImages(this.IMAGES);
        // Setzen der Position und Größe der Flaschenanzeige
        this.x = 30;
        this.y = 40;
        this.width = 140;
        this.height = 50;
        // Setzen des Standard-Prozentsatzes auf 0
        this.setPercentage(0);
    }

    /**
     * Setzt den Prozentsatz der Flaschenanzeige.
     * @param {number} percentage - Der Prozentsatz der Flaschenanzeige (0-100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        // Laden des Bildes für den aktuellen Prozentsatz
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Ermittelt den Index des Bildes für den aktuellen Prozentsatz.
     * @returns {number} - Der Index des Bildes für den aktuellen Prozentsatz
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
