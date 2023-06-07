function pizzaFunction() {
    var output;
    var Answer = document.getElementById("pizzaInput").value;
    var input = Answer.toLowerCase();
    var pizzaCorrect = " pizza is the right answer! :D"
    var pizzaWrong = " pizza is not pineapple pizza..."
    switch(input) {
        case "lasagna":
            output = "Lasagna" + pizzaWrong;
        break;
        case "root beer":
            output = "Root Beer" + pizzaWrong;
        break;
        case "bread":
            output = "Bread" + pizzaWrong;
        break;
        case "pineapple":
            output = "Pineapple" + pizzaCorrect;
        break;
        case "pepsi":
            output = "Pepsi" + pizzaWrong;
        break;
        case "water":
            output = "Water" + pizzaWrong;
        break;
        default:
        output = "Please enter a type of pizza from the above list.";
    }
    document.getElementById("correctAnswer").innerHTML = output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0,0,200,80);
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);