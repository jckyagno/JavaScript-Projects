function full_Sentence() {                                                          //Function to concatenate all parts into one full sentence.
    var part_1 = "I "                                                               //Part 1
    var part_2 = "am "                                                              //Part 2
    var part_3 = "really "                                                          //Part 3
    var part_4 = "hungry."                                                          //Part 4
    var whole_sentence = part_1.concat(part_2, part_3, part_4);                     //Parts 1-4 all concatenated to create a full sentence.
    document.getElementById("Concatenate").innerHTML = whole_sentence;              //Display full sentence to <p> HTML.
}

function slice_Method() {                                                           //Function to slice characters out of a string.
    var Sentence = "All work and no play makes Johnny a dull boy.";                 //Assigning sentence to var sentence.
    var Section = Sentence.slice(27, 33);                                           //Utilizing .slice to take out characters in 28-33.
    document.getElementById("Slice").innerHTML = Section;                           //Linking Section to display in <p> HTML.
}

function mySliceFunction() {                                                        //Function to use slice to take out certain parts of a sentence.
    var Sentence = "\"I am going to read to you --- can you hear me?" +             //Assigning sentence to var sentence.
    " --- from your deposition of yesterday.\"";
    var Section1 = Sentence.slice(0, 26);                                           //Assigning Section1 to first part of the sentence without the interruption.
    var Section2 = Sentence.slice(51, 87);                                          //Assigning Section2 to second part of the setence without the interruption.
    document.getElementById("SliceItUp").innerHTML = Section1.concat(Section2);     //Using concatenate to combine both sections into a full sentence.
}

function myUpperCaseFunction() {                                                    //Function to capitalize entire sentence.
    var Sentence = "I am going to read to you from your deposition of yesterday.";  //Assigning sentence to var Sentence
    result = Sentence.toUpperCase();                                                //Utilizing .toUpperCase() to capitalize every character in sentence.
    document.getElementById("UpperCaseItUp").innerHTML = result;                    //Linking UpperCaseItUp to display in <p> HTML.
}

function string_Method() {                                                          //Function to display chosen numbers as a string vice number.
    var X = 182;                                                                    //Assigning number value 182 to var X.
    document.getElementById("Numbers_to_string").innerHTML = X.toString();          //Linking Number_to_string to display in <p> HTML.
}

function myToStringFunction() {                                                     //Function to display chosen numbers as a string vice number.
    var seven = 7;                                                                  //Assigning number value 7 to var seven.
    document.getElementById("numbersToString").innerHTML = seven.toString();        //Linking numbersToString to display in <p> HTML.
}   

function precision_Method() {                                                       //Function to display chosen number value to a certain length.
    var x = 12938.3012987376112;                                                    //Assigned a really long number to var x.
    document.getElementById("Precision").innerHTML = x.toPrecision(10);             //Linked Precision to display in <p> HTML.
}

function myToPrecisionFunction() {                                                  //Function to display the number Pi to the traditional hundredths.
    document.getElementById("PiToHundredths").innerHTML = Math.PI.toPrecision(3);   //Linked PiToHundreths to display in <p> HTML, as well as utilizing the .toPrecision()
}                                                                                   //to display it to the hundredths and nothing more.

function myToFixedFunction() {                                                      //Function to display chosen number to a certain length and rounded.
    var x = 12.34567890                                                             //Assigned example number to var x.
    document.getElementById("ToFixed").innerHTML = x.toFixed(2);                    //Linked ToFixed to display in <p> HTML, as well as utilizing toFixed()
}                                                                                   //to display to the hundredths and round.


function myValueOfFunction() {                                                      //Functiuon to display primitive value of string.
    var x = "Circus of Value!"                                                      //Assigned "Circus of Value!" to var x.
    document.getElementById("ValueOf").innerHTML = x.valueOf();                     //Utilized .valueOf() to display x in primitive value, and link ValueOf to
}                                                                                   //display in <p> HTML.