var x = 10                                                                                      //Assigning 10 to var x.
var y = 15                                                                                      //Assigning 15 to var y.

function globalFunction() {                                                                     //Utilizing the global variables to
    x + y;                                                                                      //make a functionable function.
    document.getElementById("global").innerHTML = "This is using global variables."             
}

function mixedFunction() {                                                                      //Utilizing global and local variables
    var z = 20                                                                                  //to make a functioning function.
    x + z;
    document.getElementById("mixed").innerHTML = "This is using global and local variables."    
}

function errorFunction() {                                                                      //Attempting to utilize a local variable from another
    y + z;                                                                                      //function to express an error message in the console
    document.getElementById("error").innerHTML = "This won't work."                             //log.
}

console.log(z)                                                                                  //Premeditated console.log() check to express error.

function get_Date() {                                                                           //Function that expresses if the time of day is less than
    if (new Date().getHours() < 18) {                                                           //6:00pm, then reply with text.
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function myDateFunction() {                                                                     //Function that expressed if the time of day is after 10:00pm,
    if (new Date().getHours() > 22) {                                                           //then display "It's late!---".
        document.getElementById("Awake").innerHTML = "It's late! Get to bed!";
    }
    if (new Date().getHours() < 6) {                                                            //If time of day is before 6:00am, then display "It's early!---".
        document.getElementById("Awake").innerHTML = "It's early! Go back to sleep!";
    }
}

function myIfFunction () {                                                                      //Function to tell whether a weekend or weekday.
    const d = new Date();                                                                       //Assigning constant d to date.
    let day = d.getDay()                                                                        //Assigning function getDay() to constant d.
    if (day <= 0 || day >= 7) {                                                                 //IF it is Sunday or Saturday, then it is a weekend.
        day = "It's a weekend!";
    }
    else {                                                                                      //ELSE if it is neither of those days, it must be a weekday.
        day = "It's a weekday!";
    }
    document.getElementById("Day").innerHTML = day;                                             //Linking id "Day" to display in <p> HTML.
}

function Age_Function() {                                                                       //Function to accept input from User and compare to age voting limits.
    Age = document.getElementById("Age").value;                                                 //Assigning "Age" to value given by user in <input> HTML.
    if (Age >= 18) {                                                                            //IF User input is greater than or equal to 18, THEN display "--- old enough---".
        Vote = "You are old enough to vote!";
    }
    else {                                                                                      //ELSE if User input does not meet afformentioned value, THEN display
        Vote = "You are not old enough to vote!";                                               //"--- not old enough---".
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;                               //Linking id "How_old_are_you?" to display in <p> HTML.
}

function myPizzaFunction() {                                                                    //Function for User to guess what is the best pizza topping.
    ToppingForPizza = document.getElementById("ToppingForPizza").value;                         //Assigning "ToppingForPizza" to value given by user in <input> HTML.
    result = ToppingForPizza.toLowerCase();                                                     //Utilizing embedded function to display all lower case, just in case User type mix of upper or lower case.
    if (result == "pineapple") {                                                                //IF User-given value is "pineapple", THEN display "---CORRECT---".
        Pizza = "YOU ARE CORRECT :D";
    }
    else {                                                                                      //ELSE value is different, display "Try again---".
        Pizza = "Try again. Maybe something a little more piney and appley...";
    }
    document.getElementById("PizzaAnswer").innerHTML = Pizza                                    //Linking id to "PizzaAnswer" to display in <p> HTML.
}

function Time_function() {                                                                      //Function to see what generalized time of day it is utilizing computer clock.
    var Time = new Date().getHours();                                                           //Assigning "Time" to get computer clock time.
    var Reply;                                                                                  //Utilizing "Reply" to state result text.
    if (Time < 12 == Time > 0) {                                                                //IF time is between 12:00am to 12:00pm, display "---morning---".
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {                                                         //ELSE IF time is between 12:00pm and 6:00pm, display "---afternoon.".
        Reply = "It is afternoon.";
    }
    else {                                                                                      //ELSE any other time, display "---evening---."
        Reply = "It is evening time...";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;                                   //Linking id to "Time_of_day" to display in <p> HTML.
}