function Ride_Function() {                                                                          //Naming function "Ride_Function"
    var Height, Can_ride;                                                                           //Assigning 2 variables named ""Height" and "Can_ride"
    Height = document.getElementById("Height").value;                                               //Linking to HTML to be used in input
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";                           //IF true, then first sentence; IF flase, then second sentence
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";                             //Linking result to display <p> in HTML
}

function Vote_Function() {                                                                          //Naming function "Vote_Function()"
    var Age, Can_vote;                                                                              //Assigning 2 variables, "Age" and "Can_vote"
    Age = document.getElementById("Age").value;                                                     //Linking to HTML to be used in input
    Can_vote = (Age <= 18) ? "You are not old enough to vote.":"You can vote!";                     //IF true, then first sentence; IF flase, then second sentence
    document.getElementById("Vote").innerHTML = Can_vote;                                           //Linking result to display <p> in HTML
}

function Vehicle(Make, Model, Year, Color) {                                                        //Creating constructor for Vehicle with properties
    this.Vehicle_Make = Make;                                                                       //Creating different properties for constructor
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");                                              //Assigning values to each object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction1() {                                                                            //Creating function named "myFunction1"
    document.getElementById("Keywords_and_Constructors").innerHTML =                                //Linking result to display <p> in HTML
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}
function myFunction2() {                                                                            //Creating function named "myFunction2"
    document.getElementById("New_and_This").innerHTML =                                             //Linking result to display <p> in HTML
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year + ".";
}

function subFaction(Faction, GrandAlliance, Color) {                                                //Creating constructor for subFaction with properties
    this.subFaction_Faction = Faction;                                                              //Creating different properties for constructor
    this.subFaction_GrandAlliance = GrandAlliance;
    this.subFaction_Color = Color;
}
var HammersOfSigmar = new subFaction("Stormcast Eternals", "Order", "Gold");                        //Assigning values to each object
var ClanSkryre = new subFaction("Skaven", "Chaos", "Teal and Red");
var GrinningBlades = new subFaction("Orruks", "Destruction", "Red and Green");

function myWarhammerFunction() {                                                                    //Creating function named "myWarhammerFunction"
    document.getElementById("AgeOfSigmar").innerHTML =                                              //Linking result to display <p> in HTML
    "Clan Skryre is a sub-faction that is part of the " + ClanSkryre.subFaction_Faction +           
    " faction. <br>They're part of the Grand Alliance " + ClanSkryre.subFaction_GrandAlliance +     
    ", <br>usually in clothed in " + ClanSkryre.subFaction_Color + "-colored livery.";              
}

function count_Function() {                                                                         //Creating function named "count_Function"
    document.getElementById("Counting").innerHTML = Count();                                        //Linking result to display <p> in HTML, and linking to embedded function.
    function Count() {                                                                              //Creating function named "Count"
        var Starting_point = 9;                                                                     //Assigning 9 variable named "Starting_point"
        function Plus_one() {Starting_point += 1;}                                                  //Creating nested function named "Plus_one",
        Plus_one();                                                                                 //  and making it reference "Starting_point", plus one
        return Starting_point;                                                                      //Returns result of "Starting_point" plus one
    }
}

function myNestedFunction() {                                                                       //Creating function named "myNestedFunction"
    document.getElementById("Nested_Function").innerHTML = Count();                                 //Linking result to display <p> in HTML, and linking to embedded function.
    function Count() {                                                                              //Creating function named "Count"
        var startingNumber = 7;                                                                     //Assigning 7 variable named "startingNumber"
        function plusFive() {startingNumber += 5;}                                                  //Creating nested function named "plusFive",
        plusFive();                                                                                 //  and making it reference "startingNumber", plus five 
        return startingNumber;                                                                      //Returns result of "startingNumber" plus five
    }
}