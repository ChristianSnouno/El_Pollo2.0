// Auswahl des Canvas-Elements
let canvas = document.querySelector('canvas');
// Variable für die Welt
let world;
// Objekt für die Tastatursteuerung
let keyboard = new Keyboard();
// Array für die Intervalle
intervals = [];

// Funktion zum Initialisieren des Spiels
function init(){
    // Zuweisung des Canvas-Elements
    canvas = document.getElementById('canvas');
    // Erstellung der Welt mit Canvas-Element, Tastatursteuerung und Intervallen
    world = new World(canvas, keyboard,);
}

// Funktion zum Starten des Spiels
function start() {
    // Abspielen eines Sounds
    playSound()
}

// Funktion zum Anpassen der Größe des Canvas-Elements
function resizeCanvas() {
  // Auswahl des übergeordneten Containers
  let container = canvas.parentNode;
  // Anpassen der Größe des Canvas-Elements an die Größe des Containers
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  console.log(canvas.parentNode)
}

// Funktion zum Betreten des Vollbildmodus
function enterFullscreen() {
    // Auswahl des Elements für den Vollbildmodus
    let fullscreen = document.getElementById('fullscreen')
    // Aufruf der Funktion zum Öffnen des Vollbildmodus
    openFullscreen(fullscreen);
}

// Funktion zum Öffnen des Vollbildmodus
function openFullscreen(elem) {
    // Prüfung, ob der Vollbildmodus unterstützt wird und Aufruf der entsprechenden Funktion
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

// Funktion zum Starten des Spiels
function startGame() {
    // Verstecken des Startbildschirms
    document.getElementById('startGame').classList.add('d-none')
    // Anzeigen des Canvas-Elements
    document.getElementById('canvas').classList.remove('d-none')
    // Verstecken des Startbuttons
    document.getElementById('startGameButton').classList.add('d-none')
    // Initialisieren des Spiels
    init();
};

// Funktion zum Anzeigen des Game Over-Bildschirms
function gameOver() {
    // Anzeigen des Game Over-Bildschirms
    document.getElementById('gameOver').classList.remove('d-none')
    // Verstecken des Canvas-Elements
    document.getElementById('canvas').classList.add('d-none')
    // Neuladen der Seite nach 2 Sekunden
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 5000 Millisekunden = 5 Sekunden
};

// Funktion zum Anzeigen des Gewinn-Bildschirms
function gameWin() {
    // Anzeigen des Gewinn-Bildschirms
    document.getElementById('gameWin').classList.remove('d-none')
    // Verstecken des Canvas-Elements
    document.getElementById('canvas').classList.add('d-none')
    // Neuladen der Seite nach 2 Sekunden
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 5000 Millisekunden = 5 Sekunden
};

// Funktion zum Neustarten des Spiels
function restartGame(){
    window.location.reload();
} 
// Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Anleitungen"-Button klickt.
function instructions(){
  document.getElementById('instructions').classList.remove('d-none') // Das Anleitungen-Element wird sichtbar gemacht
  document.getElementById('controlButton').classList.add('d-none') // Der Steuerungs-Button wird unsichtbar gemacht
  document.getElementById('canvas').classList.add('d-none') // Das Canvas-Element wird unsichtbar gemacht
  document.getElementById('startGame').classList.add('d-none') // Das Start-Screen-Element wird unsichtbar gemacht
  document.getElementById('startGameButton').classList.add('d-none') // Der Start-Button wird unsichtbar gemacht
  document.getElementById('controlButtonOff').classList.remove('d-none') // Der "Zurück"-Button wird sichtbar gemacht
  }
  
  // Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Zurück"-Button in den Anleitungen klickt.
  function instructionsOff(){
  document.getElementById('controlButtonOff').classList.add('d-none') // Der "Zurück"-Button wird unsichtbar gemacht
  window.location.reload(); // Die Seite wird neu geladen
  document.getElementById('controlButton').classList.remove('d-none') // Der Steuerungs-Button wird sichtbar gemacht
  }
  
  // Diese Funktion wird aufgerufen, wenn der Benutzer auf den "Audio aus"-Button klickt.
  function audioOff(){
  window.audioOff(); // Die Audio-Ausgabe wird gestoppt
  }
  
  // Diese Funktion wird aufgerufen, wenn sich die Größe des Viewports ändert.
  function handleViewportChange(mq) {
  const mobileButtons = document.querySelector('.mobile-buttons');
  if (mq.matches) {
  mobileButtons.style.display = 'block'; // Die mobilen Buttons werden sichtbar gemacht
  } else {
  mobileButtons.style.display = 'none'; // Die mobilen Buttons werden unsichtbar gemacht
  }
  }
  
  const mq = window.matchMedia('(max-width: 1280px)'); // Media Query für maximale Breite des Viewports wird erstellt
  mq.addListener(handleViewportChange); // Event-Listener für Viewport-Änderungen wird registriert
  
  // Die handleViewportChange Funktion wird nur dann ausgeführt, wenn sich der Viewport-Status geändert hat
  // Wenn der Viewport kleiner als 1280px ist, werden die mobilen Buttons angezeigt
  if (mq.matches) {
  handleViewportChange(mq);
  }
