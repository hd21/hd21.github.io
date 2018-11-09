$(document).ready(function() {
  $(this).scrollTop(0);
});

// Scroll to Top

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    $('#return-to-top').fadeIn(200);
  } else {
    $('#return-to-top').fadeOut(200);
  }
});
$('#return-to-top').click(function() {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    600
  );
});

$(window).scroll(function() {
  $('.highlight').each(function() {
    if ($(this).onHighlight()) {
      $(this).addClass('show');
    } else {
      $(this).removeClass('show');
    }
  });
});

$.prototype.onHighlight = function() {
  var window = $(window);

  var viewport = {
    top: window.scrollTop(),
    left: window.scrollLeft(),
  };
  viewport.right = viewport.left + window.width();
  viewport.bottom = viewport.top + window.height();

  var boundary = this.offset();
  boundary.right = boundary.left + this.outerWidth();
  boundary.bottom = boundary.top + this.outerHeight();

  return !(
    viewport.right < boundary.left ||
    viewport.left > boundary.right ||
    viewport.bottom < boundary.bottom ||
    viewport.top > boundary.bottom
  );
};
