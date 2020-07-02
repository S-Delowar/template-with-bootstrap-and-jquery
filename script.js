
// Closes responsive menu when a scroll trigger link is clicked
$('js-scroll-trigger').click(function(){
    $('.navbar-collapse').collapse('hide');
});

// Active scrollspy to active class to navbar items on scroll
$('body').scrollspy({
    target: "#mainNav",
    offset: 90
});

// Collapse Navbar
var navbarCollapse = function(){
    if($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
    } else {
        $("#mainNav").removeClass("navbar-scrolled");
    }
}

// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);


$('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });