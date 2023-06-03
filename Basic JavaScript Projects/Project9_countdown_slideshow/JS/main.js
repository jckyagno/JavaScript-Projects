function countdown() {                                                  //Function to countdown from a specified User input of seconds.
    var seconds = document.getElementById("seconds").value;             //Getting seconds value from User input in HTML.

    function tick() {                                                   //Nested function that counts down.
        seconds = seconds - 1;                                          //Decrements seconds value down.
        timer.innerHTML = seconds;                                      //Links seconds to innerHTML, which is displayed in the <p id="timer"> HTML. 
        var time = setTimeout(tick, 1000);                              //Sets timer to 1000 milliseconds, then executes tick()
        if (seconds ==-1) {                                             //IF seconds is equla to -1, THEN...
           alert("Time's up!");                                         //... show alert box stating "Time's up!", and...
            clearTimeout (time);                                        //... clears the timer set by setTimeOut, and...
            timer.innerHTML = "";                                       //... set timer to blank.
        }
    }
    tick();                                                             //Actually run tick().
}

let slideIndex = 1;                                                     //Define a counter for slideIndex.
showSlides(slideIndex);                                                 //showSlides starting at value 1.

//Next/previous controls
function plusSlides(n) {                                                //Function to subtract/add to slideIndex, utilizing the onclick plusSlides -1 and 1
    showSlides(slideIndex += n);                                        //Modifies slideIndex counter with plus/minus from plusSlides.
}

//Thumbnail image controls 
function currentSlide(n) {                                              //Function to link slideIndex value to currentSlide value.
    showSlides(slideIndex = n);
}

function showSlides(n) {                                                //Function to show slides.
    let i;                                                              //Declares i.
    let slides = document.getElementsByClassName("mySlides");           //Declares slides equals every instance of class mySlides.
    let dots = document.getElementsByClassName("dot");                  //Declares dots equals exery instance of class dot.
    if (n > slides.length) {slideIndex = 1}                             //IF n is greater than slides's length (of three instances), then assign slideIndex back to 1.
                                                                        //This acts as a upper limiter and doesn't allow slideIndex to reach 4, and resets to 1.
    if (n < 1) {slideIndex = slides.length}                             //IF n is less than 1, then assign slideIndex to length of slides (which is 3).
                                                                        //This acts as a lower limiter and doesn't allow slideIndex to reach 0, and reset to 3.
    for (i = 0; i < slides.length; i++) {                               //FOR loop, states i equals 0, if i is less than slides.length...
        slides[i].style.display = "none";                               //... set style.display to none, which makes the image not visible...
    }                                                                   //... then increment i, and start loop over until i is equal to slides.length.
    for (i = 0; i < dots.length; i++) {                                 //FOR loop, states i equals 0, if i is less than dots.length...
        dots[i].className = dots[i].className.replace(" active", "");   //... replace class name with active, which pulls the .active element background-color...
    }                                                                   //... then increment i, and start loop over until i is equal to dots.length.
    slides[slideIndex-1].style.display = "block";                       //Display slide with slideIndex-1 (to match array) as a block element.
    dots[slideIndex-1].className += " active";                          //Add the active class to the dot with slideIndex-1 (to match array).
}

//let slideIndex = 0
//showSlides();

//function showSlides() {
//    let i;
//    let slides = document.getElementsByClassName("mySlides");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) {slideIndex = 1}
//    slides[slideIndex-1].style.display = "block";
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
//}