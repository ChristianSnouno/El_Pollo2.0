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
    


    // Konstruktor der Klasse Endboss
    constructor() {
        // Laden des ersten Bildes, wenn der Endboss läuft
        super().loadImage(this.IMAGES_WALKING[0]);
        // Laden aller Bilder des Endbosses
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        // Startposition des Endbosses
        this.x = 2500;
        // Geschwindigkeit des Endbosses
        this.speed = 10;
        // Starten der Animation des Endbosses
        this.animate();
    }

    // Diese Funktion animiert den Endboss
    animate() {
        // Wechsel der Bewegungsrichtung des Endbosses alle 5 Sekunden
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);
        // Bewegung des Endbosses alle 100 Millisekunden je nach Bewegungsrichtung
        setInterval(() => {
            if (this.otherDirection) {
                this.moveRight();
            }
            else {
                this.moveLeft();
            }
        }, 100);
        // Spielen der Bilder-Animation des Endbosses alle 200 Millisekunden
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

            // Wenn der Endboss tot ist, wird die entsprechende Animation abgespielt
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
        endbossSound();
    }
}, 200);

    }
}