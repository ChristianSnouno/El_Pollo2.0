class Keyboard {
  /** @type {boolean} */
  LEFT = false;

  /** @type {boolean} */
  RIGHT = false;

  /** @type {boolean} */
  UP = false;

  /** @type {boolean} */
  DOWN = false;

  /** @type {boolean} */
  SPACE = false;

  /** @type {boolean} */
  D = false;

  constructor() {
    // The two methods that set the event listeners are called in the constructor
    // so that keyboard and touchpad events can be processed immediately.
    this.eventKeyboardBtns();
    this.eventTouchpadBtns();
  }

  // This method sets up event listeners for keyboard events.
  eventKeyboardBtns() {
    // Attaches an event listener to the window object for the 'keydown' event.
    window.addEventListener('keydown', (e) => {
      // If the key with code 39 (right arrow) is pressed, sets the RIGHT property to "true".
      if (e.keyCode == 39) {
        this.RIGHT = true;
      }
      // If the key with code 37 (left arrow) is pressed, sets the LEFT property to "true".
      if (e.keyCode == 37) {
        this.LEFT = true;
      }
      // If the key with code 38 (up arrow) is pressed, sets the UP property to "true".
      if (e.keyCode == 38) {
        this.UP = true;
      }
      // If the key with code 40 (down arrow) is pressed, sets the DOWN property to "true".
      if (e.keyCode == 40) {
        this.DOWN = true;
      }
      // If the spacebar is pressed, sets the SPACE property to "true".
      if (e.keyCode == 32) {
        this.SPACE = true;
      }
      // If the key with code 68 (letter D) is pressed, sets the D property to "true".
      if (e.keyCode == 68) {
        this.D = true;
      }
    });
    // Attaches an event listener to the window object for the 'keyup' event.
    window.addEventListener('keyup', (e) => {
      // If the key with code 39 (right arrow) is released, sets the RIGHT property to "false".
      if (e.keyCode == 39) {
        this.RIGHT = false;
      }
      // If the key with code 37 (left arrow) is released, sets the LEFT property to "false".
      if (e.keyCode == 37) {
        this.LEFT = false;
      }
      // If the key with code 38 (up arrow) is released, sets the UP property to "false".
      if (e.keyCode == 38) {
        this.UP = false;
      }
      // If the key with code 40 (down arrow) is released, sets the DOWN property to "false".
      if (e.keyCode == 40) {
        this.DOWN = false;
      }
      // If the spacebar is released, sets the SPACE property to "false".
      if (e.keyCode == 32) {
        this.SPACE = false;
      }
      // If the key with code 68 (letter D) is released, sets the D property to "false".
      if (e.keyCode == 68) {
        this.D = false;
      }
    });
  }

  eventTouchpadBtns() {
    setTimeout(() => {
      document.getElementById('btn-left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.LEFT = true;
      });

      document.getElementById('btn-left').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.LEFT = false;
      });

      document.getElementById('btn-right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.RIGHT = true;
      });

      document.getElementById('btn-right').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.RIGHT = false;
      });

      document.getElementById('btn-up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.SPACE = true;
      });

      document.getElementById('btn-up').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.SPACE = false;
      });

      document.getElementById('btn-bottle').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.D = true;
      });

      document.getElementById('btn-bottle').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.D = false;
      });
    }, 500);
  }
}