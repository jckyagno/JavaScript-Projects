function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age <= 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction1() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model +
    " manufactured in " + Emily.Vehicle_Year + ".";
}

function subFaction(Faction, GrandAlliance, Color) {
    this.subFaction_Faction = Faction;
    this.subFaction_GrandAlliance = GrandAlliance;
    this.subFaction_Color = Color;
}
var HammersOfSigmar = new subFaction("Stormcast Eternals", "Order", "Gold");
var ClanSkryre = new subFaction("Skaven", "Chaos", "Teal and Red");
var GrinningBlades = new subFaction("Orruks", "Destruction", "Red and Green");

function myWarhammerFunction() {
    document.getElementById("AgeOfSigmar").innerHTML = 
    "Clan Skryre is a sub-faction that is part of the " + ClanSkryre.subFaction_Faction +
    " faction. <br>They're part of the Grand Alliance " + ClanSkryre.subFaction_GrandAlliance +
    ", <br>usually in clothed in " + ClanSkryre.subFaction_Color + "-colored livery.";
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function myNestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var startingNumber = 7;
        function Plus_five() {startingNumber += 5;}
        Plus_five();
        return startingNumber;
    }
}