
class DrawableObject {
/**

This class represents an object that can be drawn on the canvas.
/
/*
The x-coordinate of the object.
@type {number}
*/
x = 120;
/**

The y-coordinate of the object.
@type {number}
*/
y = 280;
/**

The height of the object.
@type {number}
*/
height = 150;
/**

The width of the object.
@type {number}
*/
width = 100;
/**

The image of the object.
@type {HTMLImageElement}
*/
img;
/**

A cache for already loaded images.
@type {object}
*/
imageCache = {};
/**

The current index of the image in the cache.
@type {number}
*/
currentImage = 0;
/**

The distance that the object moves in every frame.
@type {number}
*/
distance = 1;
/**

Loads an image and stores it in the img property.
@param {string} path - The path to the image file.
*/
loadImage(path) {
this.img = new Image();
this.img.src = path;
}
/**

Draws the object on the canvas context.
@param {CanvasRenderingContext2D} ctx - The canvas context.
*/
draw(ctx) {
ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
/**

Numerical offsets for this instance's coordinates and dimensions, used for collision check.
@type {object}
*/
offset = {
top: 0,
left: 0,
right: 0,
bottom: 0
};
/**

Draws a frame around the object.
@param {CanvasRenderingContext2D} ctx - The canvas context.
*/
drawFrame(ctx) {
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
const x = this.x + this.offset.left;
const y = this.y + this.offset.top;
const w = this.width - this.offset.left - this.offset.right;
const h = this.height - this.offset.top - this.offset.bottom;
ctx.strokeRect(x, y, w, h);
}
/**

Draws a frame around the Character object.
@param {CanvasRenderingContext2D} ctx - The canvas context.
*/
drawFrameCharacter(ctx) {
if (this instanceof Character) {
const frameWidth = 5; // Frame width
ctx.lineWidth = frameWidth;
ctx.strokeStyle = 'blue';
const x = this.x - frameWidth / 2;
const y = this.y - frameWidth / 2;
const width = this.width + frameWidth;
const height = this.height + frameWidth;
ctx.strokeRect(x, y, width, height);
}
}
/**

Draws a frame around the Chicken object.
@param {CanvasRenderingContext2D} ctx - The canvas context.
*/
drawFrameChicken(ctx) {
if (this instanceof Chicken) {
const frameWidth = 5; // Frame width
ctx.lineWidth = frameWidth;
ctx.strokeStyle = 'blue';
const x = this.x - frameWidth / 2;
const y = this.y - frameWidth / 2;
const width = this.width + frameWidth;
const height = this.height + frameWidth;
      ctx.strokeRect(x, y, width, height);
    }
  }

  /**
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
   * Loads all images from the array into the imageCache
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
