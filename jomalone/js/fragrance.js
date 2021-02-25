
// slider

var slider = $("#loop-slider"),
    imgGroup = $("#img-group"),
    img = $("#img-group li"),
    imgCount = img.length,
    firstImg = img.first(),
    lastImg = img.last();
    

// autoplay
if(slider.data('autoplay')){
  autoplay = slider.data('autoplay');
} else {
  autoplay = false;
}

// speed
if(slider.data('speed')){
  gallerySpeed = slider.data('speed');
} else {
  gallerySpeed = 4000;
}

// image size
imgGroup.css('width',(imgCount + 2) * 100 + 'vw');

// clone
(function cloneImages(){
  firstImg.clone().addClass('clone').appendTo(imgGroup);
  lastImg.clone().addClass('clone').prependTo(imgGroup);

  img = $("#img-group li");
  imgCount = img.length
}());

// img attr
(function makeImages(){
  img.each(function(){
    var $this = $(this),
        imgUrl = $this.data('img');
    $this.css('background-image','url(' + imgUrl + ')');
  });
})();

let position = -100,
    slidew = 100,
    duration = 0.3,
    delay = duration * 1000 + 1,
    endPosition = (imgCount - 2) * -100 

function nextSlide(){
  position = position - slidew;
  imgGroup.css({'transform':'translateX(' + position + 'vw)', 'transition-duration' : +duration + 's'});
}

function prevSlide(){
	position = position + slidew;
	imgGroup.css({'transform': 'translateX(' + position + 'vw)', 'transition-duration': +duration + 's'});
}
function rotateSlide(){
	setTimeout(function() {
    imgGroup.css({'transition-duration': '0s', 'transform': 'translateX(' + position + 'vw)'});
}, delay);
}

$(document).keydown(function(e) {
  switch (e.which) {
    case 39:
      if(position > endPosition + 1){
        nextSlide();
      } else {
        nextSlide();
        position = -100;
        rotateSlide();
      }
      break;

    case 37 :
      if(position < -101){
        prevSlide();
      } else {
        prevSlide();
        position = endPosition;
        rotateSlide();
      }
      break;

      default:
      return;
  }
  e.preventDefault();
});

function rotate(){
  if(position == endPosition){
    nextSlide();
    position = -100;
    rotateSlide();
  } else {
    nextSlide();
  }
}

if(autoplay == '1'){
  var speed = gallerySpeed,
      timer = setInterval(rotate, speed);

  slider.hover(
    function(){
      clearInterval(timer);
    },
    function(){
      timer = setInterval(rotate, speed);
    }
  );

  slider.keypress(
    function(){
      clearInterval(timer);
    },
    function(){
      timer = setInterval(rotate, speed);
    }
  );
}

$(".next").click(function(){
  if(position > endPosition + 1){
    nextSlide();
  } else {
    nextSlide();
    position = -100;
    rotateSlide();
  }
});

$(".prev").click(function(){
  if(position < - 101){
    prevSlide();
  } else {
    prevSlide();
    position = endPosition;
    rotateSlide();
  }
});

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

  // slider
  // let current = 0;
  // let timer;
  // const slideCon = $(".scenSlides");
  // let indicators = '';

  // for(let i=0; i < slideCon.length; i++){
  // indicators = `<span class="dot" value="${i}"></span>`;
  // $('.dot-container').append(indicators);
  // }

  // function slider(eq){
  //   $('.slider-container').animate({left : -100 * eq + "%"}, 500);
  //   current = eq;

  //   $(".dot-container ").find(".dot").removeClass("active");
  //   $(".dot-container ").find(".dot").eq(current).addClass("active");
  // }
  // $(".dot-container ").find(".dot").eq(0).addClass("active");

  // function autoSlide(){
  //   timer = setInterval(function(){
  //     let slideIndex = (current + 1) % slideCon.length;
  //     slider(slideIndex);
  //   }, 3000);
  // }
  // autoSlide();

  // function stopSlider(){
  //   clearInterval(timer);
  // }

  // $(".slideBtns").click(function(){
  //   if($(this).hasClass("prev")){
  //     if(current == 0){
  //       slider(current -1);
  //     }
  //   } else {
  //     if(current >= slideCon.length - 1){
  //       return false;
  //     } else {
  //       slider(current + 1);
  //     }
  //   }
  // });

  // $('.dot-container').on("mouseenter",function(){
  //   stopSlider();
  // });
  // $('.dot-container').on("mouseleave",function(){
  //   autoSlide();
  // });

  // $(".dot-container span").click(function(){
  //   let dotIndex = $(this).attr("value");
  //   slider(dotIndex);
  // });


  // let firstChild = slideCon.eq(0);
  // let lastChild = slideCon.eq(slideCon.length -1);
  // let clonedFirst = firstChild.cloneNode(true);
  // let clonedLast = lastChild.cloneNode(true);

  // $(".slider-container").appendChild(clonedFirst);
  // $(".slider-container").insertBefore(clonedLast, firstChild);

});

$(document).ready(function() {  
$('.productBoxes').isotope({
  itemSelector: '.productBox',
});

// filter items on button click
$('.button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $('.productBoxes').isotope({ filter: filterValue });
  $('.button-group button').removeClass('on');
  $('.button-group button').removeClass('active');
  $(this).addClass('on');
  $(this).addClass('active');
});
})