/**

Loading of audio files
@type {Audio} coin_sound - The sound effect for collecting coins
@type {Audio} jump_sound - The sound effect for jumping
@type {Audio} throw_sound - The sound effect for throwing bottles
@type {Audio} background_sound - The background music for the game
@type {Audio} hit_sound - The sound effect for hitting obstacles
@type {Audio} endboss_sound - The sound effect for the end boss
@type {Audio} endboss_dead - The sound effect for the end boss dying
@type {Audio} walking_sound - The sound effect for walking/running
*/
let coin_sound = new Audio('audio/coin.wav');
let jump_sound = new Audio('audio/jump.mp3');
let throw_sound = new Audio('audio/bottle.mp3');
let background_sound = new Audio('audio/game.mp3');
let hit_sound = new Audio('audio/hit.mp3');
let endboss_sound = new Audio('audio/chicken.mp3');
let endboss_dead = new Audio('audio/dead_endboss.mp3');
let walking_sound = new Audio('audio/running.mp3');


// Functions to play the audio files
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

function endbossDeadSoundPause() {
    endboss_dead.pause();
}

function walkingSound() {
    walking_sound.play();
}

function walkingSoundPause() {
    walking_sound.pause();
}

// Variable to store the muted sound state
let mutedSound = false;

// Function to mute all audio files
function muteSound() {
    mutedSound = true;
    background_sound.pause();
    document.getElementById('muteAudioButton').classList.add('d-none');
    document.getElementById('playAudioButton').classList.remove('d-none');

    // Mute all the other audio files
    coin_sound.muted = true;
    jump_sound.muted = true;
    throw_sound.muted = true;
    background_sound.muted = true;
    hit_sound.muted = true;
    endboss_sound.muted = true;
    endboss_dead.muted = true;
    walking_sound.muted = true;

}

// Function to play all audio files
function playSound() {
    mutedSound = false;
    background_sound.play();
    document.getElementById('muteAudioButton').classList.remove('d-none');
    document.getElementById('playAudioButton').classList.add('d-none');
    
    // Play all the other audio files
    coin_sound.muted = false;
    jump_sound.muted = false;
    throw_sound.muted = false;
    background_sound.muted = false;
    hit_sound.muted = false;
    endboss_sound.muted = false;
    endboss_dead.muted = false;
    walking_sound.muted = false;
}
