var $bg = $('#backgrounddim')

window.addEventListener('scroll', function(e) {

  var scrollTop = $(window).scrollTop();

  if (scrollTop > 780) {
    if (!$bg.hasClass("dimming")) {
      $bg.addClass("dimming");
    }
  } else {
    if ($bg.hasClass("dimming")) {
      $bg.removeClass("dimming");
    }
  }

});
