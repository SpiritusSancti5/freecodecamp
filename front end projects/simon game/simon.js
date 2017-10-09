// I am presented with a random series of button presses.
// User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
// User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
// User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
// User Story: I can see how many steps are in the current series of button presses.
// User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.
// User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
// User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

$(function() {

  var mY = $(".yell").offset();
  var mR = $(".re").offset();
  var mB = $(".blu").offset();
  var mG = $(".gree").offset();

  var arr = [];
  var usr = [];

  var strict = false;

  var count = 0;

  // turn it on button
  $("#commence").click(function(){
    // starting sequence
    $(".f").addClass( "spin" );
    $("#commence").html('YOU BROKE IT');
    $("body").css("background-image", "url(https://s17.postimg.org/m6u31uxov/837871_meme_wallpaper.jpg)");
    for (var i = 0; i < 100; i++) {
      // plays a random audio within the html section of class gling
      setTimeout(function(){         $('.gling').eq(Math.floor(Math.random()*$('.gling').length) - 1)[0].play();
      }, 500*i);
      // buttons detaching
      setTimeout(function(){
      var move = $(".yell").offset();
      $(".yell").offset({ top: move.top -2, left: move.left -2});
      move = $(".gree").offset();
      $(".gree").offset({ top: move.top -2, left: move.left +2});
      move = $(".re").offset();
      $(".re").offset({ top: move.top +2, left: move.left -2});
      move = $(".blu").offset();
      $(".blu").offset({ top: move.top +2, left: move.left +2});

        }, 100*i);

    } //end for

     // buttons change shape
      $(".yell").css({
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0 })
  .animate({
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200}, 9000);

    $(".gree").css({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0 })
  .animate({
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200}, 9000);

    $(".re").css({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0 })
  .animate({
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200}, 9000);

    $(".blu").css({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0 })
  .animate({
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200}, 9000);

  setTimeout(function(){
        $("#oki").toggle();
        $("#menu").toggle();
      }, 9000);

  setTimeout(function(){
    $('.gling').remove();
  }, 9000);

  }); // commence end

 // hide game options
 $("#menu").toggle();
 // start with unclickable buttons
 $(".fl").addClass("unclickable");

 // extreme mode
 $("#extreme").click(function(){
   if ($("#magic_space").hasClass("extreme")){
     $("#magic_space").removeClass("extreme");
   } else {
     $("#magic_space").addClass("extreme");
   }
 });

 $("#strict").click(function(){
   if (strict === false){
     strict = true;
   } else {
     strict = false;
   }
 });

  // adds glow to buttons after played
  function glow_(light) {
    switch (light) {
      case 0:
        $(".yell").css('background-color','#ff5');
        setTimeout(function(){
          $(".yell").css('background-color','#aa0');
        }, 1000);
        break;
      case 1:
        $(".re").css('background-color','#f55');
        setTimeout(function(){
          $(".re").css('background-color','#a00');
        }, 1000);
        break;
      case 2:
        $(".blu").css('background-color','#55f');
        setTimeout(function(){
          $(".blu").css('background-color','#00a');
        }, 1000);
        break;
      case -1:
        $(".gree").css('background-color','#5f5');
        setTimeout(function(){
          $(".gree").css('background-color','#0a0');
        }, 1000);
        break;
    }
  }

  // plays through the entire list
  function replay(x){
    var noise;
      setTimeout(function(){
        noise = $('.game').eq(arr[x]);
        noise[0].play();
        glow_(arr[x]);
      }, 2000*(x+1));
    if ( x < count ) {
      replay(x+1);
    }
  }

  // adds new sound to the list
  function sequencer(){
    var z = Math.floor(Math.random()*$('.game').length) - 1;
    $("#count").html(count);
    arr.push(z);
    replay(0);
  }

  // checks for correct click order
  function validator(){
    var okish = true;
    for (var j = 0; j < usr.length; j++){

      if (usr[j] !== arr[j]) { // if not correct sound
        $("#wrong")[0].play();
        okish = false;
        var newUsr = [];
        usr = newUsr;

        if (strict === true) {
          $("#failure")[0].play();
          count = 1;
          $("#count").html(count);
          var newArr = [];
          arr = newArr;
        } else {
          setTimeout(function(){
            replay(0);
          }, 2000);
        }

      } // end first if
    } // end for
    if ((okish === true) && (usr.length === arr.length)) { // else continue with the sequence
      if (count < 20) { // win condition not met
        var newUsr = [];
        usr = newUsr;
        count ++;
        setTimeout(function(){
          sequencer();
        }, 2000);
      } else {  // victory
        $("#win")[0].play();
        $("#start").trigger( "click" );
        $("#count").html('WIN! - Game reseted.');
      }
    }
  }

 // resets count and starts a new game
 $("#start").click(function(){
   $(".fl").removeClass("unclickable");
   count = 1;
   var newArr = [];
   arr = newArr;
   var newUsr = [];
   usr = newUsr;
   sequencer();
 });

  // individual buttons
  $(".yell").click(function(){
    $("#one")[0].play();
    usr.push(0);
    glow_(0);
    validator();
  });
  $(".re").click(function(){
    $("#two")[0].play();
    usr.push(1);
    glow_(1);
    validator();
  });
  $(".blu").click(function(){
    $("#three")[0].play();
    usr.push(2);
    glow_(2);
    validator();
  });
  $(".gree").click(function(){
    $("#four")[0].play();
    usr.push(-1);
    glow_(-1);
    validator();
  });

  $("#replay").click(function(){
    replay(0);
  });

});
