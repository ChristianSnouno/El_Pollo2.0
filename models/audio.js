// Laden der Audio-Dateien
let coin_sound = new Audio('audio/coin.wav');
let jump_sound = new Audio('audio/jump.mp3');
let throw_sound = new Audio('audio/bottle.mp3');
let background_sound = new Audio('audio/game.mp3');
let hit_sound = new Audio('audio/hit.mp3');
let endboss_sound = new Audio('audio/chicken.mp3');
let endboss_dead = new Audio('audio/dead_endboss.mp3');
let walking_sound = new Audio('audio/running.mp3');

// Funktionen zum Abspielen der Audio-Dateien
function playCoinSound() {
    coin_sound.play();
}

function playJumpSound() {
    jump_sound.play();
}

function playThrowSound() {
    throw_sound.play();
}

function playBackgroundSound() {
    hit_sound.play();
}

function hitSound() {
    background_sound.play();
}

function endbossSound() {
    endboss_sound.play();
}

function endbossDeadSound() {
    endboss_dead.play();
}

function walkingSound() {
    walking_sound.play();
}

function walkingSoundPause() {
    walking_sound.pause();
}

// Variable, um den stummen Soundzustand zu speichern
let mutedSound = false;

// Funktion zum Stummschalten aller Audio-Dateien
function muteSound() {
    mutedSound = true;
    background_sound.pause();
    document.getElementById('muteAudioButton').classList.add('d-none');
    document.getElementById('playAudioButton').classList.remove('d-none');

    // Alle anderen Audio-Dateien stummschalten
    coin_sound.muted = true;
    jump_sound.muted = true;
    throw_sound.muted = true;
    background_sound.muted = true;
    hit_sound.muted = true;
    endboss_sound.muted = true;
    endboss_dead.muted = true;
    walking_sound.muted = true;
}

// Funktion zum Abspielen aller Audio-Dateien
function playSound() {
    mutedSound = false;
    background_sound.play();
    document.getElementById('muteAudioButton').classList.remove('d-none');
    document.getElementById('playAudioButton').classList.add('d-none');

    // Alle anderen Audio-Dateien abspielen
    coin_sound.muted = false;
    jump_sound.muted = false;
    throw_sound .muted = false;
    background_sound.muted = false;
    hit_sound.muted = false;
    endboss_sound.muted = false;
    endboss_dead.muted = false;
    walking_sound.muted = false;
}
