/**
 * Eine Klasse, die eine Münzanzeige darstellt.
 * Erbt von der DrawableObject-Klasse.
 */
 class CoinsBar extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Verde/0.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/20.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/40.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/60.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100.png',
    ];

    /**
     * Konstruiert ein neues CoinsBar-Objekt.
     * Initialisiert die Bilder, Position und Größe der Münzanzeige.
     */
    constructor() {
        // Aufruf des Konstruktors der DrawableObject-Klasse
        super();
        // Laden der Bilder für die Münzanzeige
        this.loadImages(this.IMAGES);
        // Setzen der Position und Größe der Münzanzeige
        this.x = 30;
        this.y = 80;
        this.width = 140;
        this.height = 50;
        // Setzen des Standard-Prozentsatzes auf 0
        this.setPercentage(0);
    }

    /**
     * Setzt den Prozentsatz der Münzanzeige.
     * @param {number} percentage - Der Prozentsatz der Münzanzeige (0-100)
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
