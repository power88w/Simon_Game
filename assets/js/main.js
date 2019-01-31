
var strict = false;

var strictButton = document.querySelector("#strict_button")

strictButton.addEventListener('click', function strictMe(event)
{
    if(strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

var power = false;
var powerButton = document.querySelector("#power_button")
var counterOn = document.querySelector("#count")
let timeStamp;




powerButton.addEventListener('click', function powerMe(event) {
    if (powerButton.checked == true) {
        power = true;
        counterOn.innerHTML = "0";
        startGame();
    } else  {
        power = false;
        counterOn.innerHTML = "--";
        clearInterval(timeStamp);
    }
});

var simon = [];
var playerOrder = [];
var flashColor;
var turn;
var sukcess;

function startGame() {
    win = false;
    playerOrder = [];
    flashColor = 0;
    timeStamp = 0;
    turn = 1;
    counterOn.innerHTML = 1;
    sukcess = true;
    simon = true;
    timeStamp = setInterval(gameTurn, 800);
    order = generateRandomNumbers(20);

}

function generateRandomNumbers(length){
    let order = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.random();
        order.push(Math.floor(rand * 4)+1);
    }
    console.log(order);
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

var audio1 = new Audio('../assets/sounds/red.mp3');
    

var sounds = true;


var green = document.getElementById("colors-green");
var red = document.getElementById("colors-red");
var yellow = document.getElementById("colors-yellow"); 
var blue = document.getElementById("colors-blue"); 

function clearColor() {
    green.style.backgroundColor = "green";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "orange";
    blue.style.backgroundColor = "blue";
}

function flash() {
    green.style.backgroundColor = "lightgreen";
    red.style.backgroundColor = "orangered";
    yellow.style.backgroundColor = "greenyellow";
    blue.style.backgroundColor = "royalblue";
}




function greenLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    green.style.backgroundColor ="lightgreen";
}
function redLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    red.style.backgroundColor ="orangered";
}
function yellowLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    yellow.style.backgroundColor ="greenyellow";
}
function blueLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    blue.style.backgroundColor ="royalblue";
}

function resColor() {
    setTimeout(function res() {
        clearColor();
    },300)
}


green.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(1);
        check();
        greenLight();
        if(!win) {
            resColor();
        }
    }    
})

red.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(2);
        check();
        redLight();
        if(!win) {
            resColor();
        }
    }    
})

yellow.addEventListener('click', (event) => {
    if (power) {
        playerOrder.push(3);
        check();
        yellowLight();
        if(!win) {
            resColor();
        }
    }    
})


blue.addEventListener('click', (event) => {
    if (power) { 
        playerOrder.push(4);
        check();
        blueLight();
        if(!win) {
            resColor();
        }
    }    
})


function gameTyp() {
    simon = true;
    flashColor = 0;
    playerOrder = [];
    timeStamp = setInterval(gameTurn, 1000);
}


function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
      sukcess = false;
  
    if (playerOrder.length == 20 && sukcess) {
      winGame();
    }
  
    if (!sukcess) {
      flash();
      counterOn.innerHTML = "WRONG!";
      setTimeout(function timeout() {
        counterOn.innerHTML = turn;
        clearColor();
  
        if (strict) {
          startGame();
        } else {
            gameTyp();  
            sukcess = true;
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
    flash();
    counterOn.innerHTML = "WIN ;-)";
    on = false;
    win = true;
}



























