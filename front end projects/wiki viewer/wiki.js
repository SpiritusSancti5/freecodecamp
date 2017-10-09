var keyword;

$("#random").click(function(){
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank")
});

function getResults() {
  $.getJSON("http://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?", function(data) {
    if($.isArray(data)) {
      $("#results").html('');
      $.each(data[1], function(x){
    $("#results").append(
      '<div class="results"><a href="' + data[3][x] + '" target="_blank">' +
  '<h2>' + data[1][x] + '</h2></a><p>'
      + data[2][x] + '</p></div>'
    );
});
    };
  });
}

$( "#search" ).submit(function( event ) {
  event.preventDefault();
  keyword = $( "input" ).val();
  getResults();
});
