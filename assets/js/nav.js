$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.menu1').fadeIn();
  } 
    else {
    $('.menu1').fadeOut();
  }
});