/**
 * Represents a background object that is rendered in the game.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
  /**
   * Creates a new background object.
   * @param {string} imagePath - The path to the image for the object.
   * @param {number} x - The starting x-coordinate of the object.
   * @param {number} [distance=1] - The distance factor of the object.
   */
  constructor(imagePath, x, distance = 1) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 0;
    this.distance = distance;
    this.width = 720;
    this.height = 480;
  }
}
