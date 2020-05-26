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

$('input[type=number]').change(function(){
     let z=$(this).val();
     let r=$('input[type=number]').index(this);
    let staticPrice= $(".price-inp-number").eq( r ).attr("price");
     $(".price-inp-number").eq( r ).text(z*staticPrice);
});

 $(document).mouseup(function (e) {
     let container = $('.box-popup-list');
     if (!container.is(e.target)
       && container.has(e.target).length === 0) {
       $('#popup-box').hide();
     }
   });
   let toDay=new Date();
   let day = toDay.getDate();
let month = toDay.getMonth() + 1;
let year = toDay.getFullYear();
$(".day-list").text(`${day} - ${month} - ${year}`)
  $(".btn-view-list").click(function(){
       $("#popup-box").css({display:"flex"})
  })
})
