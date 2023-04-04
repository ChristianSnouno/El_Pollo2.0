/**
 * Eine Klasse, die eine Energieanzeige für den Endgegner darstellt.
 * Erbt von der DrawableObject-Klasse.
 */
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

    /**
     * Konstruiert ein neues EndbossBar-Objekt.
     * Initialisiert die Bilder, Position und Größe der Endgegneranzeige.
     */
    constructor() {
        // Aufruf des Konstruktors der DrawableObject-Klasse
        super();
        // Laden der Bilder für die Endgegneranzeige
        this.loadImages(this.IMAGES);
        // Setzen der Position und Größe der Endgegneranzeige
        this.x = 300;
        this.y = 0;
        this.width = 140;
        this.height = 50;
        // Setzen des Standard-Prozentsatzes auf 100
        this.setPercentage(100);
    }

    /**
     * Setzt den Prozentsatz der Endgegneranzeige.
     * @param {number} percentage - Der Prozentsatz der Endgegneranzeige (0-100)
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
