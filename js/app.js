$(document).foundation();

// --------- Homepage ----------- //

// call to action btn in hero image
let heroCTA = $('.hero-cta')

// hover effects
heroCTA.hover(
  function() {
    $('.hero-cta .btn').addClass( "btn-hover" );
    $('.hero-cta .btn p').addClass( "btn-hover-p" );
  },
  function() {
    $('.hero-cta .btn').removeClass( "btn-hover" );
    $('.hero-cta .btn p').removeClass( "btn-hover-p" );
  }
)
