// asNavFor can be set a selector string
asNavFor: '.carousel-main'
// or an element
asNavFor: $('.carousel-main')[0]
asNavFor: document.querySelector('.carousel-main')

// 1st carousel, main
$('.carousel-main').flickity();
// 2nd carousel, navigation
$('.carousel-nav').flickity({
  asNavFor: '.carousel-main',
  contain: true,
  pageDots: false
});
/* is-nav-selected class added to nav cells */
.carousel-nav .carousel-cell.is-nav-selected {
  background: #ED2;
}