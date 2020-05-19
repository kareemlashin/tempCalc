$(document).ready(function() {
     $(window).scroll(function() {
          let windowScroll = $(window).scrollTop();
          if (windowScroll > 10) {
              $("nav").addClass("shadow")
  
          } else {
              $("nav").removeClass("shadow");
          }
      })

    $("#splash-screen").fadeOut(1000);

    let heightnav = $("nav").height();
    $("header").css({marginTop:heightnav})
    if ($('.custom-range-slider').length > 0) {
     $(".custom-range-slider").ionRangeSlider({
       
     });
 }
 $('select').niceSelect();


})