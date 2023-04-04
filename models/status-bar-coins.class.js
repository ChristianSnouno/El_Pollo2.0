/**
 * A class that represents a coin bar display.
 * Inherits from the DrawableObject class.
 */
 class CoinsBar extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/0.png',
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/20.png',
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/40.png',
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/60.png',
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/80.png',
        'img/7.Marcadores/Barra/Marcadormoneda/Verde/100.png',
    ];

    /**
     * Constructs a new CoinsBar object.
     * Initializes the images, position, and size of the coin bar display.
     */
    constructor() {
        // Calls the constructor of the DrawableObject class
        super();
        // Loads the images for the coin bar display
        this.loadImages(this.IMAGES);
        // Sets the position and size of the coin bar display
        this.x = 30;
        this.y = 80;
        this.width = 140;
        this.height = 50;
        // Sets the default percentage to 0
        this.setPercentage(0);
    }

    /**
     * Sets the percentage of the coin bar display.
     * @param {number} percentage - The percentage to display on the coin bar (0-100)
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        // Loads the image for the current percentage
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Determines the index of the image in this.IMAGES to display based on the current percentage of the coin bar display.
     * @returns {number} - The index of the image to display
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
