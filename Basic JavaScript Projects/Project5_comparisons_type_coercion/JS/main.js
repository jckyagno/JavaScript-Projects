document.write("high" + 5 + "<br>");                                //Coercing a string and a number value together

document.write(typeof 3 + "<br>");                                  //Utilizing "typeof" to give data type

function notANumber() {                                             //Dividing by zero to get NaN
    document.getElementById("nan1").innerHTML = 0/0
}

document.getElementById("nan2").innerHTML = isNaN('LEET');          //Utilizing isNaN to state "true"

document.getElementById("nan3").innerHTML = isNaN('1337');          //Utilizing isNaN to state "false"

document.write(2E310 + "<br>");                                     //Stating infinity

document.write(-3E310 + "<br>");                                    //Stating negative infinity

document.write((10 > 2) + "<br>");                                  //Using greater than to state true

document.write((10 < 2) + "<br>");                                  //Using less than to state flase

console.log(2 + 2);                                                 //Utilizing console to add 2+2

console.log(10 < 2);                                                //Utilizing console to state falsee

document.write((10 == 10) + "<br>");                                //Using double equals to state true

document.write((10 == 2) + "<br>");                                 //Using double equals to state false

document.write(("10" === "10") + "<br>");                           //Using triple equals to state true due to same type and same value

document.write((15 === "10") + "<br>");                             //Using triple equals to state false due to different type and value

document.write((10 === "10") + "<br>");                             //Using triple equals to state false due to different type but same value

document.write((10 === 15) + "<br>");                               //Using triple equals to state false due to same type but different value

document.write((10 > 5 && 5 > 2) + "<br>");                         //Using AND operator to state true

document.write((10 > 5 && 1 > 2) + "<br>");                         //Using AND operator to state false

document.write((10 > 5 || 1 > 2) + "<br>");                         //Using OR operator to state true

document.write((1 > 5 || 1 > 2) + "<br>");                          //Using OR operator to state false

document.write(!(1 > 5) + "<br>");                                  //Using NOT operator to state true

document.write(!(10 > 5) + "<br>");                                 //Using NOT operator to state flase