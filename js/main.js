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
  });

  $('.custom_select .dropdown > .caption').on('click', function() {
     $(this).parent().toggleClass('open');
   });
   
   $('.custom_select .dropdown > .list > .item').on('click', function() {
     $('.custom_select .dropdown > .list > .item').removeClass('selected');
     $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html( $(this).html() );
     let y =$(this).attr("value");   
     let r=$('.custom_select .dropdown').index(this);
     let staticPrice= $(".price-custom-select").eq( r ).attr("price");
      $(".price-custom-select").eq( r ).text(y*staticPrice);
  


});
   
   $(document).on('keyup', function(evt) {
     if ( (evt.keyCode || evt.which) === 27 ) {
       $('.custom_select .dropdown').removeClass('open');
     }
   });
   
   $(document).on('click', function(evt) {
     if ( $(evt.target).closest(".custom_select .dropdown > .caption").length === 0 ) {
       $('.custom_select .dropdown').removeClass('open');
     }
   });
})

  
    
     
