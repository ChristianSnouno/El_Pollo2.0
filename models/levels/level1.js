/**

Creates a new Level object.

@param {Array} chickens - An array of Chicken objects representing the level's enemies.

@param {Array} clouds - An array of Cloud objects representing the level's background clouds.

@param {Array} bosses - An array of Endboss objects representing the level's bosses.

@param {Array} backgrounds - An array of BackgroundObject objects representing the level's background layers.

@param {Array} coins - An array of Coin objects representing the level's collectible coins.

@param {Array} bottles - An array of Bottle objects representing the level's collectible bottles.
*/
const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Smallchicken(250),
        new Smallchicken(280),
        new Smallchicken(300),
    ],


    [
        new Cloud(300, 200),
        new Cloud(800, 400)
    ],
    
    [
      new Endboss(),
    ],
    

    [
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

    ],

  

    getLevelCoins(),
    getLevelBottles(),


);
// This function returns a collection of coins
// starting from the specified x and y coordinates
function getCoinsCollection(firstX, firstY) {
    return [
    new Coin(firstX + 0 * 100, firstY - 0 * 50), // Coin 1: X coordinate = firstX + 0 * 100, Y coordinate = firstY - 0 * 50
    new Coin(firstX + 1 * 100, firstY - 1 * 50), // Coin 2: X coordinate = firstX + 1 * 100, Y coordinate = firstY - 1 * 50
    new Coin(firstX + 2 * 100, firstY - 2 * 50), // Coin 3: X coordinate = firstX + 2 * 100, Y coordinate = firstY - 2 * 50
    new Coin(firstX + 3 * 100, firstY - 1 * 50), // Coin 4: X coordinate = firstX + 3 * 100, Y coordinate = firstY - 1 * 50
    new Coin(firstX + 4 * 100, firstY - 0 * 50) // Coin 5: X coordinate = firstX + 4 * 100, Y coordinate = firstY - 0 * 50
    ];
    }
/**

Returns a collection of coins for the level by combining multiple calls to getCoinsCollection().
@returns {Coin[]} - The collection of coins for the level.
*/
function getLevelCoins() {
    let collection1 = getCoinsCollection(100, 200); // First coin collection at X = 100, Y = 200
    let collection2 = getCoinsCollection(400, 200); // Second coin collection at X = 400, Y = 200
    let collection3 = getCoinsCollection(600, 200); // Third coin collection at X = 600, Y = 200
    let collection4 = getCoinsCollection(1000, 200); // Fourth coin collection at X = 1000, Y = 200
    return collection1.concat(collection2, collection3, collection4); // Combine all coin collections into a single collection and return it.
    }
    /**
    
    Returns a collection of bottles starting from the given initial coordinates.
    @param {number} firstX - The initial X coordinate.
    @param {number} firstY - The initial Y coordinate.
    @returns {Bottle[]} - The collection of bottles.
    */
    function getBottlesCollection(firstX, firstY) {
    return [
    new Bottle(firstX + 100, firstY - 100),
    new Bottle(firstX + 200, firstY - 200),
    new Bottle(firstX + 300, firstY - 150),
    new Bottle(firstX + 400, firstY - 250),
    new Bottle(firstX + 500, firstY - 100),
    new Bottle(firstX + 600, firstY - 200),
    ];
    }
    /**
    
    Returns a collection of bottles placed at specific coordinates in the level.
    @returns {Bottle[]} - The collection of bottles.
    */
    function getLevelBottles() {
    let collection1 = getBottlesCollection(400, 350);
    let collection2 = getBottlesCollection(1200, 350);
    return collection1.concat(collection2);
    }
    /**
    
    Returns a collection of chickens placed at specific coordinates in the level.
    @returns {Chicken[]} - The collection of chickens.
    */
    function getLevelChickens() {
    let collection1 = getChickensCollection(100);
    let collection2 = getChickensCollection(400);
    let collection3 = getChickensCollection(600);
    let collection4 = getChickensCollection(1000);
    return collection1.concat(collection2, collection3, collection4);
    }
    /**
    
    Returns a collection of chickens with the specified X coordinates.
    @param {number} firstX - The initial X coordinate.
    @returns {Chicken[]} - The collection of chickens.
    */
    function getChickensCollection(firstX) {
    return [
    new Chicken(firstX + 0 * 200, 400),
    new Chicken(firstX + 1 * 200, 350),
    new Chicken(firstX + 2 * 200, 300),
    new Smallchicken(firstX + 3 * 200, 400),
    new Smallchicken(firstX + 4 * 200, 350),
    new Smallchicken(firstX + 5 * 200, 300),
    ];
    }