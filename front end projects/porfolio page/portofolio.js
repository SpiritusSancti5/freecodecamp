$(function() {

  var page = 3;

  function enable_next () {
    $('#next').css('visibility', 'visible');
  }

  function enable_prev () {
    $('#prev').css('visibility', 'visible');
  }

  $('#prev').click(function() {
    if (page > 1) {
      page--;
      switch (page) {
        case 1: $('#prev').css('visibility', 'hidden');
                $('.page_two').css('display','none');
                $('.page_one').css('display','inline');
          break;
        case 2: enable_next();
                $('.page_three').css('display','none');
                $('.page_two').css('display','inline');
          break;
      }
    }
  });

  $('#next').click(function() {
    if (page < 3) {
      page++;
      switch (page) {
        case 3: $('#next').css('visibility', 'hidden');
                $('.page_two').css('display','none');
                $('.page_three').css('display','inline');
          break;
        case 2: enable_prev();
                $('.page_one').css('display','none');
                $('.page_two').css('display','inline');
          break;
      }
    }
  });

   $('li').click(function() {
     $('li.active').removeClass('active');
     $(this).addClass('active');
   });

   $('.logo_text').click(function() {
     $('li.active').removeClass('active');
     $('li#intro').addClass('active');
   });
});
