
$(function(){

  let winWidth = $(window).width();
// header fix
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll > 50){
    $('.logoBox').addClass('pixHeader');
  } else {
    $('.logoBox').removeClass('pixHeader');
  }
});

// navigation
$(".miniGnb").click(function(){
  $(".gnbBox.hidden").css({"left":"0"});
  $(".miniGnb").css({"display":"none"});
  $(".nav").css({"width":"110px"})
});
$(".miniGnbDEl").click(function(){
  $(".gnbBox.hidden").css({"left":"-150px"});
  $(".nav").css({"width":"50px"})
  $(".miniGnb").css({"display":"flex"});
});

if(winWidth <= 480){
  $(".miniGnb").click(function(){
    $(".gnbBox.hidden").css({"left":"50%"});
    $(".miniGnb").css({"display":"none"});
    $(".nav").css({"width":"100vw"})
  });
  $(".miniGnbDEl").click(function(){
    $(".gnbBox.hidden").css({"left":"-150px"});
    $(".nav").css({"width":"50px"})
    $(".miniGnb").css({"display":"flex"});
  });

}

let current = 0;
let timer;
const slideCon = $(".scenSlides");
let indicators = '';

for(let i=0; i < slideCon.length; i++){
indicators = `<span class="dot" value="${i}"></span>`;
$('.dot-container').append(indicators);
}

function slider(eq){
  $('.slider-container').animate({left : -100 * eq + "%"}, 500);
  current = eq;

  $(".dot-container ").find(".dot").removeClass("active");
  $(".dot-container ").find(".dot").eq(current).addClass("active");
}
$(".dot-container ").find(".dot").eq(0).addClass("active");

function autoSlide(){
  timer = setInterval(function(){
    let slideIndex = (current + 1) % slideCon.length;
    slider(slideIndex);
  }, 3000);
}
autoSlide();

function stopSlider(){
  clearInterval(timer);
}

$(".slideBtns").click(function(){
  if($(this).hasClass("prev")){
    if(current == 0){
      slider(current -1);
    }
  } else {
    if(current >= slideCon.length - 1){
      return false;
    } else {
      slider(current + 1);
    }
  }
});

$('.dot-container').on("mouseenter",function(){
  stopSlider();
});
$('.dot-container').on("mouseleave",function(){
  autoSlide();
});

$(".dot-container span").click(function(){
  let dotIndex = $(this).attr("value");
  slider(dotIndex);
});


let firstChild = slideCon.eq(0);
let lastChild = slideCon.eq(slideCon.length -1);
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

$(".slider-container").appendChild(clonedFirst);
$(".slider-container").insertBefore(clonedLast, firstChild);
});