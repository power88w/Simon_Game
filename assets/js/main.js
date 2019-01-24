

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
})

var power = false;
var powerButton = document.querySelector("#power_button")
var counterOn = document.querySelector("#count")

powerButton.addEventListener('click', function powerMe(event) {
    if (powerButton.checked == true) {
        power = true;
        counterOn.innerHTML = "--";
        console.log("ok");
    } else  {
        power = false;
        counterOn.innerHTML = "";
        console.log("Off");
    }
})


