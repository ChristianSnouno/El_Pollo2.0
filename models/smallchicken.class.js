/**
 * Eine Klasse, die ein kleines Huhn darstellt, das sich nach links oder rechts bewegen kann.
 * Erbt von der MovableObject-Klasse.
 */
 class Smallchicken extends MovableObject {
    // Größe und Position des Huhns
    height = 35;
    width = 40;
    y = 375;

    // Bilder des Huhns für verschiedene Aktionen
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png',
    ];
    IMAGES_DEAD = ['img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'];

    /**
     * Konstruiert ein neues Smallchicken-Objekt
     * @param {number} x - Die anfängliche x-Position des Huhns
     */
    constructor(x) {
        // Aufruf des Konstruktors der MovableObject-Klasse
        super();
        // Laden des Bildes für das Huhn
        super.loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        // Laden der Lauf- und Todesbilder des Huhns
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        // Zufällige X-Position und Geschwindigkeit des Huhns
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        // Starten der Animation
        this.animate();
    }

    /**
     * Eine Methode, die die Bewegung und Animation des Huhns steuert
     */
    animate() {
        // Ändern der Bewegungsrichtung alle 5 Sekunden
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);
        // Bewegung des Huhns nach links oder rechts, je nach aktueller Richtung
        setInterval(() => {
            if (!this.isDead()) {
                if (this.otherDirection) {
                    this.moveRight();
                } else {
                    this.moveLeft();
                }
            }
        }, 100);
        // Spielen der Lauf- oder Deadsanimation, je nach Zustand des Huhns
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
