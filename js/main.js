
$('#hamburger').click(function(){
    $('.main-humb').toggleClass('open');
    $('.menu').toggleClass('open');
});

$(function(){
    $('.slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0',
        responsive: [
           
            {
              breakpoint: 760,
              settings: "unslick"
            }
    
          ]
        
  });
  
});

$(function(){
  $('.inner').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
     
    });
});



