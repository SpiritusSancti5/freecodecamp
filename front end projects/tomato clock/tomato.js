// I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
// User Story: I can reset the clock for my next pomodoro.
// User Story: I can customize the length of each pomodoro.
// Redundant code, i know, but i just wanted to finish it quickly

$(function() {

  var breaky = 5;  // the length of the next break
  var session = 25;  // the length of the next session / pomodoro
  var current = 25;  // minutes of current counter, be it break or pomodoro
  var count = 0;  // seconds counter

  var rest = false;  // break time
  var started = false;  // next pomodoro is started
  var running = false;  // counter is running

  var x; // set timer variable


  function display(){
    if (count > 9){
      $("#counter").html(current + ':' + count);
    } else {
       $("#counter").html(current + ':0' + count);
    }
  }

  $("#b_min").click(function(){
    if (breaky > 1) {
      --breaky;
      $("#b_count").html(breaky);
    }
  });

  $("#b_plus").click(function(){
    ++breaky;
    $("#b_count").html(breaky);
  });

  $("#s_min").click(function(){
    if (session > 1) {
      --session;
      $("#s_count").html(session);
      if (!started) {
        current = session;
        display();
      }
    }
  });

  $("#s_plus").click(function(){
    ++session;
    $("#s_count").html(session);
    if (!started) {
        current = session;
        display();
    }
  });

  $("#current").click(function(){
    // if there is no break, the pomodoro is started
    if (rest === false) { started = true; }
    // start / pause
    if (running === false) {
      x = setInterval(countDown, 1000);
      running = true;
    } else {
      clearInterval(x);
      running = false;
    }

    function countDown() {
      if (count > 0) {
        count--;
        display();
      } else {
        if (current > 0) {
          count = 59;
          current--;
          display();
        } else { // current timer finished
          if (rest === false) { // switching from pomodoro timer to break timer
            rest = true;
            current = breaky;
            $("#label").html('Break Timer');
            $("#current").css("background-image", "url(http://chiropracticis.com/wp-content/uploads/2013/10/tomatoes.jpg)");
            $("body").css("background-image", "url(http://media.treehugger.com/assets/images/2016/03/rotten_tomatoes.jpg.600x315_q90_crop-smart.jpg)");
          } else { // switching from break to pomodoro
            rest = false;
            current = session;
            $("#label").html('Session Timer');
            $("#current").css("background-image", "url(https://s10.postimg.org/skbb02hc5/timer_preview.jpg)");
            $("body").css("background-image", "url(https://s17.postimg.org/wsr02h8tr/timer_background_2.jpg)");
          }
        }
      }
    }

  });

});
