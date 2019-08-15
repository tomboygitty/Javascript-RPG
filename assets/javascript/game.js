// Create objects of the characters to use

var ackmena;
var biggerluke;
var crumb;
var dengar;
var lumpy;
var nien;

// Initialize function
function initialize() {

    // Set all initial characteristics of each object

    dengar = {image: "assets/images/dengar.png", hp: 200, attack: 22, counter: 15, alive: true, player: false, enemy: false};
    crumb = {image: "assets/images/crumb.jpg", hp: 100, attack: 15, counter: 10, alive: true, player: false, enemy: false};
    lumpy = {image: "assets/images/lumpy.jpg", hp: 250, attack: 18, counter: 14, alive: true, player: false, enemy: false};
    biggerluke = {image: "assets/images/biggerluke.jpg", hp: 150, attack: 25, counter: 13, alive: true, player: false, enemy: false};
    nien = {image: "assets/images/nien.jpg", hp: 190, attack: 20, counter: 20, alive: true, player: false, enemy: false};
    ackmena = {image: "assets/images/ackmena.jpg", hp: 130, attack: 40, counter: 22, alive: true, player: false, enemy: false};

    // Place all characters in boxes w/ green border at top with name, image and HP

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