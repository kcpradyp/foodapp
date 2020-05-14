$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

$(window).on('scroll', function () {
  var scrollTop = $(window).scrollTop();
  $('a[href*="#"]:not([href="#"])').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr('href'));
    if (
      refElement &&
      refElement.offset().top <= scrollTop &&
      refElement.offset().top + refElement.height() > scrollTop
    ) {
      $('#sectionNav ul li').removeClass('active');
      currLink.parent('li').addClass('active');
    } else {
      currLink.parent('li').removeClass('active');
    }
  });
});
