function myFunction() {                                     //Creating a variable
    var A = "You are";                                      //Defining variable A
    var B = " super awesome!";                              //Defining variable B
    A += B;                                                 //Concatenating variable A and B
    document.getElementById("functionId").innerHTML = A;    //Assigning ID, referencing varible A
}

function myFunction2() {                                     //Creating a variable
    var A2 = "You 2 are";                                      //Defining variable A
    var B2 = " super awesome 2!";                              //Defining variable B
    A2 += B2;                                                 //Concatenating variable A and B
    document.getElementById("functionId2").innerHTML = A2;    //Assigning ID, referencing varible A
}

function myFunction3() {
    result = (2 * 3);
    document.getElementById("product").innerHTML = result;
}