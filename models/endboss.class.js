/**

The Endboss class extends the MovableObject class and represents the game's final boss.
*/
class Endboss extends MovableObject {

    /**
    
    The Endboss's height.
    @type {number}
    */
    height = 400;
    /**
    
    The Endboss's width.
    @type {number}
    */
    width = 250;
    /**
    
    The Endboss's y-coordinate.
    @type {number}
    */
    y = 55;
    /**
    
    Numerical offsets for this instance's coordinates and dimensions, used for collision check.
    @type {{top: number, bottom: number, left: number, right: number}}
    */
    offset = {
        top: 50,
        left: 1,
        right: 1,
        bottom: 50,
    };

    IMAGES_WALKING = [
        'img/4.Endboss/2/1.Alerta/G5.png',
        'img/4.Endboss/2/1.Alerta/G6.png',
        'img/4.Endboss/2/1.Alerta/G7.png',
        'img/4.Endboss/2/1.Alerta/G8.png',
        'img/4.Endboss/2/1.Alerta/G9.png',
        'img/4.Endboss/2/1.Alerta/G10.png',
        'img/4.Endboss/2/1.Alerta/G11.png',
        'img/4.Endboss/2/1.Alerta/G12.png'
    ];

    IMAGES_ANGRY = [
        'img/4.Endboss/2/2.Ataque/G13.png',
        'img/4.Endboss/2/2.Ataque/G14.png',
        'img/4.Endboss/2/2.Ataque/G15.png',
        'img/4.Endboss/2/2.Ataque/G16.png',
        'img/4.Endboss/2/2.Ataque/G17.png',
        'img/4.Endboss/2/2.Ataque/G18.png',
        'img/4.Endboss/2/2.Ataque/G19.png',
        'img/4.Endboss/2/2.Ataque/G20.png'
    ];

    /**
  
  The images used when the Endboss is dead.
  @type {string[]}
  */
    IMAGES_DEAD = [
        'img/4.Endboss/4/G24.png',
        'img/4.Endboss/4/G25.png',
        'img/4.Endboss/4/G26.png',
    ];
    /**
    
    The images used when the Endboss is hurt.
    @type {string[]}
    */
    IMAGES_HURT = [
        'img/4.Endboss/3/G21.png',
        'img/4.Endboss/3/G22.png',
        'img/4.Endboss/3/G23.png',
    ];


    // Constructor of the Endboss class
    constructor() {
        // Load the first image when the Endboss is walking
        super().loadImage(this.IMAGES_WALKING[0]);
        // Load all images of the Endboss
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ANGRY);
        // Starting position of the Endboss
        this.x = 2200;
        // Speed of the Endboss
        this.speed = 0;
        // Start the animation of the Endboss
        this.animate();
        // Set the isHit property to false
        this.isHit = false;
    }


    handleHit() {
        this.isHit = true; // Set isHit to true when the Endboss is hit
        this.speed = 10; // Set the speed to 10 when hit
    }

    // This function animates the Endboss
    animate() {
        // Move the Endboss every 100 milliseconds depending on its movement direction
        setInterval(() => {
            if (this.otherDirection) {
                this.moveRight();
            }
            else {
                this.moveLeft();
            }
        }, 100);

        // Play the Endboss's image animation every 200 milliseconds
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

            // If the Endboss is dead, play the corresponding animation
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                endbossDeadSound();

                const soundTimeout = setTimeout(() => {
                    endbossDeadSoundPause();
                    gameWin();
                }, 2000);

                // If the character is revived, clear the timeout with the clearTimeout function
                if (!this.isDead()) {
                    clearTimeout(soundTimeout);
                }
            }
            // If the Endboss is hurt, play the corresponding animation
            else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.playAnimation(this.IMAGES_ANGRY);
                this.handleHit();
                endbossSound();
            }
        }, 200);

    }
}