// Diese Klasse stellt ein Objekt dar, das gezeichnet werden kann
class DrawableObject {
  // Position und Größe des Objekts
  x = 120;
  y = 280;
  height = 150;
  width = 100;
  // Das Bild des Objekts
  img;
  // Ein Cache für bereits geladene Bilder
  imageCache = {};
  // Der aktuelle Index des Bildes im Cache
  currentImage = 0;
  // Die Distanz, die das Objekt in jedem Frame zurücklegt
  distance = 1;

  // Lädt ein Bild und speichert es in img
  loadImage(path) {
      this.img = new Image();
      this.img.src = path;
  }

  // Zeichnet das Objekt auf den Canvas-Kontext
  draw(ctx) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  // Zeichnet einen Rahmen um das Character-Objekt
  drawFrameCharacter(ctx) {
      if (this instanceof Character) {
        const frameWidth = 5; // Rahmenbreite
        ctx.lineWidth = frameWidth;
        ctx.strokeStyle = 'blue';
        const x = this.x - frameWidth / 2;
        const y = this.y - frameWidth / 2;
        const width = this.width + frameWidth;
        const height = this.height + frameWidth;
        ctx.strokeRect(x, y, width, height);
      }
    }

  // Zeichnet einen Rahmen um das Chicken-Objekt
  drawFrameChicken(ctx) {
      if (this instanceof Chicken ) {
        const frameWidth = 5; // Rahmenbreite
        ctx.lineWidth = frameWidth;
        ctx.strokeStyle = 'blue';
        const x = this.x - frameWidth / 2;
        const y = this.y - frameWidth / 2;
        const width = this.width + frameWidth;
        const height = this.height + frameWidth;
        ctx.strokeRect(x, y, width, height);
      }
    }

  // Zeichnet einen Rahmen um das Smallchicken-Objekt
  drawFrameSmallchicken(ctx) {
      if (this instanceof Smallchicken ) {
        const frameWidth = 5; // Rahmenbreite
        ctx.lineWidth = frameWidth;
        ctx.strokeStyle = 'blue';
        const x = this.x - frameWidth / 2;
        const y = this.y - frameWidth / 2;
        const width = this.width + frameWidth;
        const height = this.height + frameWidth;
        ctx.strokeRect(x, y, width, height);
      }
    }

  /**
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...] 
   * Lädt alle Bilder aus dem Array in den imageCache
   */
  loadImages(arr) {
      arr.forEach((path) => {
          let img = new Image();
          img.src = path;
          this.imageCache[path] = img;
      });
  }
}
