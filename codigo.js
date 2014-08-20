$(function(){
  var answer = "puerto rico";
  var answer2 = "cuba";
  var answer3 = "asia";

  var repeat = function(){
    var guess = prompt("Where do you think i'm from?").toLowerCase();
    if (guess === answer) {
      alert('You got that right!!!');
    } else if (guess === answer2){
      alert("I am not cuban, but our flag is very similar to their flag, Please try again!!!.");
      repeat();
    } else if (guess === answer3){
      alert("They call me chino but im not Asian. Try again!!!.");
      repeat();
    } else{
      alert("Not from there,Try again!!!");
      repeat();
    }
  }
  $('#click_me').on('click', repeat);
});

$(document).ready(function(){
  $('#main-container').animate({
    "height":"600px"
  });
});

$(document).ready(function(){
    $("#main-header").fadeOut(2000);
});

$(document).ready(function() {
    $("#menu-nav").mouseenter(function() {
        $("#menu-nav").fadeTo("slow", 1);
    });
    $("#menu-nav").mouseleave(function() {
        $("#menu-nav").fadeTo("fast", 0.5);
    });
});

