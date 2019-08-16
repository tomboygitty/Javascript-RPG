// Create objects of the characters to use

var ackmena;
var biggerluke;
var crumb;
var dengar;
var lumpy;
var nien;

var currentPlayer;
var enemies = [];
var defenderArrayLoc;
var defender;

// Initialize function
function initialize() {

    // Set all initial characteristics of each object
    dengar = {name: "Dengar", name2: "dengar", image: "assets/images/dengar.png", hp: 200, attack: 22, counter: 15, alive: true, player: false, enemy: ""};

    crumb = {name: "Salacious Crumb", name2: "salaciouscrumb", image: "assets/images/crumb.jpg", hp: 100, attack: 15, counter: 10, alive: true, player: false, enemy: ""};

    lumpy = {name: "Lumpy", name2: "lumpy", image: "assets/images/lumpy.jpg", hp: 250, attack: 18, counter: 14, alive: true, player: false, enemy: ""};

    biggerluke = {name: "Bigger Luke", name2: "biggerluke", image: "assets/images/biggerluke.jpg", hp: 150, attack: 25, counter: 13, alive: true, player: false, enemy: ""};

    nien = {name: "Nien Nunb", name2: "niennunb", image: "assets/images/nien.jpg", hp: 190, attack: 20, counter: 20, alive: true, player: false, enemy: ""};

    ackmena = {name: "Ackmena", name2: "ackmena", image: "assets/images/ackmena.jpg", hp: 130, attack: 40, counter: 22, alive: true, player: false, enemy: ""};

    defender = 0;
    enemies = [];

    // Place all characters in boxes w/ green border at top with name, image and HP
    $("#dengar").html("Dengar<img class='char-img' src='" + dengar.image + "' />" + dengar.hp);
    $("#crumb").html("Salacious Crumb<img class='char-img' src='" + crumb.image + "' />" + crumb.hp);
    $("#lumpy").html("Lumpy<img class='char-img' src='" + lumpy.image + "' />" + lumpy.hp);
    $("#biggerluke").html("Bigger Luke<img class='char-img' src='" + biggerluke.image + "' />" + biggerluke.hp);
    $("#nien").html("Nien Nunb<img class='char-img' src='" + nien.image + "' />" + nien.hp);
    $("#ackmena").html("Ackmena<img class='char-img' src='" + ackmena.image + "' />" + ackmena.hp);
    $("#dengar").addClass("char-box");
    $("#crumb").addClass("char-box");
    $("#lumpy").addClass("char-box");
    $("#biggerluke").addClass("char-box");
    $("#nien").addClass("char-box");
    $("#ackmena").addClass("char-box");

    // Clear out player slot
    $("#player").removeClass();
    $("#player").addClass("player-box");
    $("#player").html("");

    // Clear out enemy slots
    $("#en1").removeClass();
    $("#en1").html("");
    $("#en2").removeClass();
    $("#en2").html("");
    $("#en3").removeClass();
    $("#en3").html("");
    $("#en4").removeClass();
    $("#en4").html("");
    $("#en5").removeClass();
    $("#en5").html("");

    // Clear out defender slot
    $("#defender").removeClass();
    $("#defender").html("");

    // Clear battle text
    $("#battle-text").text("");

    // Hide restart button
    $("#restart").hide();
};

// Select player fighter

    // Make function to change character displays when player chooses character
    // When one character is clicked, set that character to be the player and all others to be enemies

    function setPlayer(player, en1, en2, en3, en4, en5) {
        player.player = true;
        currentPlayer = player;
        // en1.enemy = "en1";
        // en2.enemy = "en2";
        // en3.enemy = "en3";
        // en4.enemy = "en4";
        // en5.enemy = "en5";

        $("#player").addClass("char-box");
        $("#player").html(player.name + "<img class='char-img' src='" + player.image + "' />" + player.hp);

        $("#en1").addClass("enemy-box");
        $("#en1").html(en1.name + "<img class='char-img' src='" + en1.image + "' />" + en1.hp);
        enemies[0] = en1;

        $("#en2").addClass("enemy-box");
        $("#en2").html(en2.name + "<img class='char-img' src='" + en2.image + "' />" + en2.hp);
        enemies[1] = en2;

        $("#en3").addClass("enemy-box");
        $("#en3").html(en3.name + "<img class='char-img' src='" + en3.image + "' />" + en3.hp);
        enemies[2] = en3;

        $("#en4").addClass("enemy-box");
        $("#en4").html(en4.name + "<img class='char-img' src='" + en4.image + "' />" + en4.hp);
        enemies[3] = en4;

        $("#en5").addClass("enemy-box");
        $("#en5").html(en5.name + "<img class='char-img' src='" + en5.image + "' />" + en5.hp);
        enemies[4] = en5;
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

    function setDefender(defending, enLoc) {

        defender = defending;
        $("#defender").addClass("defender-box");
        $("#defender").html(defender.name + "<img class='char-img' src='" + defender.image + "' />" + defender.hp);
        $("#" + enLoc).html("");
        $("#" + enLoc).removeClass();

    };
    
    // When an enemy is selected, transfer the display and info to the defender slot and flag defender as true
    $(".en-button").on("click", function() {
        if (defender==0) {
            var defend = this.childNodes[0].data.replace(/\s/g, '').toLowerCase();
            var enLo = this.id;
            console.log(defend);
            for (var i = 0; i < enemies.length; i++) {
                if (enemies[i].name2==defend) {
                    defenderArrayLoc = i;
                }
            }
            console.log(defenderArrayLoc);
            setDefender(enemies[defenderArrayLoc], enLo);
        }
    });

// Player character attacks

    // Make function to clear defender slot
    function clearDefender() {
        $("#defender").removeClass();
        $("#defender").html("");
        enemies[defenderArrayLoc].splice(defenderArrayLoc, 1);
        defender = 0;
    };

    $("#attack").on("click", function() {
        if (defender!=0) {
            // Subtract attack points from defenders HP and update display
            // Enemy character counterattacks

            currentPlayer.hp = currentPlayer.hp - enemies[defenderArrayLoc].counter;
            enemies[defenderArrayLoc].hp = enemies[defenderArrayLoc].hp - currentPlayer.attack;

            if (currentPlayer.hp <= 0) {
                // If enemy defeats player, YOU'RE DEFEATED, GAME OVER
                $("#battle-text").html("You have been defeated. GAME OVER!!!");
                $("#restart").show();


            }
            else {
                if (enemies[defenderArrayLoc].hp <= 0) {
                    clearDefender();
                    if (enemies.length > 0) {
                        $("#battle-text").text("You defeated " + enemies[defenderArrayLoc].name + ". You can fight another enemy.");
                    }
                    else {
                        // If player defeats ALL enemies, YOU WIN, GAME OVER
                        $("#battle-text").text("YOU WON!!! GAME OVER!!!");
                        $("#restart").show();
                    }
                }
                else {
                    $("#player").html(currentPlayer.name + "<img class='char-img' src='" + currentPlayer.image + "' />" + currentPlayer.hp);
                    $("#defender").html(defender.name + "<img class='char-img' src='" + defender.image + "' />" + defender.hp);
                    $("#battle-text").text("You attacked " + enemies[defenderArrayLoc].name + " for " + currentPlayer.attack + " damage.");
                }
            }
        }
        else {
            $("#battle-text").text("No enemy here.");
        }
    });

// When Restart button is pressed, re-initialize
// $("#restart").on("click", initialize()); 

initialize();