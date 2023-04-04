/**
 * This class represents an object that can be thrown and animated.
 * It extends the MovableObject class.
 */
class ThrowableObject extends MovableObject {
    /** The array of images for the bottle's rotation animation */
    IMAGE_ROTATION_BOTTLE = [
        'img/6.botella/Bottle/1.png',
        'img/6.botella/Bottle/2.png',
        'img/6.botella/Bottle/3.png',
        'img/6.botella/Bottle/4.png'
    ];

    /**
     * Creates a new ThrowableObject.
     * 
     * @param {number} x - The horizontal position of the object.
     * @param {number} y - The vertical position of the object.
     */
    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGE_ROTATION_BOTTLE);
        this.x = x -60;
        this.y = y -20;
        this.height = 100;
        this.width = 60;
        this.throw();
    }

    /**
     * Makes the object be thrown.
     * Applies a speed and gravity, makes the object rotate and move to the right.
     */
    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            this.x += 8;
        }, 25);

        setInterval(() => {
            this.playAnimation(this.IMAGE_ROTATION_BOTTLE);
        }, 100);
    }
}
