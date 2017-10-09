// User Story: I can play a game of Tic Tac Toe with the computer.
// User Story: My game will reset as soon as it's over so I can play again.
// User Story: I can choose whether I want to play as X or O.
// Best solution would probably be linked list objects and checking the lines recursively after a square has been marked.

$(function(){

var count = 0;
var xo;
var AIchoice;
var sqrs;

function congratulate(player){
  $('#result').toggle();
  if (player === 'Nobody') { // draw
    $('#result').html('DRAW');
    $('#result').css('background-image', 'url(http://orig00.deviantart.net/dd8d/f/2012/295/8/0/the_abyss_by_alexiuss-d5im6xf.jpg)');
  } else if (player === xo) { // victory
    $('#result').html('VICTORY');
    $('#result').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/6/60/Victory_by_tamerr-d5t1lsz.jpg)');
  } else {
    $('#result').html('DEFEAT'); // defeat
    $('#result').css('background-image', 'url(http://s1.1zoom.net/big3/673/359468-sepik.jpg)');
  }

  setTimeout(function(){
    $('#result').toggle();
  }, 3000);

  $("td").toggle().addClass("xo");
  $('#x').attr("disabled", false);
  $('#o').attr("disabled", false);
  $("td" ).html('&nbsp;');
  count = 0;
}

function victory(player){
  if (($(".sq1").html() === player) && ($(".sq2").html() === player) && ($(".sq3").html() === player)) {
    congratulate(player);
  } else if (($(".sq4").html() === player) && ($(".sq5").html() === player) && ($(".sq6").html() === player)) {
    congratulate(player);
  } else if (($(".sq7").html() === player) && ($(".sq8").html() === player) && ($(".sq9").html() === player)) {
    congratulate(player);
  } else if (($(".sq1").html() === player) && ($(".sq4").html() === player) && ($(".sq7").html() === player)) {
    congratulate(player);
  } else if (($(".sq2").html() === player) && ($(".sq5").html() === player) && ($(".sq8").html() === player)) {
    congratulate(player);
  } else if (($(".sq3").html() === player) && ($(".sq6").html() === player) && ($(".sq9").html() === player)) {
    congratulate(player);
  } else if (($(".sq1").html() === player) && ($(".sq5").html() === player) && ($(".sq9").html() === player)) {
    congratulate(player);
  } else if (($(".sq3").html() === player) && ($(".sq5").html() === player) && ($(".sq7").html() === player)) {
    congratulate(player);
  } else {
    return false;
  }
  return true;
}

$("#x").click(function() {
  $("#x").css("background-color","yellow");
  $("#o").css("background-color","white");
  xo = 'X';
  $("td").toggle();
  $('#x').attr("disabled", true);
  $('#o').attr("disabled", true);
});

$("#o").click(function() {
  $("#o").css("background-color","yellow");
  $("#x").css("background-color","white");
  xo = "O";
  $("td").toggle();
  $('#x').attr("disabled", true);
  $('#o').attr("disabled", true);
});

function AImove(AI) {
  if (count === 9) {
    congratulate('Nobody');
  } else {
    sqrs = $('.xo').length;
    var done = false;
    do {
AIchoice = $('.xo').eq(Math.floor(Math.random()*sqrs) - 1);
    if ((AIchoice.html !=='X') && (AIchoice.html !=='O')){
    AIchoice.html(AI).removeClass("xo");
      done = true;
      } } while (done === false);
      count++;
      var aux = victory(AI);
    }
}

$("td").click(function() {
  if (count === 9) {
    congratulate('Nobody');
  } else
  if (($(this).text() !== "X") && ($(this).text() !== "O")) {
    if (xo === "X") {
      $(this).html("X").removeClass("xo");
      count++;
     if (victory("X") === false) {
      AImove("O");}
    } else {
      $(this).html("O").removeClass("xo");;
      count++;
      if (victory("O") === false) {
      AImove("X");}
    }
  }
});

});

$("td").toggle().addClass("xo");
$('#result').toggle();
