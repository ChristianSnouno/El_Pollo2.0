// Die Klasse Endboss erweitert die MovableObject-Klasse
class Endboss extends MovableObject {
    
    // Größe des Endbosses
    height = 400;
    width = 250;
    // Position des Endbosses
    y = 55;
  
    // Bilder, die verwendet werden, wenn der Endboss läuft
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    // Bilder, die verwendet werden, wenn der Endboss tot ist
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    // Bilder, die verwendet werden, wenn der Endboss verletzt ist
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',

    ];
    
    // Konstruktor der Klasse Endboss
    constructor(){
        // Laden des ersten Bildes, wenn der Endboss läuft
        super().loadImage(this.IMAGES_WALKING[0]);
        // Laden aller Bilder des Endbosses
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        // Startposition des Endbosses
        this.x = 2500;
        // Geschwindigkeit des Endbosses
        this.speed = 10;
        // Starten der Animation des Endbosses
        this.animate();
    }

    // Diese Funktion animiert den Endboss
animate() {
    // Wechsel der Bewegungsrichtung des Endbosses alle 5 Sekunden
    setInterval(()=>{
        this.otherDirection = this.otherDirection? false : true;
    }, 5000);
    // Bewegung des Endbosses alle 100 Millisekunden je nach Bewegungsrichtung
    setInterval(()=>{
        if (this.otherDirection) {
            this.moveRight();
         }
         else{
           this.moveLeft();
         }
   }, 100);
    // Spielen der Bilder-Animation des Endbosses alle 200 Millisekunden
    setInterval(() => {
        this.playAnimation(this.IMAGES_WALKING);

        // Wenn der Endboss tot ist, wird die entsprechende Animation abgespielt
        if (this.EndbossIsDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            endbossDeadSound();
        } 
        // Wenn der Endboss verletzt ist, wird die entsprechende Animation abgespielt
        else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            endbossSound();
        }
    }, 200);
}
}