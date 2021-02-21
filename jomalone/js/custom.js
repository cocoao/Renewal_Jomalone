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


const mainNewTop = $(".newBox").offset().top;
const bestBoxTop = $(".bestBox").offset().top;
const allBoxTop = $(".allBox").offset().top;
const otherBoxTop = $(".otherBox").offset().top;

// console.log(otherBoxTop);

// allow click scroll down
// console.log(mainNewTop);
$(".allow").click(function(){
  $("html,body").animate({scrollTop:mainNewTop});
});

// contents fixed when scroll
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > mainNewTop){
    $('.contentsBox').addClass('fixed');
  }
  else{
    $('.contentsBox').removeClass('fixed');
  }
});

$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if(scroll > mainNewTop + 80){
    $('.newCon').show();
    $('.bestCon').hide();
    $('.allCon  ').hide();
  }
  if(scroll > bestBoxTop - 550){
    $('.newCon').hide();
    $('.bestCon').show();
    $('.allCon').hide();
  }
  if(scroll > allBoxTop - 500){
    $('.newCon').hide();
    $('.bestCon').hide();
    $('.allCon').show();
  }
});

});