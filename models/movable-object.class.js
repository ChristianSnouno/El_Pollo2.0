class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    progessCoinBar = 0;
    progessBottleBar = 0;

    /**
     * Bewirkt, dass das Objekt der Schwerkraft folgt
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Prüft, ob das Objekt sich über dem Boden befindet
     * @returns {boolean} Gibt true zurück, wenn sich das Objekt über dem Boden befindet, andernfalls false
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 270;
        }
    }

    /**
     * Prüft, ob das Objekt mit einem anderen Objekt kollidiert
     * @param {MovableObject} mo Das andere Objekt, mit dem kollidiert wird
     * @returns {boolean} Gibt true zurück, wenn das Objekt mit dem anderen Objekt kollidiert, andernfalls false
     */
    isColliding(mo) {
        return (
            this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
        );
    }

    /**
     * Reduziert die Energie des Objekts bei einem Treffer
     */
    hit() {
        this.energy -= 15;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Prüft, ob das Objekt in den letzten Sekunden getroffen wurde
     * @returns {boolean} Gibt true zurück, wenn das Objekt in den letzten Sekunden getroffen wurde, andernfalls false
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * Prüft, ob das Objekt tot ist
     * @returns {boolean} Gibt true zurück, wenn die Energie des Objekts bei 10 ist, andernfalls false
     */
    isDead() {
        if (this.energy == 10) return gameOver();
    }

    /**
     * Prüft, ob der Endgegner tot ist
     * @returns {boolean} Gibt true zurück, wenn die Energie des Endgegners bei 10 ist, andernfalls false
     */
    EndbossIsDead() {
        if (this.energy == 10) return gameWin();
    }

    /**
     * Tötet das Objekt
     */
    kill() {
        this.energy = 0;
    }

    /**
     * Tötet das Objekt, wenn es von einem Huhn getötet wird
     * @returns {number} Gibt 0 zurück
     */
    chickenKilled() {
        return (this.energy = 0);

    }

    /**
     * Erhöht die Fortschrittsanzeige der Münzen, wenn sie nicht bereits bei 100 ist
     */
    raiseProgressbarCoin() {
        if (this.progessCoinBar < 100) this.progessCoinBar += 5;
    }

    /**
     * Erhöht die Fortschrittsanzeige der Flaschen, wenn sie nicht bereits bei 100 ist
     */
    raiseProgressbarBottle() {
        if (this.progessBottleBar < 100) this.progessBottleBar += 5;
    }

    /**
     * Reduziert die Fortschrittsanzeige der Flaschen, wenn sie nicht bereits bei 0 ist
     */
    decreaseBottle() {
        if (this.progessBottleBar > 0) this.progessBottleBar -= 5;
    }

    /**
     * Spielt eine Animation mit einer Reihe von Bildern ab
     * @param {string[]} images Ein Array mit den Bildpfaden der Bilder für die Animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Bewegt das Objekt nach rechts mit der aktuellen Geschwindigkeit
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Bewegt das Objekt nach links mit der aktuellen Geschwindigkeit
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Lässt das Objekt springen, indem es seine Geschwindigkeit in y-Richtung auf 25 setzt
     */
    jump() {
        this.speedY = 25;
    }
}
