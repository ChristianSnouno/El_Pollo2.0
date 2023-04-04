class MovableObject extends DrawableObject {
    /**
   
   A movable object that extends DrawableObject.
   @class
   @name MovableObject
   @extends DrawableObject
   @memberof object
   @property {number} speed - The horizontal speed of the object.
   @property {boolean} otherDirection - Indicates if the object is moving in the opposite direction.
   @property {number} speedY - The vertical speed of the object.
   @property {number} acceleration - The acceleration of the object.
   @property {number} energy - The energy level of the object.
   @property {number} lastHit - The timestamp of the last hit on the object.
   @property {number} progessCoinBar - The progress level of the coin bar.
   @property {number} progessBottleBar - The progress level of the bottle bar.
   @property {boolean} chickendead - Indicates if the object is killed by a chicken.
   */

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;
    lastHit = 0;
    progessCoinBar = 0;
    progessBottleBar = 0;
    chickendead = false;


    /**
    
    Applies gravity to the object and updates its position and speed accordingly.
    @returns {void}
    */

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    /**
    
    Checks if the object is above the ground.
    @returns {boolean} - Returns true if the object is above the ground, false otherwise.
    @throws {Error} - Throws an error if this is not an instance of ThrowableObject.
    */

    isAboveGround() {
        if (this instanceof ThrowableObject || this.isDead())
            return true;
        else
            return this.y < 230;
    }

    /**

Checks if the object is colliding with another object.
@param {object} mo - The other object to check collision with.
@returns {boolean} - Returns true if the objects are colliding, false otherwise.
*/


    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
    
    Calculates the right border position of the object.
    @returns {number} - Returns the x-coordinate of the right border of the object.
    */


    rightBorder() {
        return this.x + this.width - this.offset.right;
    }

    /**
    
    Calculates the left border position of the object.
    @returns {number} - Returns the x-coordinate of the left border of the object.
    */

    leftBorder() {
        return this.x + this.offset.left;
    }

    /**
    
    Calculates the top border position of the object.
    @returns {number} - Returns the y-coordinate of the top border of the object.
    */

    topBorder() {
        return this.y + this.offset.top;
    }

    /**
    
    Calculates the bottom border position of the object.
    @returns {number} - Returns the y-coordinate of the bottom border of the object.
    */



    bottomBorder() {
        return this.y + this.height - this.offset.bottom;
    }


    /**
    
    Calculates the right border position of the given object.
    @param {object} object - The other object to calculate the right border position for.
    @returns {number} - Returns the x-coordinate of the right border of the given object.
    */


    rightObjectBorder(object) {
        return object.x + object.width - object.offset.right;
    }

    /**
    
    Calculates the left border position of the given object.
    @param {object} object - The other object to calculate the left border position for.
    @returns {number} - Returns the x-coordinate of the left border of the given object.
    */


    leftObjectBorder(object) {
        return object.x + object.offset.left;
    }

    /**
    
    Calculates the top border position of the given object.
    @function
    @name topObjectBorder
    @memberof object
    @param {object} object - The other object to calculate the top border position for.
    @returns {number} - Returns the y-coordinate of the top border of the given object.
    */

    topObjectBorder(object) {
        return object.y + object.offset.top;
    }

    /**
    
    Calculates the bottom border position of the given object.
    @param {object} object - The other object to calculate the bottom border position for.
    @returns {number} - Returns the y-coordinate of the bottom border of the given object.
    */

    bottomObjectBorder(object) {
        return object.y + object.height - object.offset.bottom;
    }


    /**
    
    Reduces the energy of the object when hit.
    @returns {void}
    */
    hit() {
        this.energy -= 18;
        if (this.energy < 0) {
            this.energy = 0;
            this.isDead();
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
 
 Checks if the object was hit in the last few seconds.
 @returns {boolean} - Returns true if the object was hit in the last few seconds, false otherwise.
 */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }
    /**
 
 Checks if the object is dead.
 @returns {boolean} - Returns true if the object's energy is 0 or less, false otherwise.
 */
    isDead() {

        return this.energy <= 0

    }
    /**
  
  Checks if the end boss is dead.
  @returns {boolean} - Returns true if the end boss's energy is 0, false otherwise.
  */

    EndbossIsDead() {
        if (this.energy == 0);
    }

    /**
  
  Kills the object by setting its energy to 0.
  @returns {void}
  */
    kill() {
        this.energy = 0;
    }

    /**
    
    Kills the object when killed by a chicken.
    @returns {number} - Returns 0.
    */
    chickenKilled() {
        return this.chickendead = true;

    }


    /**
  
  Increases the progress bar for coins if it is not already at 100.
  @returns {void}
  */
    raiseProgressbarCoin() {
        if (this.progessCoinBar < 100) this.progessCoinBar += 5;
    }

    /**
 
 Increases the progress bar for bottles if it is not already at 100.
 @returns {void}
 */

    raiseProgressbarBottle() {
        if (this.progessBottleBar < 100) this.progessBottleBar += 5;
    }

    /**
 
 Decreases the progress bar for bottles if it is not already at 0.
 @returns {void}
 */
    decreaseBottle() {
        if (this.progessBottleBar > 0) this.progessBottleBar -= 5;
    }

    /**
  
  Plays an animation with a series of images.
  @param {string[]} images - An array of image paths for the animation.
  @returns {void}
  */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
  
  Moves the object to the right with its current speed.
  @returns {void}
  */
    moveRight() {
        this.x += this.speed;
    }

    /**
  
  Moves the object to the left with its current speed.
  @returns {void}
  */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
  
  Makes the object jump by setting its vertical speed to 18.
  @returns {void}
  */
    jump() {
        this.speedY = 18;
    }
}
