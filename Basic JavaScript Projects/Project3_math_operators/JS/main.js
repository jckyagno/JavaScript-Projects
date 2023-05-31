function myAdditionFunction() {                                                                             //Addition Function
    var addition = 2 + 2;                                                                                   //Assigned variable to "2 + 2", named "addition"
    document.getElementById("Addition").innerHTML = "Some say that 2 + 2 = "                                //Combined text strings with var addition
     + addition + ", and they would be right.";                                                             
}

function mySubtractionFunction() {                                                                          //Subtraction Function
    var subtraction = 4 - 2;                                                                                //Assigned "4 - 2" to variable, named "subtraction"
    document.getElementById("Subtraction").innerHTML = "Others say that 4 - 2 = "                           //Combined text strings with var subtraction
     + subtraction + ", and they would also be right.";                                                     
}

function myMultiplicationFunction() {                                                                       //Multiplication Function
    var multiplication = 2 * 2;                                                                             //Assigned "2 * 2" to variable, named "multiplication"
    document.getElementById("Multiplication").innerHTML = "Still, legend has it that 2 &#215; 2 = "         //Combined text strings with var multiplication
     + multiplication + ". Scholars around the world have confirmed this.";                                 
}

function myDivisionFunction() {                                                                             //Division Function
    var division = 4 / 2;                                                                                   //Assigned "4 / 2" to variable, named "division"
    document.getElementById("Division").innerHTML = "However, the smartest minds state that 4 &#247; 2 = "  //Combined text strings with var division      
     + division + ". It's all full circle.";
}

function myAllTogetherFunction() {                                                                          //Function with combined math operators
    var allTogether = (((2 + 2) - 2) * 2) / 2;                                                              //Combined math operator expressions, tiered with parentheses
                                                                                                            //Assigned expressions to variable, named "allTogether"
    document.getElementById("AllTogether").innerHTML = "2 + 2, then - 2, then &#215; 2, THEN &#247; 2 = "   //Combined text strings with var allTogether
     + allTogether + "! Man, we're smart.";
}

function myModulusFunction() {                                                                              //Modulus Function
    var modulus = 30 % 4;                                                                                   //Assigned "30 % 4" to variable, named "modulus"
    document.getElementById("Modulus").innerHTML = "The modulus of (remainder of) 30 &#247; 2 = "           //Combined text strings with var modulus
     + modulus + ". Wow.";
}

function myNegationFunction() {                                                                             //Negation Function
    var negation = 2;                                                                                       //Assigned "2" to variable, named "negation"
    document.getElementById("Negation").innerHTML = "The opposite/negative, form of " + negation + " = "    //Combined text strings with var negation, and utilized
     + -negation + ". Exhilarating.";                                                                       //the - unary operator to express the negative result
}

function myIncrementFunction() {                                                                            //Increment Function
    var x = 2;                                                                                              //Assigned "2" to varible, named "x"
    x++;                                                                                                    //Incremented x with the increment operator
    document.getElementById("Increment").innerHTML = "Incrementing 2 will give us "                         //Combined text strings with incremented variable x
     + x + ".";
}

function myDecrementFunction() {                                                                            //Decrement Function
    var x = 2;                                                                                              //Assigned "2" to variable, named "x"
    x--;                                                                                                    //Decremented x with the decrement operator
    document.getElementById("Decrement").innerHTML = "Decrementing 2 will give us "                         //Combined text strings with decremented variable x
     + x + ".";
}

function myRandomFunction() {                                                                               //Random Function
    var x = Math.random() * 100;                                                                            //Assigned Math.random() times 100 to variable, named x
    document.getElementById("Random").innerHTML = "Random number? Fine. "                                   //Combined text strings with var x
     + x + "." +
    "<br> Rounded to the nearest integer is " + Math.round(x) + ".";                                              //Used math method "Math.round()" to round x
}                                                                                                           //to its nearest integer

function myPiFunction() {                                                                                   //Pi Function
    document.getElementById("Pi").innerHTML = "Pi is " + Math.PI + ". Mmmm, Pi.";                           //Utilized Math.PI math property as substitution for Pi.
}