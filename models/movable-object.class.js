class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    progessCoinBar = 0;
    progessBottleBar = 0;



    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        // Throwable object should always fall
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 180;
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0 ;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1; 
    }

    isDead() {
        
        return this.energy == 10;
    }

    kill() {
        this.energy = 0;
    }



raiseProgressbarCoin() {
    if (this.progessCoinBar < 100) 

    this.progessCoinBar += 5;
}

raiseProgressbarBottle() {
    if (this.progessBottleBar < 100) 
    this.progessBottleBar += 5;
}

decreaseBottle() {
    if (this.progessBottleBar > 0 ) 
    this.progessBottleBar -= 5;
}

    playAnimation(images) {
        // let i = 7 % 6; => 1, Rest 1 
        let i = this.currentImage % images.length;
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}