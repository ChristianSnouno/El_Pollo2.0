/**
 * Represents a character object in the game.
 * @extends MovableObject
 */
class Character extends MovableObject {

  /**
   * The world instance that the character belongs to.
   * @type {World}
   */
  world;



  /**
   * The height of the character object.
   * @type {number}
   */
  height = 195;

  /**
   * The width of the character object.
   * @type {number}
   */
  width = 90;

  /**
   * The starting y-coordinate of the character object.
   * @type {number}
   */
  y = 220;

  /**
   * The speed of the character object.
   * @type {number}
   */
  speed = 10;

  /**
   * Whether the character is currently jumping or not.
   * @type {boolean}
   */
  isJumping = false;

  /**
   * The offset values of the character object for collision detection.
   * @type {Object}
   */
  offset = {
    top: 90,
    left: 10,
    right: 10,
    bottom: 0,
  };



  /**
   * The array of image paths for the walking animation of the character object.
   * @type {string[]}
   */
  IMAGES_WALKING = [
    'img/2.Character/2.Secuencia_caminata/W-21.png',
    'img/2.Character/2.Secuencia_caminata/W-22.png',
    'img/2.Character/2.Secuencia_caminata/W-23.png',
    'img/2.Character/2.Secuencia_caminata/W-24.png',
    'img/2.Character/2.Secuencia_caminata/W-25.png',
  ];

  /**
   * The array of image paths for the jumping animation of the character object.
   * @type {string[]}
   */
  IMAGES_JUMPING = [
    'img/2.Character/3.Secuencia_salto/J-31.png',
    'img/2.Character/3.Secuencia_salto/J-32.png',
    'img/2.Character/3.Secuencia_salto/J-33.png',
    'img/2.Character/3.Secuencia_salto/J-35.png',
    'img/2.Character/3.Secuencia_salto/J-36.png',
    'img/2.Character/3.Secuencia_salto/J-37.png',
    'img/2.Character/3.Secuencia_salto/J-38.png',
    'img/2.Character/3.Secuencia_salto/J-39.png',
  ];

  /**
   * The array of image paths for the dead animation of the character object.
   * @type {string[]}
   */
  IMAGES_DEAD = [
    'img/2.Character/5.Muerte/D-51.png',
    'img/2.Character/5.Muerte/D-52.png',
    'img/2.Character/5.Muerte/D-53.png',
    'img/2.Character/5.Muerte/D-54.png',
    'img/2.Character/5.Muerte/D-55.png',
    'img/2.Character/5.Muerte/D-56.png',
    'img/2.Character/5.Muerte/D-57.png'
  ];

  /**
  
  An array of image paths representing the character's hurt animation.
  @type {Array<string>}
  */
  IMAGES_HURT = [
    'img/2.Character/4.Herido/H-41.png',
    'img/2.Character/4.Herido/H-42.png',
    'img/2.Character/4.Herido/H-43.png'
  ];
  /**
  
  An array of image paths representing the character's idle animation.
  @type {Array<string>}
  */
  IMAGES_IDLE = [
    'img/2.Character/1.IDLE/IDLE/I-1.png',
    'img/2.Character/1.IDLE/IDLE/I-2.png',
    'img/2.Character/1.IDLE/IDLE/I-3.png',
    'img/2.Character/1.IDLE/IDLE/I-4.png',
    'img/2.Character/1.IDLE/IDLE/I-5.png',
    'img/2.Character/1.IDLE/IDLE/I-6.png',
    'img/2.Character/1.IDLE/IDLE/I-7.png',
    'img/2.Character/1.IDLE/IDLE/I-8.png',
    'img/2.Character/1.IDLE/IDLE/I-9.png',
    'img/2.Character/1.IDLE/IDLE/I-10.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-11.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-12.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-13.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-14.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-15.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-16.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-17.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-18.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-19.png',
    'img/2.Character/1.IDLE/LONG_IDLE/I-20.png',
  ];

  constructor() {
    super().loadImage('img/2.Character/2.Secuencia_caminata/W-21.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.applyGravity();
    this.animate(this.IMAGES_WALKING);
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        walkingSound();
      } else {
        walkingSoundPause();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.otherDirection = true;
        walkingSound();
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        endGame('gameOver');
        ;
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        hitSound();
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
        playJumpSound();
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        } else {
          this.playAnimation(this.IMAGES_IDLE);
        }
      }
    }, 60, this.IMAGES_IDLE);
  }

}