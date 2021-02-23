$(function(){

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

  // main slider
  $(".slideImg").bgSlideShow();


  

  const mainNewTop = $(".newBox").offset().top;
  const bestBoxTop = $(".bestBox").offset().top;
  const allBoxTop = $(".allBox").offset().top;
  const otherBoxTop = $(".otherBox").offset().top;
  const winWidth = $(window).width();

  // console.log(winWidth);
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
    $(".texBox").css({"height":txtBoxWid});
  });
  const txtwinWidth = $(window).width();
  const txtBoxWid = txtwinWidth * 0.25;
  $(".texBox").css({"height":txtBoxWid});


  // contents fixed when scroll
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var sectionTop = $(".imgSection").offset().top;

    if(sectionTop - 150 <= scroll && scroll < allBoxTop + 300){
      $(".contentsBox").show();
      $(".contentsBox").removeClass("hide");
    } else if(scroll = allBoxTop + 300){
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

    if(scroll > mainNewTop && scroll < bestBoxTop - 500){
      titleSec.text("NEW PRODUCTS");
      tilte.text("WILD BLUEBELL DECORATED COLLECTION");
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
    }
    
  });

  // function scrollFixed(){
  //   $(window).scroll(function(){
  //     let gnbW = $(".miniGnb").outerWidth();
  //     let contentBoxW = $(".contentsBox").outerWidth();
  //     let windowW = $(window).width();
  //     var scroll = $(window).scrollTop();
      

  //     if(windowW < 800 && allBoxTop <= scroll){
  //       $('.contentsBox').removeClass('fixed');
  //     } else {
  //       if(scroll > mainNewTop + winWidth * 0.01 && scroll < allBoxTop + winWidth * 0.02){
  //         $('.contentsBox').addClass('fixed');
  //       }else{
  //         $('.contentsBox').removeClass('fixed');
  //       }
  //     }
  // });
  // }
  // scrollFixed()

  // $(window).resize(function(){
  //   scrollFixed();
  // });
  // scrollFixed();

  // if(scroll > mainNewTop + winWidth * 0.01 && scroll < otherBoxTop - winWidth * 1.05){
  // if (width_size <= 800) {
  //   alert('현재 브라우저 크기가 <= 800px');

  // $(window).resize(function(){
  //   const winWidth = $(window).width();
  //   if(winWidth >= 1200){
  //     $(window).scroll(function(){
  //       var scroll = $(window).scrollTop();
  //       if(scroll > mainNewTop + winWidth * 0.01 && scroll < otherBoxTop - winWidth * 0.8){
  //         $('.contentsBox').addClass('fixed');
  //       }else{
  //         $('.contentsBox').removeClass('fixed');
  //       }
  //   });
  //   }
  //   if(winWidth < 1200){
  //     $(window).scroll(function(){
  //       var scroll = $(window).scrollTop();
  //       if(scroll > mainNewTop + winWidth * 0.01 && scroll < otherBoxTop - winWidth * 2){
  //         $('.contentsBox').addClass('fixed');
  //       }else{
  //         $('.contentsBox').removeClass('fixed');
  //       }
  //   });
  //   }
  // });


  // $(window).scroll(function(){
  //   var scroll = $(window).scrollTop();

  //   if(scroll > mainNewTop + 80){
  //     $('.newCon').show();
  //     $('.bestCon').hide();
  //     $('.allCon  ').hide();
  //   }
  //   if(scroll > bestBoxTop - 550){
  //     $('.newCon').hide();
  //     $('.bestCon').show();
  //     $('.allCon').hide();
  //   }
  //   if(scroll > allBoxTop - 500){
  //     $('.newCon').hide();
  //     $('.bestCon').hide();
  //     $('.allCon').show();
  //   }
  //   if(scroll > allBoxTop + 200){
  //   $('.allCon').css({"display":"inline"});
  //   }
  // });

});
