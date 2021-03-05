$(function(){
  // slide size
  function slidecss(){
    var winWidth = $(window).width();
    var navWidth = $(".nav").width();
    var slideWid = winWidth - navWidth;
    var slideHei = winWidth * 0.35;
    $('#jssor_1').css({width:slideWid,height:slideHei});
    $('.slides').css({width:slideWid,height:slideHei});
    $('.slides img').css({width:slideWid,height:'auto'}); 
  }
  
  function slidecssmin(){
    var winWidth = $(window).width();
    var navWidth = $(".nav").width();
    var slideWid = winWidth - navWidth;
    var slideHei = '300px';
    $('#jssor_1').css({width:slideWid,height:slideHei});
    $('.slides').css({width:slideWid,height:slideHei});
    $('.slides img').css({width:'auto',height:'350px','object-position':'center center'}); 
  }
  
  $(window).resize(function(){
    var winWidth = $(window).width();
    if(winWidth <= 800){
      slidecssmin()
    } else {
      slidecss()
    }
  });
  var winWidth = $(window).width();
  if(winWidth <= 800){
    slidecssmin()
  } else {
    slidecss()
  }
});

// slide settings
window.jssor_1_slider_init = function(){
  var jssor_1_SlideshowTransitions = [
    {$Duration:800,$Opacity:2}
  ];
  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$,
      $SpacingX: 16,
      $SpacingY: 16
    }
  };
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  var MAX_WIDTH = 100 + '%';
  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;
    // console.log(MAX_WIDTH);
    if (containerWidth) {

        var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

        jssor_1_slider.$ScaleWidth(expectedWidth);
    }
    else {
        window.setTimeout(ScaleSlider, 30);
    }
}
ScaleSlider();


$Jssor$.$AddEvent(window, "load", ScaleSlider);
$Jssor$.$AddEvent(window, "resize", ScaleSlider);
$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
};