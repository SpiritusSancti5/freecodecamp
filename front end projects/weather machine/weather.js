var city = "Oxford";
var celsius = -273.15;
var fahrenheit = 9 / 5 - 459.67;

function getWeather() {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=02bdb63956880415cef29365d2a4dd30", function(data) {
    $("#location").html(city);
    celsius = Math.round(data.main.temp_max - 273.15);
    fahrenheit = Math.round(celsius * 9 / 5 + 32);
    $("#temperature").html(celsius);
    $("#weather_png").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    $("#description").html(data.weather[0].description);
  });
}

$(function() {
  getWeather();
});

function sortCF() {
  $("#temperature").html(fahrenheit);
  $(".CF").addClass("FC").off("click").removeClass("CF").click(sortFC).text("F");
}

function sortFC() {
  $("#temperature").html(celsius);
  $(".FC").addClass("CF").off("click").removeClass("FC").click(sortCF).text("C");
}

$(".CF").click(sortCF);
$(".FC").click(sortFC);
$( "#newCity" ).submit(function( event ) {
  event.preventDefault();
  city = $( "input" ).val();
  getWeather();
});
