/**
 * Class representing a Bottle object.
 * @extends MovableObject
 */
class Bottle extends MovableObject {
  /**
   * The width of the bottle.
   * @type {number}
   */
  width = 90;

  /**
   * The height of the bottle.
   * @type {number}
   */
  height = 90;

  /**
   * An array of image paths for the bottle animation.
   * @type {string[]}
   */
  IMAGES = [
    'img/6.botella/2.Botella_enterrada1.png',
    'img/6.botella/2.Botella_enterrada1.png',
    'img/6.botella/1.Marcador.png',
    'img/6.botella/2.Botella_enterrada2.png',
    'img/6.botella/2.Botella_enterrada2.png',
  ];

  /**
   * The offset values for the bottle.
   * @type {Object}
   * @property {number} top - The top offset value.
   * @property {number} bottom - The bottom offset value.
   * @property {number} left - The left offset value.
   * @property {number} right - The right offset value.
   */
  offset = {
    top: 10,
    bottom: 10,
    left: 30,
    right: 30,
  }

  /**
   * Creates a Bottle object.
   * @param {number} x - The x-coordinate of the bottle.
   * @param {number} y - The y-coordinate of the bottle.
   */
  constructor(x, y) {
    super().loadImage('img/6.botella/2.Botella_enterrada1.png');
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.animate();
  }

  /**
   * Animates the bottle by playing its animation images.
   */
  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 300);
  }
}
