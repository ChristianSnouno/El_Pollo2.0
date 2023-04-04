/**

A class that extends the MovableObject class and represents a cloud object.
@extends MovableObject
*/
class Cloud extends MovableObject {
    /**
    
    The y coordinate of the cloud object.
    @type {number}
    */
    y = 50;
    /**
    
    The width of the cloud object.
    @type {number}
    */
    width = 500;
    /**
    
    The height of the cloud object.
    @type {number}
    */
    height = 250;
    /**
    
    Creates a new cloud object with the specified width and height.
    @param {number} width The width of the cloud object.
    @param {number} height The height of the cloud object.
    */
    constructor(width, height) {
    super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
    this.width = width;
    this.height = height;
    this.x = Math.random() * 500; // Number between 0 and 500
    this.animate();
    }
    /**
    
    Animates the cloud object by moving it to the left.
    */
    animate() {
    setInterval(() => { this.moveLeft() }, 1000 / 60);
    }
    }
    
    
    