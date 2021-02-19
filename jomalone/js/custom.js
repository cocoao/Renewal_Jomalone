$(function(){

// header fix
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

      // console.log(scroll);

  if (scroll > 50){
    $('.header').addClass('pixHeader');
  } else {
    $('.header').removeClass('pixHeader');
  }
});

// navigation
$(".miniGnb").click(function(){
  $(".gnbBox.hidden").show();
});
$(".miniGnbDEl").click(function(){
  $(".gnbBox.hidden").hide();
});
});

$(function() {
  $(".slideImg").bgSlideShow();
});

// $(function () {
//   $(".slideImg").bgSlideShow({
//     current : 3,
//     images : ["/jomalone/img/main_slider_01.jpg,/jomalone/img/main_slider_02.jpg,/jomalone/img/main_slider_03.jpg"],
//     transitionDelay : 5000, // 5 seconds
//     transitionSpeed : 3000, // 3 seconds
//     transitionEffect : 'fade-in',
//     randomize : false, 
//     initialBackground : 'random',
//     debug : true,
//     eventHandlers : {
//       beforeInit: myBeforeInitFunc,
//       afterInit: myAfterInitFunc,
//       beforeChange : myBeforeChangeFunc,
//       afterChange : myAfterChangeFunc
//      },
//      slideControls: {
//        enabled: true,
//        classes: 'something'
//      }
//   });
// });