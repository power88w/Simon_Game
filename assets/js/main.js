
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

var simonOrder = [];
var playerOrder = [];
var brightenColor;
var turn;
var sukcess;

function startGame() {
    win = false;
    order = [];
    playerOrder = [];
    brightenColor = 0;
    timeStamp = 0;
    turn = 1;
    counterOn.innerHTML = 1;
    sukcess = true;
    for (var i = 0; i < 20; i++) {
        var rand = Math.random();
        rand4 = rand * 4;
        order.push(Math.floor(rand4)+1);
    }
    simonOrder = true;
    timeStamp = setInterval(gameTurn, 800);
}













