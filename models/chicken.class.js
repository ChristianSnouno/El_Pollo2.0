// Diese Klasse stellt ein Huhn dar, das sich auf dem Bildschirm bewegt
class Chicken extends MovableObject {
    // Größe des Huhns und seine Y-Position
    height = 45;
    width = 60;
    y = 375;

    // Offset-Werte für Kollisionserkennung
    offset = {
        top: 20,
        bottom: 30,
        left: 20,
        right: 20
    }

    // Eine Liste von Bildern, die die Animation des Huhns darstellen, wenn es läuft
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    // Eine Liste von Bildern, die die Animation des Huhns darstellen, wenn es tot ist
    IMAGES_DEAD = ['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'];

    // Konstruktor des Huhns, der seine Position setzt und die Animation startet
    constructor(x) {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    // Startet die Animation des Huhns
    animate() {
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 5000);

        setInterval(() => {
            if (!this.isDead()) {
                if (this.otherDirection) {
                    this.moveRight();
                }
                else {
                    this.moveLeft();
                }
            }
        }, 100);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
