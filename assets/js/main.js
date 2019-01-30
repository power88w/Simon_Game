
//-- strict mode --/

var strict = false;

var strictButton = document.querySelector("#strict_button")

strictButton.addEventListener('click', function strictMe(event)
{
    if(strictButton.checked == true) {
        strict = true;
        console.log("ok");
    } else {
        strict = false;
        console.log("off");
    }
});

//---power---/
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
        //--clearColor();    // czyszczenie kolorow-----/
        clearInterval(timeStamp);  //---ustawianie intervalow ----/
    }
});

// ---   if (on || win)
//---- play();

var simon = [];
var playerOrder = [];
var flashColor;
var turn;
var sukcess;

function startGame() {
    win = false;
    order = [];
    playerOrder = [];
    flashColor = 0;
    timeStamp = 0;
    turn = 1;
    counterOn.innerHTML = 1;
    sukcess = true;
    for (var i = 0; i < 20; i++) {
        var rand = Math.random();
        rand4 = rand * 4;
        order.push(Math.floor(rand4)+1);
        console.log(order);
    }

    simon = true;
    timeStamp = setInterval(gameTurn, 800);
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

var audio1 = new Audio(
    '../assets/sounds/green.wav');

var sounds = true;


var green = document.getElementById("colors-green");
var red = document.getElementById("colors-red");
var yellow = document.getElementById("colors-yellow"); 
var blue = document.getElementById("colors-blue"); 

function clearColor() {
    green.style.backgroundColor = "green";
    console.log("green");
    red.style.backgroundColor = "darkred";
    console.log("red");
    yellow.style.backgroundColor = "orange";
    console.log("yellow");
    blue.style.backgroundColor = "blue";
    console.log("blue");
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
    green.style.background ="lightgreen";
}
function redLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    red.style.background ="orangered";
}
function yellowLight() {
    if(sounds) {
        audio1.play();
    }
    sounds = true;
    yellow.style.background ="greenyellow";
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
    },200)
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
  
    if (sukcess == false) {
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



























