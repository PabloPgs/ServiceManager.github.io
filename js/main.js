//  Accordion
$('.services-accordion__collapse').slideUp()
$('.services-accordion__item').on('click', function () {

   $(this).children('.services-accordion__collapse').slideToggle()
})

// Slider 
$('.reviews-slider').slick({
   slidesToShow: 2,
   slidesToScroll: 2,
   vertical: true,
   verticalSwiping: true,
   autoplay: true,
   nextArrow: '<img class="reviews-slider__prev"src="./img/Reviews/chevron-up.png" alt="">',
   prevArrow: '<img class="reviews-slider__next"src="./img/Reviews/chevron-down.png" alt="">',
   responsive: [{
      breakpoint: 850,
      settings: {
         unslick: true,
      }
   }]
})

// Tabs
$('.team-tabs__content-item:first').addClass('active')
$('.team-tabs__header-item:first').addClass('active')

$('.team-tabs__header-item').on('click', function () {
   const id = $(this).attr('data-tab')

   $('.team-tabs__header-item').removeClass('active')
   $(this).addClass('active')

   $('.team-tabs__content-item').removeClass('active')
   $('.team-tabs__content').find(`[data-tab = ${id}]`).addClass('active')
})
// menu 
let blockDocument = false;
$('.burger').on('click', () => {
   $('.main-nav').toggleClass('main-nav--active')
   $('.header__btn').toggleClass('header__btn--active')
   $('body').toggleClass('hide-scroll')
})
