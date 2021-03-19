$(function(){

  // scroll top when reload
  history.scrollRestoration = "manual"

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
    $(".deapt-2>li").css({'display':'none'});
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


  var mainNewTop = $(".newBox").offset().top;
  var bestBoxTop = $(".bestBox").offset().top;
  var allBoxTop = $(".allBox").offset().top;
  var otherBoxTop = $(".otherBox").offset().top;
  var winWidth = $(window).width();

  // btns click scroll down
  $(".allow").click(function(){
    $("html,body").animate({scrollTop:mainNewTop});
  });

  $(".newPro").click(function(){
    $("html,body").animate({scrollTop:mainNewTop});
  });

  $(".bestPro").click(function(){
    $("html,body").animate({scrollTop:bestBoxTop});
  });

  $(".allPro").click(function(){
    $("html,body").animate({scrollTop:allBoxTop});
  });

  // contents box height
  $(window).resize(function(){
    const txtwinWidth = $(window).width();
    const txtBoxWid = txtwinWidth * 0.25;
    if(txtwinWidth <= 480){
      $(".texBox").css({"height":"25vh"});
    } else {
      $(".texBox").css({"height":txtBoxWid});
    }
  });
  const txtwinWidth = $(window).width();
  const txtBoxWid = txtwinWidth * 0.25;
  if(txtwinWidth <= 480){
    $(".texBox").css({"height":"25vh"});
  } else {
    $(".texBox").css({"height":txtBoxWid});
  };

  // contents fixed when scroll
  $(window).resize(function(){
    var scroll = $(window).scrollTop();
    var sectionTop = $(".imgSection").offset().top;
    var allBoxTop = $(".allBox").offset().top;

    if(sectionTop - 150 <= scroll && scroll < allBoxTop + 300){
      $(".contentsBox").show();
      $(".contentsBox").removeClass("hide");
    } else if(scroll = allBoxTop + 300){
      $(".contentsBox").addClass("hide");
    } else if(sectionTop - 150 > scroll && scroll > allBoxTop + 300){
      $(".contentsBox").hide();
      $(".contentsBox").removeClass("hide");
    }
  });
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var sectionTop = $(".imgSection").offset().top;
    const allBoxTop = $(".allBox").offset().top;

    if(sectionTop - 150 <= scroll && scroll < allBoxTop + 300){
      $(".contentsBox").show();
      $(".contentsBox").removeClass("hide");
    } else if(scroll = allBoxTop + 200){
      $(".contentsBox").addClass("hide");
    } else if(sectionTop - 150 > scroll && scroll > allBoxTop + 300){
      $(".contentsBox").hide();
      $(".contentsBox").removeClass("hide");
    }

    var scroll = $(window).scrollTop();
    let titleSec = $('.texBox .titBox a');
    let tilte = $('.texBox .titBox h3');
    let labelImg = $('.label img');
    let textCon = $('.txtBtn p')
    let textBtn = $('.txtBtn a')
    
    if(scroll > mainNewTop && scroll < bestBoxTop - 500){
      titleSec.text("NEW PRODUCTS");
      tilte.text("Wild Bluebell Decorated collection");
      labelImg.attr("src", "/jomalone/img/main_label_bluebell.jpg");
      textCon.text("숲 속 깊은 곳에서 빛나고 있는 사파이어. 이슬 맺힌 블루벨의 은은하고 달콤한 향기에 산골짜기 백합, 들장미, 달콤한 감향이 더해졌습니다. 최면을 걸 듯 마음을 사로잡는 향수입니다.");
      }
    else if(scroll > bestBoxTop -500 && scroll < allBoxTop -500){
      titleSec.text("BEST PRODUCTS");
      tilte.text("English Pear & Freesia Cologne");
      labelImg.attr("src", "/jomalone/img/main_label_pearFreesia.jpg");
      textCon.text("가을의 정수. 화이트 프리지아 부케향에 이제 막 익은 배의 신선함을 입히고 호박, 파출리, 우디향으로 은은함을 더했습니다.");
    }
    else if(scroll > allBoxTop -500 && scroll < otherBoxTop -500){
      titleSec.text("ALL PRODUCTS");
      tilte.text("Wood Sage & Sea Salt Cologne");
      labelImg.attr("src", "/jomalone/img/main_label_woodsage.jpg");
      textCon.text("바람부는 해안을 따라 걸으며 일상을 벗어나보세요. 하얗게 부서지는 파도, 소금기를 머금은 신선한 바다 공기. 험준한 절벽에서 느껴지는 투박한 자연의 향기와 세이지의 우디한 흙 내음이 어우러져 자유롭고 활기찬 에너지와 즐거움이 가득합니다.");
      textBtn.attr("href","/jomalone/pages/fragrance.php");
    }
  });

});


