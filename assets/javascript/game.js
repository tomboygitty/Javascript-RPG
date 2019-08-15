// Create objects and variables to use

var ackmena = {
    image: "assets/images/ackmena.jpg",
    hp: 180,
    attack: 30,
    counter: 22,
    alive: true,
    player: false,
    enemy: false
}

var biggerluke = {
    image: "assets/images/biggerluke.jpg",
    hp: 150,
    attack: 40,
    counter: 13,
    alive: true,
    player: false,
    enemy: false
}

var crumb = {
    image: "assets/images/crumb.jpg",
    hp: 100,
    attack: 12,
    counter: 8,
    alive: true,
    player: false,
    enemy: false
}

var dengar = {
    image: "assets/images/dengar.png",
    hp: 200,
    attack: 20,
    counter: 15,
    alive: true,
    player: false,
    enemy: false
}

var lumpy = {
    image: "assets/images/lumpy.jpg",
    hp: 250,
    attack: 18,
    counter: 14,
    alive: true,
    player: false,
    enemy: false
}

var nien = {
    image: "assets/images/nien.jpg",
    hp: 190,
    attack: 20,
    counter: 20,
    alive: true,
    player: false,
    enemy: false
}

// Initialize function, places all characters in boxes w/ green border at top with name, image and HP
function initialize() {

    dengar.hp = 200;
    crumb.hp = 100;
    lumpy.hp = 250;
    biggerluke.hp = 150;
    nien.hp = 190;
    ackmena.hp = 180;

    $("#dengar").html("Dengar<img class='char-img' src='" + dengar.image + "' />" + dengar.hp);
    $("#crumb").html("Salacious Crumb<img class='char-img' src='" + crumb.image + "' />" + crumb.hp);
    $("#lumpy").html("Lumpy<img class='char-img' src='" + lumpy.image + "' />" + lumpy.hp);
    $("#biggerluke").html("Bigger Luke<img class='char-img' src='" + biggerluke.image + "' />" + biggerluke.hp);
    $("#nien").html("Nien Nunb<img class='char-img' src='" + nien.image + "' />" + nien.hp);
    $("#ackmena").html("Ackmena<img class='char-img' src='" + ackmena.image + "' />" + ackmena.hp);

};

// Select player fighter

// Select enemy to attack

// Player character attacks

    // If player defeats ALL enemies, YOU WIN, GAME OVER

// Enemy character counterattacks

    // If enemy defeats player, YOU'RE DEFEATED, GAME OVER

initialize();