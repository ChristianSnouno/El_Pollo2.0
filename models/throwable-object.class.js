class ThrowableObject extends MovableObject {
    IMAGE_ROTATION_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    /**
     * Erstellt ein neues ThrowableObject.
     * 
     * @param {number} x - Die horizontale Position des Objekts.
     * @param {number} y - Die vertikale Position des Objekts.
     */
    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGE_ROTATION_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 60;
        this.throw();
    }

    /**
     * Lässt das Objekt geworfen werden.
     * Es wird eine Geschwindigkeit und die Schwerkraft angewendet.
     * Das Objekt dreht sich und bewegt sich nach rechts.
     */
    throw() {
        this.speedY = 35;
        this.applyGravity();
        setInterval(() => {
            this.x += 8;
        }, 25);

        setInterval(() => {
            this.playAnimation(this.IMAGE_ROTATION_BOTTLE);
        }, 100);
    }
}
