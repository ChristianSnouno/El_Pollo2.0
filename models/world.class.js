class World {
  ctx;
  canvas;
  keyboard;
  intervallIds = [];
  camera_x = 0;
  level;
  throwableObjects = [];
  character = new Character();
  endboss = new Endboss();
  statusBar = new StatusBar();
  statusBarEndboss = new EndbossBar();
  statusBarBottle = new BottleBar();
  statusBarCoins = new CoinsBar();
  deadEnemies = [];
  maxBottlesToThrow = 0;
  clearRect = new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0);

  /**
  * Represents the game world and defines all its variables.
  * 
  * @param {Object} canvas - The HTML canvas element used to draw the game world.
  * @param {Keyboard} keyboard - The keyboard used to control the game world.
  */
  constructor(canvas, keyboard) {
    this.level = createLevel1();
    this.endBoss = new Endboss(this); 
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }
  /**
   * Initializes the game world, setting the character's reference to the world.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Runs the game loop, calling checkCollisions and checkThrowObjects at a certain interval.
   */
  run() {
    playSound();
    setInterval(() => {
      this.checkCollisions();   
     }, 50);
    setInterval(() => {
      this.checkCollisionsEndBoss();
      this.checkThrowObjects();
    }, 200);
  }

  checkCharacterPosition(endBossX, endBossDirection) {
    if (this.character.x > endBossX && endBossDirection == 1) { // Wenn der Charakter hinter dem Endboss auf der rechten Seite steht
      endGame('gameOver'); // Game over
    } else if (this.character.x < endBossX && endBossDirection == -1) { // Wenn der Charakter hinter dem Endboss auf der linken Seite steht
      endGame('gameOver'); // Game over
    }
  }

  /**
   * Checks if the user has pressed the "D" key and if there are still bottles left to throw.
   * If so, a new bottle is created and the corresponding counter is reduced.
   */
  checkThrowObjects() {
    if (this.keyboard.D && this.maxBottlesToThrow > 0) {
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
      this.statusBarBottle.setPercentage(this.character.progessBottleBar);
      this.character.decreaseBottle();
      this.throwableObjects.push(bottle);
      this.maxBottlesToThrow--;
    }

    // Check if a thrown bottle has hit an enemy
    this.throwableObjects.forEach(throwableObject => {
      this.level.endBoss.forEach(enemy => {
        if (!enemy.EndbossIsDead()) {
          if (throwableObject.isColliding(enemy)) {
            this.endboss.hit(35);
            enemy.hit();
            this.statusBarEndboss.setPercentage(this.endboss.energy);

            if (this.endboss.isDead()) {
              setTimeout(() => {
                let position = this.level.endBoss.indexOf(enemy);
                this.level.endBoss.splice(position, 1);
              }, 2000);
            }
          }
        }
      });
    });
  }

  /**
   * Checks if the character has collided with an enemy, a coin, or a bottle.
   */
  checkCollisions() {
    // Function that checks for collisions
    const checkCollisionsInternal = () => {
      // Check only if there are still enemies left
      if (this.level.enemies.length > 0) {
        const newEnemies = this.level.enemies.filter(enemy => !this.character.isColliding(enemy) || this.character.isHurt());
        if (newEnemies.length < this.level.enemies.length) {
          const killedEnemy = this.level.enemies.find(enemy => this.character.isColliding(enemy));
          if (killedEnemy && this.character.isAboveGround()) {
            this.character.speedY = 10;
            this.enemyIsDead();
            killedEnemy.chickenKilled();
            // Set the array of enemies to the new array without the collided enemy
            this.level.enemies = newEnemies;
          } else {
            // If the character is hurt, decrease its energy
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
          }
        }
      } else {
        // Stop the collision detection if there are no more enemies present
        clearInterval(this.collisionIntervalId);
      }
    }

    // Runs the collision check every two seconds
    this.collisionIntervalId = setInterval(checkCollisionsInternal, 100);


    // Checks if the character collides with coins
    this.checkCollisionsWihtCoins(this.level.coins);
    // Checks if the character collides with bottles
    this.checkCollisionsWihtBottle(this.level.bottles);
  }

  checkCollisionsEndBoss() {
    if (this.character.isColliding(this.endboss)) {
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy);
  
      // Calculate distance between character and back edge of endboss
      const distance = this.endboss.x + this.endboss.width - this.character.x;
      if (distance <= this.character.width && distance >= 0) {
        this.endGame('gameOver');
      }
      else {
        this.character.speed = 0;
      }
    }
  }


  /**
  
  This method checks if the character collides with a coin object and increases the character's coin progress bar accordingly.
  If a collision occurs, the respective coin object is removed from the array and the progress bar and a coin sound effect are updated.
  @function checkCollisionsWithCoins
  @param {Array} array - An array of coin objects
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
  /**
  
  This method checks if the character collides with a bottle object and increases the character's bottle progress bar by a certain amount.
  If a collision occurs, the respective bottle object is removed from the array, the bottle throwing sound effect is played,
  the bottle progress bar is updated with the new progress value and the maximum number of bottles the character can throw is increased.
  @function checkCollisionsWithBottle
  @param {Array} array - An array of bottle objects
  */
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
      }
    });
  }

  /**

This method increases the character's coin progress bar by 5.
@function raiseProgressbarCoin
*/
  raiseProgressbarCoin() {
    this.progessCoinBar += 5;
  }

  /**
  
  This method removes the given enemy from the level's enemies array.
  @function eraseEnemyFromArray
  @param {Object} enemy - The enemy object to be removed from the array
  */

  eraseEnemyFromArray(enemy) {
    // Entfernt den übergebenen Gegner aus dem Array der Gegner des Levels.
    let i = this.level.enemies.indexOf(enemy);
    this.level.enemies.splice(i, 1);
  }

  /**

This function is the main drawing function of the game and is constantly called.
It adds objects to the map and draws them, as well as drawing the status bars for bottles, coins, end boss health, and character health.
@function draw
*/

  draw() {

    this.addToMap(this.clearRect);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.endBoss);
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

  /**

Adds each object in the passed array list to the world.

@name addObjectsToMap
@param {Array} objects - An array list of objects to be added to the world.
*/

  addObjectsToMap(objects) {
    // Fügt jedes Objekt in der übergebenen Array-Liste der Welt hinzu.
    objects.forEach(o => {
      this.addToMap(o);
    });
  }

  /**

Adds the passed Map Object (mo) to the world and calls its draw method.

@name addToMap
@param {MapObject} mo - The Map Object to be added to the world.
*/

  addToMap(mo) {
    // Fügt das übergebene Map Object (mo) in die Welt hinzu und ruft seine draw-Methode auf.
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    if (mo instanceof BackgroundObject) {
      this.ctx.translate(this.camera_x * mo.distance, 0);
    }

    mo.draw(this.ctx);
    /*
   mo.drawFrame(this.ctx)
   mo.drawFrameCharacter(this.ctx);
   mo.drawFrameChicken(this.ctx);
   mo.drawFrameSmallchicken(this.ctx);
*/

    if (mo instanceof BackgroundObject) {
      this.ctx.translate(-this.camera_x * mo.distance, 0);
    }
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**

Flips the passed object horizontally and updates its position.
@name flipImage
@param {MapObject} mo - The Map Object to be flipped horizontally.
*/

  flipImage(mo) {
    // Spiegelt das übergebene Objekt horizontal und aktualisiert seine Position.
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**

Flips the passed object back to its original position.
@name flipImageBack
@param {MapObject} mo - The Map Object to be flipped back to its original position.
*/

  flipImageBack(mo) {
    // Spiegelt das übergebene Objekt zurück, um es wieder horizontal auszurichten.
    mo.x = mo.x * -1;
    this.ctx.restore();
  }


  /**

Sets the "isDying" property of the enemy at the passed index to true, and removes it from the enemies array after one second.
@name enemyIsDead
@param {number} i - The index of the enemy to be killed.
*/



  async enemyIsDead(i) {
    if (this.level.enemies[i]) { // Überprüfen Sie, ob das Huhn definiert ist
      this.level.enemies[i].isDying = true; // "isDying" auf true setzen
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.level.enemies.splice(i, 1);
    }

  }


}
