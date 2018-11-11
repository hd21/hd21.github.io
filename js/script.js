// Scroll to section from side menu

$('#side-menu > ul > li > a').click(function(e) {
  e.preventDefault();
  var section = $(this).attr('href');
  $('html, body').animate(
    {
      scrollTop: $(section).offset().top - 250,
    },
    'slow'
  );
});

// Scroll to top

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

// Let side menu disappear

$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();
  if ((scrollPos >= 480 && scrollPos < 6200) || scrollPos > 8670) {
    $('div#side-menu')
      .removeClass('hidden')
      .fadeIn(300);
  } else {
    $('#side-menu').fadeOut(300);
  }
});

// Highlight text

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

// Detecting scroll position

// window.addEventListener('scroll', function(event) {
//   var scroll = this.scrollY;
//   console.log(scroll);
// });
