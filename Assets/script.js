//Hides all of my HTML divs and only displays the START
document.getElementById("q2"). style.display = "none";
document.getElementById("q1"). style.display = "none";
document.getElementById("q3"). style.display = "none";
document.getElementById("q4"). style.display = "none";
document.getElementById("q5"). style.display = "none";
document.getElementById("initials"). style.display = "none";
document.getElementById("highscores"). style.display = "none";

//
//Starts the timer
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

        document.getElementById("initials"). style.display = "block";

        
      }
    }, 1000);
 }

$("#startQ").click(begin);


document.getElementById("startQ").onclick = function () {


    document.getElementById("start").style.display = "none";

    document.getElementById("q1"). style.display = "block";

}

document.getElementById("c1").onclick = function () {


    document.getElementById("q1").style.display = "none";

    document.getElementById("q2"). style.display = "block";

}

document.getElementById("c2").onclick = function () {

    document.getElementById("q2").style.display = "none";

    document.getElementById("q3"). style.display = "block";

}

document.getElementById("c3").onclick = function () {

    document.getElementById("q3").style.display = "none";

    document.getElementById("q4"). style.display = "block";

}

document.getElementById("c4").onclick = function () {

    document.getElementById("q4").style.display = "none";

    document.getElementById("q5"). style.display = "block";

}




document.getElementById("sbutton").onclick = function () {

    document.getElementById("initials").style.display = "none";

    document.getElementById("highscores"). style.display = "block";

}

document.getElementById("restart").onclick = function () {

    document.getElementById("start"). style.display = "block";

    document.getElementById("highscores"). style.display = "none";

}




//document.getElementById("formq").value = function () {
//
 //   alert("valueinside the text box is:"+form);


//}