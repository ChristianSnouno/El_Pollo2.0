/**
 * A class that represents an energy bar for the end boss.
 * Inherits from the DrawableObject class.
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
     * Constructs a new EndbossBar object.
     * Initializes the images, position, and size of the end boss bar.
     */
    constructor() {
        // Call the constructor of the DrawableObject class
        super();
        // Load the images for the end boss bar
        this.loadImages(this.IMAGES);
        // Set the position and size of the end boss bar
        this.x = 300;
        this.y = 0;
        this.width = 140;
        this.height = 50;
        // Set the default percentage to 100
        this.setPercentage(100);
    }

    /**
     * Sets the percentage of the end boss bar.
     * @param {number} percentage - The percentage of the end boss bar (0-100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        // Load the image for the current percentage
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image for the current percentage.
     * @returns {number} - The index of the image for the current percentage
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
