// Diese Klasse stellt eine Münze dar, die eingesammelt werden kann
class Coin extends MovableObject {
    // Größe der Münze
    width = 100;
    height = 100;
    // Eine Liste von Bildern, die die Animation der Münze darstellen
    IMAGES = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    // Konstruktor der Münze, der ihre Position setzt und die Animation startet
    constructor(x, y) {
        console.log(y);
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES);
        this.x = x;
        this.y = y;
        this.animate();
    }

    // Startet die Animation der Münze
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}
