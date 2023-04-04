class Keyboard {
  // Hier werden die Tasten als Eigenschaften der Klasse definiert
  // und mit dem Wert "false" initialisiert.
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  D = false;

  constructor() {
    // Die beiden Methoden, welche die Event-Listener setzen, werden im Konstruktor
    // aufgerufen, damit die Tastatur- und Touchpad-Events direkt verarbeitet werden können.
    this.eventKeyboardBtns();
    this.eventTouchpadBtns();
  }

  // Diese Methode setzt die Event-Listener für die Tastatur-Events
  eventKeyboardBtns() {
    window.addEventListener('keydown', (e) => {
      // Wenn die Taste mit dem Code 39 (Pfeil rechts) gedrückt wurde, wird die RIGHT-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 39) {
        this.RIGHT = true;
      }
      // Wenn die Taste mit dem Code 37 (Pfeil links) gedrückt wurde, wird die LEFT-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 37) {
        this.LEFT = true;
      }
      // Wenn die Taste mit dem Code 38 (Pfeil oben) gedrückt wurde, wird die UP-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 38) {
        this.UP = true;
      }
      // Wenn die Taste mit dem Code 40 (Pfeil unten) gedrückt wurde, wird die DOWN-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 40) {
        this.DOWN = true;
      }
      // Wenn die Leertaste gedrückt wurde, wird die SPACE-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 32) {
        this.SPACE = true;
      }
      // Wenn die Taste mit dem Code 68 (Buchstabe D) gedrückt wurde, wird die D-Eigenschaft auf "true" gesetzt.
      if (e.keyCode == 68) {
        this.D = true;
      }
    });

    window.addEventListener('keyup', (e) => {
      // Wenn die Taste mit dem Code 39 (Pfeil rechts) losgelassen wurde, wird die RIGHT-Eigenschaft auf "false" gesetzt.
      if (e.keyCode == 39) {
        this.RIGHT = false;
      }
      // Wenn die Taste mit dem Code 37 (Pfeil links) losgelassen wurde, wird die LEFT-Eigenschaft auf "false" gesetzt.
      if (e.keyCode == 37) {
        this.LEFT = false;
      }
      // Wenn die Taste mit dem Code 38 (Pfeil oben) losgelassen wurde, wird die UP-Eigenschaft auf "false" gesetzt.
      if (e.keyCode == 38) {
        this.UP = false;
      }
      // Wenn die Taste mit dem Code 40 (Pfeil unten) losgelassen wurde, wird die DOWN-Eigenschaft auf "false" gesetzt.
      if (e.keyCode == 40) {
        this.DOWN = false;
      }
      // Wenn die Taste mit dem Code 32 (Pfeil unten) losgelassen wurde, wird die DOWN-Eigenschaft auf "false" gesetzt.

      if (e.keyCode == 32) {
        this.SPACE = false;
      }
      // Wenn die Taste mit dem Code 68 (Pfeil unten) losgelassen wurde, wird die DOWN-Eigenschaft auf "false" gesetzt.

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