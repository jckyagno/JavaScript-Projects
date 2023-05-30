//window.alert() method
window.alert("1. This is using the window.alert() method.");

//document.write() method
document.write("1. This is using the document.write() method.");

//Defining Sent1 and Sent2 variables
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

//Concatenating both Sent1 and Sent2
document.write((Sent1) + (Sent2));

//Writing an expression
document.write(3+4);

function My_First_Function () {
    //Defining a variable and giving it a string value
    var str = "This is the button text!";
    //Putting the value of the variable into the 
    //HTML elementFromPoint with the "Button_Text" id
    document.getElementById("Button_Text").innerHTML = str;
}

//Display date in <p> in HTML
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

/*

window.alert("Hello, World!");

document.write("Hello, World!");

var A = "This is a string.";

window.alert(A);

document.write(A);

document.write("And I said to him \"What's up with flour tortillas?\"");

document.write("Flour tortillas are good,"+" but corn tortillas are starting"+" to become my favorite!");

var B = "Corn"+" Tortillas.";
document.write (B);

var dog = "Leon", cat = "Ada", chicken = "Claire", sheep = "Barry;"
document.write (cat);

document.write(3 + 3);

//Defining a function and naming it
function My_First_Function () {
    //Defining a variable and giving it a string value
    var str = "This is the button text!";
    //Putting the value of the variable into the 
    //HTML elementFromPoint with the "Button_Text" id
    document.getElementById("Button_Text").innerHTML = str;
}

*/