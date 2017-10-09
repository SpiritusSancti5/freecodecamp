var quoteURL = "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var tweetURL = "https://twitter.com/intent/tweet?text=";

function getQuote() {
  $.getJSON(quoteURL, function(data) {
    $("#quote_container").html(data.quoteText);
    $("#author").html(data.quoteAuthor);
    $("#tweet").attr("href", tweetURL + data.quoteText + ' - ' + data.quoteAuthor);
  });
}

$(function() {
  getQuote();
});
$("#newQ").click(function() {
  getQuote();
});
