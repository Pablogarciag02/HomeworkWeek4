//Hides all of my HTML divs and only displays the START
document.getElementById("q2"). style.display = "none";
document.getElementById("q1"). style.display = "none";
document.getElementById("q3"). style.display = "none";
document.getElementById("q4"). style.display = "none";
document.getElementById("q5"). style.display = "none";
document.getElementById("initials"). style.display = "none";
document.getElementById("highscores"). style.display = "none";
document.getElementById("wrong"). style.display = "none";
document.getElementById("showH"). style.display = "none";


//Starts the timer and ends it once the answer for the final question is given.
function begin() {
    let myTimer, timing = 75;
    $('#timing').html(timing);
    $('#startQ').prop('disabled', true);
    myTimer = setInterval(function() {
      --timing;
      $('#timing').html(timing);

      document.getElementById("c5").onclick = function () {
        //alert('Too late! Try again');
        clearInterval(myTimer);
        $('#startQ').prop('disabled', false);

        document.getElementById("q5").style.display = "none";

        document.getElementById("wrong").style.display = "none";

        document.getElementById("initials"). style.display = "block";

        document.getElementById("showH").style.display = "block";

        
      }
    }, 1000);
 }

$("#startQ").click(begin);


//Hides the start div and displays the first question
document.getElementById("startQ").onclick = function () {

    document.getElementById("start").style.display = "none";

    document.getElementById("q1"). style.display = "block";

}


//When the correct answer is pressed the current question is made invisible and the next answer shows up
document.getElementById("c1").onclick = function () {

    document.getElementById("q1").style.display = "none"; 

    document.getElementById("wrong").style.display = "none";

    document.getElementById("q2"). style.display = "block";   
}


//If the wrong answer is pressed, this displays the "wrong answer Text for question 1"
document.getElementById("w1").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w2").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w3").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}


//When the correct answer is pressed the current question is made invisible and the next answer shows up
document.getElementById("c2").onclick = function () {

    document.getElementById("q2").style.display = "none";

    document.getElementById("wrong").style.display = "none";

    document.getElementById("q3"). style.display = "block"
}


//If the wrong answer is pressed, this displays the "wrong answer Text for question 2"
document.getElementById("w4").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w5").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w6").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}


//When the correct answer is pressed the current question is made invisible and the next answer shows up
document.getElementById("c3").onclick = function () {

    document.getElementById("q3").style.display = "none";

    document.getElementById("wrong").style.display = "none";

    document.getElementById("q4"). style.display = "block";

}


//If the wrong answer is pressed, this displays the "wrong answer Text for question 3"
document.getElementById("w7").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w8").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w9").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}


//When the correct answer is pressed the current question is made invisible and the next answer shows up
document.getElementById("c4").onclick = function () {

    document.getElementById("q4").style.display = "none";

    document.getElementById("wrong").style.display = "none";

    document.getElementById("q5"). style.display = "block";

}


//If the wrong answer is pressed, this displays the "wrong answer Text for question 4"
document.getElementById("w10").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w11").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w12").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}


//If the wrong answer is pressed, this displays the "wrong answer Text for question 5"
document.getElementById("w13").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w14").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}
document.getElementById("w15").onclick = function () {
    document.getElementById ("wrong").style.display="block";
}


//This function adds the text from the box into local storage and displays it in the text area.
function add_local() {
    const display = {};
    display.firstname = document.getElementById('form').value;
 
    window.localStorage.setItem('hs', JSON.stringify(display));
    
    let _display = JSON.parse(localStorage.getItem("hs"));
    document.getElementById('form').value = _display.firstname;
    document.getElementById('hs').value = Object.values(_display);
     
}


//When the show highscores button is pressed the highscores page is shown
document.getElementById("showH").onclick = function () {

    document.getElementById("initials").style.display = "none";

    document.getElementById("wrong").style.display = "none";

    document.getElementById("showH").style.display ="none";

    document.getElementById("highscores"). style.display = "block";

}


//restarts the whole code and allows the user to start the quiz again.
document.getElementById("restart").onclick = function () {

    document.getElementById("start"). style.display = "block";

    document.getElementById("highscores"). style.display = "none";

}

