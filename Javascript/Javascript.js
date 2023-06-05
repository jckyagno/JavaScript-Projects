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