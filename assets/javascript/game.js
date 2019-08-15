// Create objects of the characters to use

var ackmena;
var biggerluke;
var crumb;
var dengar;
var lumpy;
var nien;
var defender;

// Initialize function
function initialize() {

    // Set all initial characteristics of each object
    dengar = {name: "Dengar", image: "assets/images/dengar.png", hp: 200, attack: 22, counter: 15, alive: true, player: false, enemy: ""};

    crumb = {name: "Salacious Crumb", image: "assets/images/crumb.jpg", hp: 100, attack: 15, counter: 10, alive: true, player: false, enemy: ""};

    lumpy = {name: "Lumpy", image: "assets/images/lumpy.jpg", hp: 250, attack: 18, counter: 14, alive: true, player: false, enemy: ""};

    biggerluke = {name: "Bigger Luke", image: "assets/images/biggerluke.jpg", hp: 150, attack: 25, counter: 13, alive: true, player: false, enemy: ""};

    nien = {name: "Nien Nunb", image: "assets/images/nien.jpg", hp: 190, attack: 20, counter: 20, alive: true, player: false, enemy: ""};

    ackmena = {name: "Ackmena", image: "assets/images/ackmena.jpg", hp: 130, attack: 40, counter: 22, alive: true, player: false, enemy: ""};

    defender = false;

    // Place all characters in boxes w/ green border at top with name, image and HP
    $("#dengar").html("Dengar<img class='char-img' src='" + dengar.image + "' />" + dengar.hp);
    $("#crumb").html("Salacious Crumb<img class='char-img' src='" + crumb.image + "' />" + crumb.hp);
    $("#lumpy").html("Lumpy<img class='char-img' src='" + lumpy.image + "' />" + lumpy.hp);
    $("#biggerluke").html("Bigger Luke<img class='char-img' src='" + biggerluke.image + "' />" + biggerluke.hp);
    $("#nien").html("Nien Nunb<img class='char-img' src='" + nien.image + "' />" + nien.hp);
    $("#ackmena").html("Ackmena<img class='char-img' src='" + ackmena.image + "' />" + ackmena.hp);
};

// Select player fighter

    // Make function to change character displays when player chooses character
    // When one character is clicked, set that character to be the player and all others to be enemies

    function setPlayer(player, en1, en2, en3, en4, en5) {
        player.player = true;
        en1.enemy = "en1";
        en2.enemy = "en2";
        en3.enemy = "en3";
        en4.enemy = "en4";
        en5.enemy = "en5";

        $("#player").addClass("char-box");
        $("#player").html(player.name + "<img class='char-img' src='" + player.image + "' />" + player.hp);

        $("#en1").addClass("enemy-box");
        $("#en1").html(en1.name + "<img class='char-img' src='" + en1.image + "' />" + en1.hp);

        $("#en2").addClass("enemy-box");
        $("#en2").html(en2.name + "<img class='char-img' src='" + en2.image + "' />" + en2.hp);

        $("#en3").addClass("enemy-box");
        $("#en3").html(en3.name + "<img class='char-img' src='" + en3.image + "' />" + en3.hp);

        $("#en4").addClass("enemy-box");
        $("#en4").html(en4.name + "<img class='char-img' src='" + en4.image + "' />" + en4.hp);

        $("#en5").addClass("enemy-box");
        $("#en5").html(en5.name + "<img class='char-img' src='" + en5.image + "' />" + en5.hp);
    };

    // Make function to clear out characters row

    function clearChars() {
        $("#dengar").html("");
        $("#dengar").removeClass();
        $("#crumb").html("");
        $("#crumb").removeClass();
        $("#lumpy").html("");
        $("#lumpy").removeClass();
        $("#biggerluke").html("");
        $("#biggerluke").removeClass();
        $("#nien").html("");
        $("#nien").removeClass();
        $("#ackmena").html("");
        $("#ackmena").removeClass();
    };

    // On character click, set player and enemeies

    $("#dengar").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(dengar, crumb, lumpy, biggerluke, nien, ackmena);
            clearChars();
        }
    });

    $("#crumb").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(crumb, dengar, lumpy, biggerluke, nien, ackmena);
            clearChars();
        }
    });

    $("#lumpy").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(lumpy, dengar, crumb, biggerluke, nien, ackmena);
            clearChars();
        }
    });

    $("#biggerluke").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(biggerluke, dengar, crumb, lumpy, nien, ackmena);
            clearChars();
        }
    });

    $("#nien").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(nien, dengar, crumb, lumpy, biggerluke, ackmena);
            clearChars();
        }
    });

    $("#ackmena").on("click", function() {
        if ((dengar.player==false)&&(crumb.player==false)&&(lumpy.player==false)&&(biggerluke.player==false)&&(nien.player==false)&&(ackmena.player==false)) {
            setPlayer(ackmena, dengar, crumb, lumpy, biggerluke, nien);
            clearChars();
        }
    });

// Select enemy to attack

    // Make a function to set enemy selected; move the char display from enemies to defender

    function setDefender(defender, enLoc) {
        if (defender==false) {
            $("#" + enLoc).
        }
    };

    $("en1").on("click", setDefender())

// Player character attacks

    // If player defeats ALL enemies, YOU WIN, GAME OVER

// Enemy character counterattacks

    // If enemy defeats player, YOU'RE DEFEATED, GAME OVER

initialize();