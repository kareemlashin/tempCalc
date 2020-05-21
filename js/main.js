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
 
$("select").change(function(){
     let z=$(this).val();
     let r=$('select').index(this);
    let staticPrice= $(".price-select").eq( r ).attr("price");
     $(".price-select").eq( r ).text(z*staticPrice);
});
$('input[type=range]').change(function(){
     let z=$(this).val();
     let r=$('input[type=range]').index(this);
    let staticPrice= $(".price-range").eq( r ).attr("price");
     $(".price-range").eq( r ).text(z*staticPrice);
});


})
//2101120150101093