/**

Represents a game level with enemies, clouds, end boss, background objects, coins, and bottles.
@class/*/

class Level {
    /**
    Creates an instance of Level.
    
    @constructor
    @param {enemies} enemies - The enemies in the level.
    @param {clouds} clouds - The clouds in the level.
    @param {endBoss} endBoss - The end boss object in the level.
    @param {backgroundObjects} backgroundObjects - The background objects in the level.
    @param {coins} coins - The coins in the level.
    @param {bottles} bottles - The bottles in the level.
    */
    constructor(enemies, clouds, endBoss, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.endBoss = endBoss;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
        this.level_end_x = 2200;
    }
}