/**

A class representing a bottle indicator.

Inherits from the DrawableObject class.
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
    
    Constructs a new BottleBar object.
    Initializes the images, position, and size of the bottle indicator.
    */
    constructor() {
    // Call the constructor of the DrawableObject class
    super();
    // Load the images for the bottle indicator
    this.loadImages(this.IMAGES);
    // Set the position and size of the bottle indicator
    this.x = 30;
    this.y = 40;
    this.width = 140;
    this.height = 50;
    // Set the default percentage to 0
    this.setPercentage(0);
    }
    /**
    
    Sets the percentage of the bottle indicator.
    @param {number} percentage - The percentage of the bottle indicator (0-100)
    */
    setPercentage(percentage) {
    this.percentage = percentage;
    // Load the image for the current percentage
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
    }
    /**
    
    Determines the index of the image to use for the current percentage.
    @returns {number} - The index of the image to use for the current percentage
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