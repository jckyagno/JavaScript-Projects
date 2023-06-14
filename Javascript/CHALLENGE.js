window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    let x = document.getElementById(phonenumber).value;
    if (x == "") {
      alert("Phone Number must be filled out");
      return false;
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);