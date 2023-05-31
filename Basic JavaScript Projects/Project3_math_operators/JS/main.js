function myAdditionFunction() {
    var addition = 2 + 2;
    document.getElementById("Addition").innerHTML = "Some say that 2 + 2 = " + addition + ", and they would be right.";
}

function mySubtractionFunction() {
    var subtraction = 4 - 2;
    document.getElementById("Subtraction").innerHTML = "Others say that 4 - 2 = " + subtraction + ", and they would also be right.";
}

function myMultiplicationFunction() {
    var multiplication = 2 * 2;
    document.getElementById("Multiplication").innerHTML = "Still, legend has it that 2 &#215; 2 = " + multiplication + ". Scholars around the world have confirmed this.";
}

function myDivisionFunction() {
    var division = 4 / 2;
    document.getElementById("Division").innerHTML = "However, the smartest minds state that 4 &#247; 2 = " + division + ". It's all full circle.";
}

function myAllTogetherFunction() {
    var allTogether = (((2 + 2) - 2) * 2) / 2;
    document.getElementById("AllTogether").innerHTML = "2 + 2, then - 2, then &#215; 2, THEN &#247; 2 = " + allTogether + "! Man, we're smart.";
}

function myModulusFunction() {
    var modulus = 30 % 4;
    document.getElementById("Modulus").innerHTML = "The modulus of (remainder of) 30 &#247; 2 = " + modulus + ". Wow.";
}

function myNegationFunction() {
    var negation = -2;
    document.getElementById("Negation").innerHTML = "The opposite, or negative, form of 2 = " + negation + ". Exhilarating.";
}

function myIncrementFunction() {
    var x = 2;
    x++;
    document.getElementById("Increment").innerHTML = "Incrementing 2 will give us " + x + ".";
}

function myDecrementFunction() {
    var x = 2;
    x--;
    document.getElementById("Decrement").innerHTML = "Decrementing 2 will give us " + x + ".";
}

function myRandomFunction() {
    var x = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Random number? Fine. " + x + "." +
    "<br> Rounded to the nearest integer is " + Math.round(x);
}

function myPiFunction() {
    document.getElementById("Pi").innerHTML = "Pi is " + Math.PI + ". Mmmm, Pi.";
}