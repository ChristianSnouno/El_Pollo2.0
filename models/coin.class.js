/**

A class that represents a coin object that can be collected.
@extends MovableObject
*/
class Coin extends MovableObject {
    /**
    
    The width of the coin object.
    @type {number}
    */
    width = 100;
    /**
    
    The height of the coin object.
    @type {number}
    */
    height = 100;
    /**
    
    An array of image paths representing the animation frames of the coin object.
    @type {string[]}
    */
    IMAGES = [
    'img/8.Coin/Moneda1.png',
    'img/8.Coin/Moneda2.png'
    ];
    /**
    
    The collision detection offset of the coin object.
    @type {{top: number, bottom: number, left: number, right: number}}
    */
    offset = {
    top: 35,
    bottom: 35,
    left: 25,
    right: 25,
    };
    /**
    
    Creates a new coin object with the specified x and y coordinates.
    @param {number} x The x coordinate of the coin object.
    @param {number} y The y coordinate of the coin object.
    */
    constructor(x, y) {
    super().loadImage('img/8.Coin/Moneda1.png');
    this.loadImages(this.IMAGES);
    this.x = x;
    this.y = y;
    this.animate();
    }
    /**
    
    Animates the coin object by playing its image sequence.
    */
    animate() {
    setInterval(() => {
    this.playAnimation(this.IMAGES);
    }, 200);
    }
    }
    
    
    
    
    