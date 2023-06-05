function Call_Loop() {                                                                                  //Created function named "Call_Loop".
    var x = 0;                                                                                          //Assigned 0 to var "x".
    let text = "";                                                                                      //Created blank text object, to later utilize by adding on text.
    while (x < 10) {                                                                                    //Being loop, as long as "x" is less than value 10.
        x++;                                                                                            //Increment "x" by one.
        text += "The number is ... " + x + "<br>";                                                      //Add text, "x"'s value, and a line break to "text".
    }
    document.getElementById("Loop").innerHTML = text                                                    //Insert "text"'s string into <p> "Loop"'s innerHTML.
}

function myLengthFunction () {                                                                          //Created function named "myLengthFunction".
    var y = "Spongebob"                                                                                 //Assigned "Spongebob" to var "y".
    document.getElementById("Length").innerHTML = "There are " + y.length +                             //Send text and "y"'s character length to 
    " letters in the name \"Spongebob\".";                                                              //  <p> "Length"'s innerHTML.
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];                   //Created "Instruments" array with assigned strings to indices.
var Content = "";                                                                                       //Created blank text object, to later utilize by adding on text.
var Y;                                                                                                  //Created var "Y", to later be used for loop.
function for_Loop() {                                                                                   //Function for listing entire list of "Instruments" array.
    for (Y = 0; Y < Instruments.length; Y++) {                                                          //FOR loop, start "Y" at value 0, and as long as "Y" is less than the amount of
    Content += Instruments[Y] + "<br>";                                                                 //  indices in the "Instruments" array, then carry out specified instructions. At the end
    }                                                                                                   //  of loop, increment "Y" by one and start over.
    document.getElementById("List_of_Instruments").innerHTML = Content;                                 //Insert whatever's inside the Instrument index numbered "Y" into <p> "Loop"'s innerHTML.
}


var gundamArray = ["Wing", "Sandrock", "Heavy Arms", "Deathscythe", "Shenlong"];                        //Created "gundamArray" with assigned strings to indices.
var material = "";                                                                                      //Created blank text object, to later utilize by adding on text.
var z;                                                                                                  //Created var "z", to later be used for loop.
function array_Function() {                                                                             //Function for listing entire list of "gundamArray" array.
    for (z = 0; z < gundamArray.length; z++) {                                                          //FOR loop, start "z" at value 0, and as long as "z" is less than the amount of
    material += gundamArray[z] + "<br>";                                                                //  indices in the "gundamArray" array, then carry out specified instructions. At the end
    }                                                                                                   //  of loop, increment "Y" by one and start over.
    document.getElementById("Array").innerHTML = material;                                              //Insert whatever's inside the Instrument index numbered "Y" into <p> "Loop"'s innerHTML.
}

function constant_function() {                                                                          //Created function named "constant_function".
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};                          //Created constart named "Musical_Instrument", with assigned strings for properties.
    Musical_Instrument.color = "blue";                                                                  //Replaced Musical_Instrument.color "black" with "blue".
    Musical_Instrument.price = "$900";                                                                  //Created Musical_Instrument.price, and also assigned "$900" string to it.
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color +     //Send text and properties to <p> "Constant"'s innerHTML.
    " " + Musical_Instrument.type + " was " + Musical_Instrument.price + ".";
}

function myConstantFunction() {                                                                         //Created function named "myConstantFunction".
    const Drink = {type:"Tequila", brand: "Don Julio", flavor:"añejo"}                                  //Created constart named "Drink", with assigned strings for properties.
    Drink.flavor = "blanco";                                                                            //Replaced Drink.flavor "añejo" with "blanco".
    Drink.cost = "$52.89";                                                                              //Created Drink.cost, and also assigned "$52.89" string to it.
    document.getElementById("Drink").innerHTML = "The " + Drink.brand + " " + Drink.type +              //Send text and properties to <p> "Drink"'s innerHTML.
    " is of the " + Drink.flavor + " flavor, and costs " + Drink.cost + "."
}

function myLetFunction() {
    let x = 5                                                                                           //Assigned "5" to x locally.
    document.getElementById("Let").innerHTML = x                                                        //Display "x" as <p> "Let"'s innerHTML.
}

function myReturnFunction() {                                                                           //Created function named "myReturnFunction".
    return Math.PI                                                                                      //Utilized return to load Pi.
}
document.getElementById("Return").innerHTML = myReturnFunction()                                        //Send result of myReturnFunction to <p> "Return"'s innerHTML.

let videogameconsole = {                                                                                //Utilized let to create an object named "videogameconsole".
    brand: "Nintendo ",                                                                                 //Created property "brand" and assigned string.
    model: "Switch ",                                                                                   //Created property "model" and assigned string. 
    color: "black ",                                                                                    //Created property "color" and assigned string.
    status: "brand-new ",                                                                               //Created property "status" and assigned string.
    price: "$249.99",                                                                                   //Created property "price" and assigned string.
    description : function() {                                                                          //Created property "description"" and assigned function to it.
        return "We have a " + this.status + this.color + this.brand + this.model +                      //Have function return concatenated result of properties and strings.
        "for the price of " + this.price + ".";
        }
}
document.getElementById("Videogame").innerHTML = videogameconsole.description();                        //Send text and properties to <p> "Videogame"'s innerHTML.

function myBreakFunction() {                                                                            //Created function named "myBreakFunction".
    let text1 = "";                                                                                     //Created text1, empty string to later add results to it.
    for (a = 0; a < 11; a++) {                                                                          //FOR loop, a is 0, and as long as a is less than 11, carry out internal instructions.
        if (a === 5) { break; }                                                                         //IF a is equal to value 5, break the sequence and stop it.
        text1 += "Counting... " + a +"<br>";                                                            //Adding strings and value of "a" to text1.
    }
    document.getElementById("Break").innerHTML = text1;                                                 //Show the result of function as <p> "Break"'s innerHTML.
}

function myContinueFunction() {                                                                         //Created function named "myContinueFunction".
    let text2 = "";                                                                                     //Created text2, empty string to later add results to it.
    for (b = 0; b < 11; b++) {                                                                          //FOR loop, b is 0, and as long as b is less than 11, carry out internal instructions.
        if (b === 5) { continue; }                                                                      //IF a is equal to value 5, continue the sequence and skip over current iteration.
        text2 += "Counting... " + b + "<br>";                                                           //Adding strings and value of "b" to text2.
    }
    document.getElementById("Continue").innerHTML = text2;                                              //Show the result of function as <p> "Continue"'s innerHTML.
}