let strict = false;
let power = false;
let timeStamp;
let simon = [];
let playerOrder = [];
let flashColor;
let turn;
let sukcess;
let sounds = true;

const greenSound = document.querySelector("#greens");
const redSound = document.querySelector("#reds");
const blueSound = document.querySelector("#blues");
const yellowSound = document.querySelector("#yellows");
const powerButton = document.querySelector("#power_button");
const counterOn = document.querySelector("#count");
const green = document.getElementById("colors-green");
const red = document.getElementById("colors-red");
const yellow = document.getElementById("colors-yellow");
const blue = document.getElementById("colors-blue");
const strictButton = document.querySelector("#strict_button");

strictButton.addEventListener('click', function strictMe(event) {
    if (strictButton.checked == true) {
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
    timeStamp = setInterval(gameTurn, 600);
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


function gameTurn() {
    power = false;
    if (flashColor == turn) {
        clearInterval(timeStamp);
        simon = false;
        clearColor();
        power = true;
    }
    if (simon) {
        clearColor();
        setTimeout(function colors() {
            if (order[flashColor] == 1) greenLight();
            if (order[flashColor] == 2) redLight();
            if (order[flashColor] == 3) yellowLight();
            if (order[flashColor] == 4) blueLight();
            flashColor++;
        }, 200);
    }
}

function clearColor() {
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "orange";
    blue.style.backgroundColor = "blue";
}

function greenLight() {
    if (sounds) {
        greenSound.play();
    }
    sounds = true;
    green.style.backgroundColor = "lightgreen";
}

function redLight() {
    if (sounds) {
        redSound.play();
    }
    sounds = true;
    red.style.backgroundColor = "orangered";
}

function yellowLight() {
    if (sounds) {
        yellowSound.play();
    }
    sounds = true;
    yellow.style.backgroundColor = "greenyellow";
}

function blueLight() {
    if (sounds) {
        blueSound.play();
    }
    sounds = true;
    blue.style.backgroundColor = "royalblue";
}

function resColor() {
    setTimeout(function res() {
        clearColor();
    }, 200)
}

green.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(1);
        check();
        greenLight();
        if (!win) {
            resColor();
        }
    }
})

red.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(2);
        check();
        redLight();
        if (!win) {
            resColor();
        }
    }
})

yellow.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(3);
        check();
        yellowLight();
        if (!win) {
            resColor();
        }
    }
})

blue.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(4);
        check();
        blueLight();
        if (!win) {
            resColor();
        }
    }
})

function gameTyp() {
    simon = true;
    flashColor = 0;
    playerOrder = [];
    timeStamp = setInterval(gameTurn, 800);
}


function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        sukcess = false;

    if (playerOrder.length == 20 && sukcess) {
        winGame();
    }

    if (!sukcess) {
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
        }, 800);d
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