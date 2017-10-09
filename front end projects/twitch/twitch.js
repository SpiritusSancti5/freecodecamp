/* list of streamers only seems to display on firefox
it might be an issue with jquery or the JSON object received from twitch
don't have time to fix it right now
i could use ReactJS to simplify the code a lot, but don't have time right now

i better use my time to learn new things and improve my understanding of building websites, rather than spending an awful lot of time perfecting projects that weren't done for another person

these codepen.io projects are all just experiments and practice work
*/


var names = ["forsenlol", "followgrubby", "ratsmah", "grinninggoat", "kolento", "nl_kripp", "teaminven", "freecodecamp", "nightweasel"];


function getResults() {
  $("#streamers").html('');
  $.each(names, function(x, value) {

    // add streamer
  $("#streamers").append('<div class="streamer" id="' + value + '">' + '<h3>' + value + '</h3></div>'
  );

   // default online status
   $("#" + value).append('<div class="onStatus">Channel doesn\'t exist!</div>'
  );

    $.getJSON("https://api.twitch.tv/kraken/streams/" + value + "?client_id=a3st12urtyojgbmej3xqp0i1st9lv07", function(data) {

      // check online status
      if (data.stream !== null) {

// set online status to online
   $("#" + value + " .onStatus").html('Online'
  );

// code below is a workaround for the getJSON issue on codepen.io - incomplete Object is returned in the getJSON above, when the streamer is online

        $.getJSON("https://api.twitch.tv/kraken/channels/" + value + "?client_id=a3st12urtyojgbmej3xqp0i1st9lv07", function(dataFix) {

//add logo
 $("#" + value).prepend('<img src="' + dataFix.logo + '" width="30" height="30">');

 // add stream details
 // stream title
  $("#" + value).append('<h4>Now streaming:  ' + data.stream.game + '   -  <span class=>' + data.stream.viewers + ' viewers</span></h4>');

 // status message
 $("#" + value).append('<h5> - ' + dataFix.status + '</h5>');

// preview image
$("#" + value).append('<img class="stream_preview" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_' + value + '-320x180.jpg" width="192" height="114">');

        }); // second getJSON end

      } else {

   // set online status to offline
   $("#" + value + " .onStatus").html('Offline'
  );

        $.getJSON("https://api.twitch.tv/kraken/channels/" + value + "?client_id=a3st12urtyojgbmej3xqp0i1st9lv07", function(dataChan) {

//add logo
 $("#" + value).prepend('<img src="' + dataChan.logo + '" width="30" height="30">');

// status message
 $("#" + value).append('<h5> - ' + dataChan.status + '</h5>');

        }); // third getJSON end

      } //else end
    }); // first getJSON end
  }); // each - get status end
}

$(function() {
  //greeting pop up
  openWin();

  //
  getResults();

  // linking streamer info to their twitch channel
$(".streamer").click(function() {
  window.open("https://www.twitch.tv/" + $(this).attr("id"));
});
});

// kind of self explanatory
function openWin() {
  myWindow = window.open("", "", "width=900, height=530");
  myWindow.focus();
  myWindow.document.write(
    '<style>body{background-color:black;}</style>' +
    '<div style="margin: 0 auto; text-align: center; color: yellow; font-weight: bold; font-size: 200px; background-color: black;">Well met!</div>' +
    '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/vohiyo-profile_image-0d5b081a94d07184-300x300.png" style="display: block; margin: 0 auto;">' +
    '<audio src="https://www.myinstants.com/media/sounds/well-met.mp3" type="audio/mpeg" autoplay></audio>' +
    '<audio src="https://www.myinstants.com/media/sounds/well-met.mp3" type="audio/mpeg" autoplay onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 2000)"></audio>' +
    '<audio src="https://www.myinstants.com/media/sounds/zelda_theme_snes-cut-mp3.mp3" type="audio/mpeg" autoplay></audio>'
  );
}

// flying pikachu toggle
$(".blink").click(function() {
  $(".modal").toggle();
});

$(".modal").click(function() {
  $(".modal").toggle();
});
