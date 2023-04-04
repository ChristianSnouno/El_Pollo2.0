/**

Selects the canvas element and initializes variables.
@type {HTMLElement} canvas - The canvas element.
@type {Object} world - The world variable.
@type {Object} keyboard - The keyboard control object.
@type {Array} intervals - The array to store intervals.
*/
let canvas = document.querySelector('canvas');
let world;
let keyboard = new Keyboard();
let intervals = [];
/**

Initializes the game by assigning the canvas element and creating the world with canvas element, keyboard control, and intervals.
*/
function init() {
canvas = document.getElementById('canvas');
world = new World(canvas, keyboard);
}
/**

Starts the game by playing a sound.
*/
function start() {
playSound();
}
/**

Resizes the canvas element to fit its parent container.
*/
function resizeCanvas() {
let container = canvas.parentNode;
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
console.log(canvas.parentNode);
}
/**

Enters fullscreen mode.
*/
function enterFullscreen() {
let fullscreen = document.getElementById('fullscreen');
openFullscreen(fullscreen);
}
/**

Requests fullscreen mode for the specified element.
@param {HTMLElement} elem - The element to request fullscreen mode.
*/
function openFullscreen(elem) {
if (elem.requestFullscreen) {
elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
elem.msRequestFullscreen();
}
}
/**

Starts the game by hiding the start screen, showing the canvas element, hiding the start button, initializing the game, and handling orientation change.
*/
function startGame() {
document.getElementById('startGame').classList.add('d-none');
document.getElementById('canvas').classList.remove('d-none');
document.getElementById('startGameButton').classList.add('d-none');
init();

}
/**

Shows the game over screen, hides the canvas element, and reloads the page after 2 seconds.
*/
function gameOver() {
document.getElementById('gameOver').classList.remove('d-none');
document.getElementById('canvas').classList.add('d-none');
setTimeout(() => {
window.location.reload();
}, 2000);
}
/**

Shows the win screen, hides the canvas element, and reloads the page after 2 seconds.
*/
function gameWin() {
document.getElementById('gameWin').classList.remove('d-none');
document.getElementById('canvas').classList.add('d-none');
setTimeout(() => {
window.location.reload();
}, 2000);
}
/**

Restarts the game by reloading the page and handling orientation change.
*/
function restartGame() {
window.location.reload();
handleOrientationChange();
}
/**

Shows the instructions screen and hides other elements.
*/
function instructions() {
document.getElementById('instructions').classList.remove('d-none');
document.getElementById('controlButton').classList.add('d-none');
document.getElementById('canvas').classList.add('d-none');
document.getElementById('startGame').classList.add('d-none');
document.getElementById('startGameButton').classList.add('d-none');
document.getElementById('controlButtonOff').classList.remove('d-none');
}
/**

Hides the instructions screen and reloads the page.
*/
function instructionsOff() {
document.getElementById('controlButtonOff').classList.add('d-none');
window.location.reload();
}
/**

Stops audio output.
*/
function audioOff() {
window.audioOff();
}

window.addEventListener('orientationchange', handleOrientationChange);
/**

Handles device orientation change by displaying warning messages and hiding/showing elements accordingly.
*/
function handleOrientationChange() {
  if (window.orientation === 0 || window.orientation === 180) {
  // The device is in portrait mode.
  // Show the landscape warning element.
  document.getElementById('game').style.display = 'none';
  document.getElementById('warning-text').style.display = '';
  } else {
  // The device is in landscape mode.
  // Hide the landscape warning element.
  document.getElementById('game').style.display = 'block';
  document.getElementById('warning-text').style.display = 'none';
  }
  
  // Call the function every 2 seconds.
  setInterval(handleOrientationChange, 2000);
  }
  
  /**
  
  Handles changes in the viewport size by showing or hiding mobile buttons and calling the orientation change handler function.
  @param {MediaQueryList} mq - The media query list.
  */
  function handleViewportChange(mq) {
  const mobileButtons = document.querySelector('.mobile-buttons');
  if (mq.matches) {
  // Show the mobile buttons.
  mobileButtons.style.display = 'block';
  handleOrientationChange();
  } else {
  // Hide the mobile buttons.
  mobileButtons.style.display = 'none';
  handleOrientationChange();
  }
  }
  const mq = window.matchMedia('(max-width: 1280px)');
  mq.addListener(handleViewportChange);
  
  document.addEventListener('DOMContentLoaded', function() {
  if (mq.matches) {
  handleViewportChange(mq);
  }
  });