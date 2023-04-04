class World {
    // Hier werden alle Variablen definiert.
    ctx;
    canvas;
    keyboard;
    intervallIds = [];
    camera_x = 0;
    level = level1;
    throwableObjects = [];
    character = new Character();
    endboss = new Endboss();
    statusBar = new StatusBar();
    statusBarEndboss = new EndbossBar();
    statusBarBottle = new BottleBar();
    statusBarCoins = new CoinsBar();
    maxBottlesToThrow = 0;
    clearRect = new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0);

    // Der Konstruktor initialisiert die Klasse und ruft die benötigten Funktionen auf.
    constructor(canvas, keyboard,) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    // Diese Funktion löscht alle gesetzten Intervalle.
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    // Hier wird die Welt initialisiert, d.h. der Charakter bekommt einen Verweis auf die Welt.
    setWorld() {
        this.character.world = this;
        console.log(this);
    }

    // Die run-Funktion ruft die Funktionen checkCollisions und checkThrowObjects in einem bestimmten Intervall auf.
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    // Die checkThrowObjects-Funktion überprüft, ob der Benutzer die Taste "D" gedrückt hat, und ob noch Flaschen zum Werfen vorhanden sind. Wenn ja, wird eine neue Flasche erstellt und der entsprechende Zähler reduziert.
    checkThrowObjects() {
        if (this.keyboard.D && this.maxBottlesToThrow > 0) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.statusBarBottle.setPercentage(this.character.progessBottleBar);
            this.character.decreaseBottle();
            this.throwableObjects.push(bottle);
            this.maxBottlesToThrow--;
        }

        // Hier wird überprüft, ob eine geworfene Flasche einen Gegner getroffen hat.
        this.throwableObjects.forEach(throwableObject => {
            this.level.enemies.forEach(enemy => {
                if (!enemy.EndbossIsDead()) {
                    if (throwableObject.isColliding(enemy)) {
                        this.endboss.hit(35);
                        console.log("Enemy Hit");
                        enemy.hit();
                        this.statusBarEndboss.setPercentage(this.endboss.energy);

                        if (enemy.EndbossIsDead()) {
                            setTimeout(() => {
                                let position = this.level.enemies.indexOf(enemy);
                                this.level.enemies.splice(position, 1);
                                console.log(this.endboss.energy, "Enemy Hit");
                            }, 2000);
                        }
                    }
                }
            });
        });
    }

    // Die checkCollisions-Funktion überprüft, ob der Charakter mit einem Feind, einer Münze oder einer Flasche kollidiert ist.

    checkCollisions() {
        // Überprüft, ob der Charakter mit einem Feind kollidiert ist
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !this.character.isHurt()) {
                if (this.character.isAboveGround() && !(enemy instanceof Endboss)) {
                    // Wenn der Charakter über dem Feind ist und es kein Endboss ist, tötet er das Huhn des Feinds
                    this.character.speedY = 20;
                    enemy.chickenKilled();
                    // Entfernt den Feind aus dem Array, nachdem das Huhn getötet wurde
                    setTimeout(() => {
                        this.eraseEnemyFromArray(enemy);
                    }, 800);
                } else {
                    // Wenn der Charakter verletzt wird, verringert es seine Energie
                    this.character.hit()
                    this.statusBar.setPercentage(this.character.energy);
                }
            }
        });

        // Überprüft, ob der Charakter mit Münzen kollidiert ist
        this.checkCollisionsWihtCoins(this.level.coins);
        // Überprüft, ob der Charakter mit Flaschen kollidiert ist
        this.checkCollisionsWihtBottle(this.level.bottles);
    }

    /**
     * Diese Methode prüft, ob der Charakter mit einem Münzobjekt kollidiert und erhöht entsprechend den Münzfortschrittsbalken des Charakters.
     * Wenn eine Kollision auftritt, wird das betreffende Münzobjekt aus dem Array entfernt und der Fortschrittsbalken sowie ein Münzgeräusch werden ausgegeben.
     * 
     * @param {Array} array - Ein Array von Münzobjekten
     */
    checkCollisionsWihtCoins(array) {
        array.forEach((element, index) => {
            if (this.character.isColliding(element)) {
                // Entfernt das Münzobjekt aus dem Array
                array.splice(index, 1);
                // Erhöht den Fortschrittsbalken für Münzen des Charakters
                this.character.raiseProgressbarCoin();
                // Aktualisiert die Anzeige des Fortschrittsbalkens für Münzen
                this.statusBarCoins.setPercentage(this.character.progessCoinBar);
                // Spielt ein Soundeffekt ab, um anzuzeigen, dass eine Münze eingesammelt wurde
                playCoinSound();
            }
        });
    }

    checkCollisionsWihtBottle(array) {
        array.forEach((element, index) => {
            // Überprüft, ob das Flaschenobjekt mit dem Spieler kollidiert
            if (this.character.isColliding(element)) {
                // Entfernt das Flaschenobjekt aus dem Array
                array.splice(index, 1);
                // Erhöht den Fortschrittsbalken für Flaschen um einen bestimmten Betrag
                this.character.raiseProgressbarBottle();
                // Spielt den Soundeffekt für das Werfen einer Flasche ab
                playThrowSound();
                // Aktualisiert den Statusbalken für Flaschen mit dem neuen Fortschrittswert
                this.statusBarBottle.setPercentage(this.character.progessBottleBar);
                // Erhöht die maximale Anzahl von Flaschen, die der Spieler werfen kann
                this.maxBottlesToThrow++;
                console.log(this.character.progessCoinBar, this.character.progessBottleBar);
            }
        });
    }


    raiseProgressbarCoin() {
        // Erhöht den Fortschrittsbalken für Münzen um 5.
        this.progessCoinBar += 5;
    }

    eraseEnemyFromArray(enemy) {
        // Entfernt den übergebenen Gegner aus dem Array der Gegner des Levels.
        let i = this.level.enemies.indexOf(enemy);
        this.level.enemies.splice(i, 1);
    }

    draw() {
        // Die Hauptfunktion zum Zeichnen des Spiels, wird ständig aufgerufen.
        this.addToMap(this.clearRect);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);

        // Zeichnet die Leisten für Flaschen, Münzen, Endbossenergie und Charakterenergie.
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarBottle);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarEndboss);

        let self = this;
        // Stellt sicher, dass das Spiel weiterhin gezeichnet wird, solange es läuft.
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        // Fügt jedes Objekt in der übergebenen Array-Liste der Welt hinzu.
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        // Fügt das übergebene Map Object (mo) in die Welt hinzu und ruft seine draw-Methode auf.
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        if (mo instanceof BackgroundObject) {
            this.ctx.translate(this.camera_x * mo.distance, 0);
        }
        mo.draw(this.ctx);
        mo.drawFrameCharacter(this.ctx);
        mo.drawFrameChicken(this.ctx);
        mo.drawFrameSmallchicken(this.ctx);

        if (mo instanceof BackgroundObject) {
            this.ctx.translate(-this.camera_x * mo.distance, 0);
        }
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        // Spiegelt das übergebene Objekt horizontal und aktualisiert seine Position.
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        // Spiegelt das übergebene Objekt zurück, um es wieder horizontal auszurichten.
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}