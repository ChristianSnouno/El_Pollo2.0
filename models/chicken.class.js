class Chicken extends MovableObject {
    /**
    
    Represents a movable chicken object.
    
    @extends MovableObject
    /
    
    /*
    
    The height of the chicken object.
    @type {number}
    */
    height = 45;
    /**
    
    The width of the chicken object.
    @type {number}
    */
    width = 60;
    /**
    
    The Y-position of the chicken object.
    @type {number}
    */
    y = 370;
    /**
    
    The offset values used for collision detection.
    @type {{top: number, bottom: number, left: number, right: number}}
    */
    offset = {
        top: 0,
        bottom: 0,
        left: 10,
        right: 10
    }
    /**
    
    The array of images representing the chicken object's walking animation.
    @type {string[]}
    */
    IMAGES_WALKING = [
        'img/3.Enemy/Chicken/1.png',
        'img/3.Enemy/Chicken/2.png',
        'img/3.Enemy/Chicken/3.png'
    ];
    /**
    
    The array of images representing the chicken object's dead animation.
    @type {string[]}
    */
    IMAGES_DEAD = ['img/3.Enemy/Chicken/4.png'];
    /**
    
    Creates a new chicken object at the given X-position.
    @param {number} x - The X-position of the chicken object.
    */
    constructor(x) {
        super().loadImage('img/3.Enemy/Chicken/1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
        this.isDying = false;
    }
    /**
    
    Starts the chicken object's animation.
    */
    animate() {
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);

        setInterval(() => {
            if (!this.isDead()) {
                if (this.otherDirection) {
                    this.moveRight();
                }
                else {
                    this.moveLeft();
                }
            }
        }, 100);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.isDying = true;
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }

    /**
    
    Checks if the chicken object is dead.
    @returns {boolean} - Whether or not the chicken object is dead.
    */
    isDead() {
        return this.energy <= 0;
    }
}
