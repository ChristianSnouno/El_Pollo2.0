/**
 * Represents a status bar object that displays a percentage and an image based on the percentage value.
 * @extends DrawableObject
 */
 class StatusBar extends DrawableObject {
    /**
     * An array of image paths for the status bar's images.
     * @type {string[]}
     */
    IMAGES = [
      'img/7.Marcadores/Barra/Marcadorvida/azul/0_.png',
      'img/7.Marcadores/Barra/Marcadorvida/azul/20_.png',
      'img/7.Marcadores/Barra/Marcadorvida/azul/40_.png',
      'img/7.Marcadores/Barra/Marcadorvida/azul/60_.png',
      'img/7.Marcadores/Barra/Marcadorvida/azul/80_.png',
      'img/7.Marcadores/Barra/Marcadorvida/azul/100_.png'
    ];
  
    /**
     * The current percentage of the status bar.
     * @type {number}
     */
    percentage = 100;
  
    /**
     * Creates a new StatusBar object.
     */
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
     * Sets the percentage value of the status bar.
     * @param {number} percentage - The percentage value to display on the status bar (0-100).
     */
    setPercentage(percentage) {
      this.percentage = percentage;
      let path = this.IMAGES[this.resolveImageIndex()];
      this.img = this.imageCache[path];
    }
  
    /**
     * Resolves the index of the image in this.IMAGES to display based on the current percentage value of the status bar.
     * @returns {number} - The index of the image to display.
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
  