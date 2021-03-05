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
  function naviFixed(){
    var winWidth = $(window).width();
  $(".miniGnb").click(function(){
    $(".gnbBox.hidden").css({"left":"0"});
    $(".miniGnb").css({"left":"-50px"});
    $(".nav").css({"width":"110px"})
  });
  $(".miniGnbDEl").click(function(){
    $(".gnbBox.hidden").css({"left":"-150px"});
    $(".nav").css({"width":"50px"})
    $(".miniGnb").css({"left":"0"});
    $('header .nav-2depth').css({"left":"-110px"});
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
  };
  
  // navigation 2depth
  function navi2depFixed(){
    var winWidth2 = $(window).width();
    console.log(winWidth);
  $("header .gnbBox .deapt-1>li").mouseover(function(){
    $('header .nav-2depth').css({"left":"110px"});
    var idName = $(this).attr('id');
    var de1Index = $(this).index();
    const indexTop = $('.deapt-1>li').eq(de1Index).offset().top;
    const indexTopPrev = $('.deapt-1>li').eq(de1Index - 1).offset().top;
    const indexBottom = $('.deapt-1>li').eq(de1Index).offset().bottom;
    const index4Top = $('.deapt-1>li').eq(3).offset().top;

    var viewClass = $(".deapt-2 ." + idName);
    if(de1Index <= 1){
      $(".deapt-2>li").css({'display':'none','top':indexTop + 'px'});
    }
    else if(de1Index <= 3 && de1Index > 1){
     $(".deapt-2>li").css({'display':'none','top':indexTopPrev + 'px'});
    }
    else if(de1Index <= 6 && de1Index > 3){
      $(".deapt-2>li").css({'display':'none','top':index4Top + 'px'});
    }
    $(viewClass).css({'display':'block'});
  });

  $(".header").mouseleave(function(){
    $('header .nav-2depth').css({"left":"-110px"});
  });
  
  $(".miniGnbDEl").mouseover(function(){
    $('header .nav-2depth').css({"left":"-110px"});
  });

  if(winWidth2 <= 480){
    $("header .gnbBox .deapt-1>li").click(function(){
      var gnbIndex = $(this).index();
      $('.deapt-1').css({'left':'-100%'});
      $('.nav-2depth').css({'left':'0','display':'block'});
      $('.deapt-2>li').css({'top':'0'});
    });
    $(".miniGnbDEl").click(function(){
      $('.nav-2depth').css({'display':'none'});
      $('.deapt-1').css({'left':'0'});
    });
  };
  };

  $(window).resize(function(){
    naviFixed();
    navi2depFixed();
  });
  naviFixed();
  navi2depFixed();


// filter isotope
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

// navigation click filter
let filterSelect = document.location.href.split("=")[1];

  $('.productBoxes').isotope({ filter: filterSelect });
  $('.button-group button').removeClass('on');
  $('.button-group button').removeClass('active');
  $('button' + filterSelect).addClass('on');
  $('button' + filterSelect).addClass('active');
});

});
