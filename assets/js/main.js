var strict = false;
var power = false;
var timeStamp;
var simon = [];
var playerOrder = [];
var flashColor;
var turn;
var sukcess;
var sounds = true;
var order;

const greenSound = new Audio('assets/sounds/green.wav');
const redSound = new Audio('assets/sounds/red.wav')
const blueSound = new Audio('assets/sounds/blue.wav')
const yellowSound = new Audio('assets/sounds/yellow.wav');
const powerButton = document.querySelector("#power_button");
const counterOn = document.querySelector("#count");
const green = document.getElementById("colors-green");
const red = document.getElementById("colors-red");
const yellow = document.getElementById("colors-yellow");
const blue = document.getElementById("colors-blue");
const strictButton = document.querySelector("#strict_button");

strictButton.addEventListener('click', function strictMe(event) {
    if (strictButton.checked === true) {
        strict = true;
    } else {
        strict = false;
    }
});

powerButton.addEventListener('click', function powerMe(event) {
    if (powerButton.checked == true) {
        power = true;
        counterOn.innerHTML = "0";
        startGame();
    } else {
        power = false;
        counterOn.innerHTML = "--";
        clearInterval(timeStamp);
        clearColor();
    }
});

function startGame() {
    win = false;
    playerOrder = [];
    flashColor = 0;
    timeStamp = 0;
    turn = 1;
    counterOn.innerHTML = 1;
    sukcess = true;
    simon = true;
    timeStamp = setInterval(gameTurn, 1000);
    order = generateRandomNumbers(20);

}

function generateRandomNumbers() {
    let order = [];
    for (let i = 0; i < 20; i++) {
        let rand = Math.random();
        order.push(Math.floor(rand * 4) + 1);
    }
    return order;
}

function light(color, sound, coloredit) {
    if (sounds) {
        sound.play();
    }
    sounds = true;
    color.style.backgroundColor = coloredit;
}

function gameTurn() {
    power = false;
    if (flashColor === turn) {
        clearInterval(timeStamp);
        simon = false;
        clearColor();
        power = true;
    }
    if (simon) {
        clearColor();
        setTimeout(function colors() {
            if (order[flashColor] == 1) light(green, greenSound, "lightgreen");
            if (order[flashColor] == 2) light(red, redSound, "lightgreen");
            if (order[flashColor] == 3) light(yellow, yellowSound, "lightgreen");
            if (order[flashColor] == 4) light(blue, blueSound, "lightgreen");
            flashColor++;
        }, 280);
    }
}

var colors = [green, red, yellow, blue];

colors.forEach((color, code) => {
    addListener(color, code + 1)
});

function addListener(color, code) {
    color.addEventListener('click', (event) => {
        if (power) {
            playerOrder.push(code);
            check();
            if (code == 1) light(green, greenSound, "lightgreen");
            if (code == 2) light(red, redSound, "lightgreen");
            if (code == 3) light(yellow, yellowSound, "lightgreen");
            if (code == 4) light(blue, blueSound, "lightgreen");
            if (!win) {
                resColor();
            }
        }
    })
}

function clearColor() {
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "orange";
    blue.style.backgroundColor = "blue";
}

function resColor() {
    setTimeout(function res() {
        clearColor();
    }, 200)
}


function gameTyp() {
    simon = true;
    flashColor = 0;
    playerOrder = [];
    power = false;
    timeStamp = setInterval(gameTurn, 900);
}

function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        sukcess = false;

    if (playerOrder.length == 20 && sukcess) {
        winGame();
    }
    if (!sukcess) {
        power = false;
        counterOn.innerHTML = "WRONG!";
        setTimeout(function timeout() {
            counterOn.innerHTML = turn;
            clearColor();
            if (strict) {
                startGame();
                clearColor();
            } else {
                gameTyp();
                sukcess = true;
                clearColor();
            }
        }, 800);
        sounds = false;
    }
    if (turn == playerOrder.length && sukcess && !win) {
        turn++;
        gameTyp();
        counterOn.innerHTML = turn;
    }
}

function winGame() {
    counterOn.innerHTML = "WIN ;-)";
    on = false;
    win = true;
}

