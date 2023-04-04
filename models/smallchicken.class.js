/**

A class representing a small chicken that can move left or right.

Inherits from the MovableObject class.
*/
class Smallchicken extends MovableObject {
    // Size and position of the chicken
    height = 35;
    width = 50;
    y = 385;

    offset = {
        top: 0,
        bottom: 0,
        left: 30,
        right: 30,
    }

    // Images of the chicken for different actions
    IMAGES_WALKING = [
        'img/3.Enemy/Smallchicken/1.png',
        'img/3.Enemy/Smallchicken/2.png',
        'img/3.Enemy/Smallchicken/3.png',
    ];
    IMAGES_DEAD = ['img/3.Enemy/Smallchicken/4.png'];

    /**
    
    Constructs a new Smallchicken object
    @param {number} x - The initial x position of the chicken
    */
    constructor(x) {
        // Call the constructor of the MovableObject class
        super();
        // Load the image for the chicken
        super.loadImage('img/3.Enemy/Smallchicken/1.png',);
        // Load the walking and dead images of the chicken
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        // Set a random x position and speed of the chicken
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        // Start the animation
        this.animate();
    }
    /**
    
    A method that controls the movement and animation of the chicken
    */
    animate() {
        // Change the direction of movement every 5 seconds
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);
        // Move the chicken left or right, depending on the current direction
        setInterval(() => {
            if (!this.isDead()) {
                if (this.otherDirection) {
                    this.moveRight();
                } else {
                    this.moveLeft();
                }
            }
        }, 100);
        // Play the walking or dead animation, depending on the state of the chicken
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}