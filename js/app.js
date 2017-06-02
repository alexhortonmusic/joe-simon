$(document).foundation();

// --------- Homepage ----------- //

// ---------- TRY TO FIGURE THIS OUT!!!!! ----------- //
// hover effects
// function addHoverClass (button) {
//   let test = button + ' .btn'
//   let test2 = button + ' .btn p'
//   $(test).addClass( "btn-hover" )
//   $(test2).addClass( "btn-hover-p" )
// }
//
// function removeHoverClass (button) {
//   let test = button + ' .btn'
//   let test2 = button + ' .btn p'
//
//   $(test).removeClass( "btn-hover" )
//   $(test2).removeClass( "btn-hover-p" )
// }

// $(heroCTA).hover(
//   addHoverClass(heroCTA),
//   removeHoverClass(heroCTA)
// )


// call to action btn in hero image
let hoverCTA = '.cta'

$(hoverCTA).hover(
  function() {
    let btn = '#' + $(this)[0].id
    $(btn + ' .btn').addClass( "btn-hover" )
    $(btn + ' .btn p').addClass( "btn-hover-p" )
  },
  function() {
    let btn = '#' + $(this)[0].id
    $(btn + ' .btn').removeClass( "btn-hover" )
    $(btn + ' .btn p').removeClass( "btn-hover-p" )
  }
)

// ----------- show/hide "Joe's Story" on click - On homepage ----------- //

$('.fullContent').readmore({
  // collapsedHeight needs to be precise for the exact content
  collapsedHeight: 110,
  moreLink: "<p class='showMore'>Read whole story <i class='fa fa-caret-square-o-down' aria-hidden='true'></i></p>",
  lessLink: `<p class='showLess'>See less <i class="fa fa-caret-square-o-up" aria-hidden="true"></i></p>`
})

// showMore.click(
//   function() {
//     showMore.addClass('hide')
//     $('.fullContent').removeClass('hide')
//   }
// )
//
// showLess.click(
//   function() {
//     $('.fullContent').addClass('hide')
//     showMore.removeClass('hide')
//   }
// )
