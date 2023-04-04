const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Smallchicken(250),
        new Smallchicken(280),
        new Smallchicken(300),
        new Endboss(),
    ],
        
    [
        new Cloud(300, 200),
        new Cloud(800, 400)
    ],
    
    [
        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        // new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3,),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3,),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),

    ],

    getLevelCoins(),
    getLevelBottles()
    
);
// Funktion, die eine Sammlung von Münzen zurückgibt, ausgehend von den Anfangskoordinaten firstX und firstY.
function getCoinsCollection(firstX, firstY) {
    return [
        new Coin(firstX + 0 * 100, firstY - 0 * 50), // Münze 1: X-Koordinate = firstX + 0 * 100, Y-Koordinate = firstY - 0 * 50
        new Coin(firstX + 1 * 100, firstY - 1 * 50), // Münze 2: X-Koordinate = firstX + 1 * 100, Y-Koordinate = firstY - 1 * 50
        new Coin(firstX + 2 * 100, firstY - 2 * 50), // Münze 3: X-Koordinate = firstX + 2 * 100, Y-Koordinate = firstY - 2 * 50
        new Coin(firstX + 3 * 100, firstY - 1 * 50), // Münze 4: X-Koordinate = firstX + 3 * 100, Y-Koordinate = firstY - 1 * 50
        new Coin(firstX + 4 * 100, firstY - 0 * 50) // Münze 5: X-Koordinate = firstX + 4 * 100, Y-Koordinate = firstY - 0 * 50
    ];
}

// Funktion, die eine Sammlung von Münzen für das Level zurückgibt, indem sie mehrere getCoinsCollection() -Aufrufe kombiniert.
function getLevelCoins() {
    let collection1 = getCoinsCollection(100, 200); // Erste Münzsammlung bei X = 100, Y = 200
    let collection2 = getCoinsCollection(400, 200); // Zweite Münzsammlung bei X = 400, Y = 200
    let collection3 = getCoinsCollection(600, 200); // Dritte Münzsammlung bei X = 600, Y = 200
    let collection4 = getCoinsCollection(1000, 200); // Vierte Münzsammlung bei X = 1000, Y = 200
    return collection1.concat(collection2, collection3, collection4); // Kombiniere alle Münzsammlungen in eine einzelne Sammlung und gib sie zurück.
}

// Funktion, die eine Sammlung von Flaschen zurückgibt, ausgehend von den Anfangskoordinaten firstX und firstY.
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
  // Diese Funktion gibt eine Sammlung von Flaschen zurück
// mit den angegebenen x- und y-Koordinaten
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
    
    // Diese Funktion gibt eine Sammlung von Flaschen zurück,
    // die an bestimmten Koordinaten im Level platziert sind
    function getLevelBottles() {
    let collection1 = getBottlesCollection(400, 350);
    let collection2 = getBottlesCollection(1200, 350);
    return collection1.concat(collection2);
    }
    
    // Diese Funktion gibt eine Sammlung von Hühnern zurück,
    // die an bestimmten Koordinaten im Level platziert sind
    function getLevelChickens() {
    let collection1 = getChickensCollection(100);
    let collection2 = getChickensCollection(400);
    let collection3 = getChickensCollection(600);
    let collection4 = getChickensCollection(1000);
    return collection1.concat(collection2, collection3, collection4);
    }
    
    // Diese Funktion gibt eine Sammlung von Hühnern zurück
    // mit den angegebenen x-Koordinaten
    function getChickensCollection(firstX) {
    return [
    new Chicken(firstX + 0 * 250),
    new Chicken(firstX + 1 * 250),
    new Chicken(firstX + 2 * 250),
    new Chicken(firstX + 3 * 250),
    new Chicken(firstX + 4 * 250),
    new Smallchicken(firstX + 0 * 250),
    new Smallchicken(firstX + 1 * 250),
    new Smallchicken(firstX + 2 * 250),
    new Smallchicken(firstX + 3 * 250),
    new Smallchicken(firstX + 4 * 250),
    ];
    }