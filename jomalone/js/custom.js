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
  $(".gnbBox.hidden").css({"left":"0"});
});
$(".miniGnbDEl").click(function(){
  $(".gnbBox.hidden").css({"left":"-150px"});
});

// main slider
$(".slideImg").bgSlideShow();

const mainBoxTop = $(".mainNewBox").offset().top;

console.log(mainBoxTop);
$(".allow").click(function(){
  $("html,body").animate({scrollTop:mainBoxTop});
});


$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > mainBoxTop + 80){
    $('.contentsBox').addClass('fixed');
  } else {
    $('.contentsBox').removeClass('fixed');
  }
});
});