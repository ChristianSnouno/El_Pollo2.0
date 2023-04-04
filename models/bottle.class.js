class Bottle extends MovableObject {
    width = 90; // Breite der Flasche
    height = 90; // Höhe der Flasche
    IMAGES = [
        'img/6.botella/2.Botella_enterrada1.png', 
        'img/6.botella/2.Botella_enterrada1.png', 
        'img/6.botella/1.Marcador.png', 
        'img/6.botella/2.Botella_enterrada2.png', 
        'img/6.botella/2.Botella_enterrada2.png', 
    ];
    constructor(x, y) {
        console.log(y);
        super().loadImage('img/6.botella/2.Botella_enterrada1.png'); // Laden des Flaschenbildes
        this.loadImages(this.IMAGES); // Laden aller Bilder
        this.x = x; // X-Koordinate der Flasche
        this.y = y; // Y-Koordinate der Flasche
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES); // Animation der Flasche
        }, 300); // Zeitintervall zwischen den Animationen
    }
}
