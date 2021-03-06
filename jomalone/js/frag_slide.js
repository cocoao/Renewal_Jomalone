// slider ******
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
    endPosition = (imgCount - 2) * -100,
    txtHr = $('.slide');

function nextSlide(){
  position = position - slidew;
  imgGroup.css({'transform':'translateX(' + position + 'vw)', 'transition-duration' : +duration + 's'});

  index = position * -0.01;
  if(index == 7){index = 1};
  txtHrtran = txtHr.eq(index).find('hr');
  txtHr.find('hr').removeClass('on');
  txtHrtran.addClass('on');
}

function prevSlide(){
	position = position + slidew;
  imgGroup.css({'transform': 'translateX(' + position + 'vw)', 'transition-duration': +duration + 's'});

  index = position * -0.01;
  if(index == 0){index = 6};
  txtHrtran = txtHr.eq(index).find('hr');
  txtHr.find('hr').removeClass('on');
  txtHrtran.addClass('on');
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