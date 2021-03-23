<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jo Malone</title>

  <!-- favicon link -->
  <link rel="icon" href="/jomalone/img/jomalone_favicon.ico">
  <link rel="apple-touch-icon" href="/jomalone/img/jomalone_favicon.ico">

  <!-- font awesome link -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- css link -->
  <link rel="stylesheet" href="/jomalone/css/reset.css">
  <link rel="stylesheet" href="/jomalone/css/style.css">
  <link rel="stylesheet" href="/jomalone/css/animation.css">
  <link rel="stylesheet" href="/jomalone/css/media.css">

  <!-- jqeury link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/jomalone/plugin/jssor.slider-28.1.0.min.js"></script>
  <script src="/jomalone/js/main_slide.js"></script>
  <script src="/jomalone/js/custom.js"></script>

</head>
<body>
  <div class="wrap">

  <?php
    include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/header.php"
  ?>

    <div class="center">
      <section class="mainSlide clear">
        <div class="slideBox">
          <div id="jssor_1">
            <!-- Loading Screen -->
            <div class="slides" data-u="slides">
              <div>
                <img src="/jomalone/img/main_slider_01.jpg" data-u="image">
              </div>
              <div>
                <img src="/jomalone/img/main_slider_02.jpg" data-u="image">
              </div>
              <div>
                <img src="/jomalone/img/main_slider_03.jpg" data-u="image">
              </div>
            </div>
            <!-- Bullet Navigator -->
            <div data-u="navigator" class="jssorb051" style="position:absolute;bottom:12px;right:12px;" data-autocenter="1" data-scale="0.5" data-scale-bottom="0.75">
              <div data-u="prototype" class="i" style="width:12px;height:12px;">
                  <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
                      <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                  </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="linkBox">
          <a href="#" class="newPro">NEW PRODUCTS</a>
          <a href="#" class="bestPro">BEST PRODUCTS</a>
          <a href="#" class="allPro">ALL PRODUCTS</a>
        </div>
        <div class="allow">
          <i class="fa fa-angle-down"></i>
          <i class="fa fa-angle-down"></i>
          <i class="fa fa-angle-down"></i>
        </div>
      </section>
      
      <section class="imgSection">
        <div class="contentsBox newCon">
          <div class="relBox">
            <div class="texBox">  
              <div class="titBox">
                <a href="#">NEW PRODUCTS</a><br>
                <h3>Wild Bluebell Decorated collection</h3>
              </div>
              <span class="bottle">
                <div class="label">
                  <img src="/jomalone/img/main_label_bluebell.jpg" alt="">
                </div>
                <div class="bottleImg clear">
                  <img src="/jomalone/img/main_bottle.png" alt="">
                </div>
              </span>
              <span class="txtBtn">
                <p>숲 속 깊은 곳에서 빛나고 있는 사파이어. 이슬 맺힌 블루벨의 은은하고 달콤한 향기에 산골짜기 백합, 들장미, 달콤한 감향이 더해졌습니다. 최면을 걸 듯 마음을 사로잡는 향수입니다.</p>
                <a href="#">자세히 보기</a>
              </span>
            </div>
          </div>
        </div>
        <div class="mainBox newBox">
          <div class="bgAttach mainNewBg clear"></div>
        </div>      
        <div class="mainBox bestBox">
          <div class="bgAttach mainBestBg clear"></div>
        </div>
        <div class="mainBox allBox">
          <div class="bgAttach mainAllBg clear"></div>
        </div>
      </section>
      <div class="boutique">
        <a href="#">AT YOUR SERVICE<p>온라인 부티크 혜택</p></a>
      </div>
      <section class="mainBox otherBox">
        <div class="bathBody">
          <div class="hover">
            <a href="#">BATH & BODY</a>
          </div>
          <img src="/jomalone/img/main_other_bathbody.jpg" alt="">
        </div>
        <div class="home">
          <div class="hover">
            <a href="#">HOME</a>
          </div>
        <img src="/jomalone/img/main_other_home.jpg" alt="">
        </div>
        <div class="gift">
          <div class="hover">
            <a href="#">GIFT</a>
          </div>
          <img src="/jomalone/img/main_other_gift.jpeg" alt="">
        </div>
        <div class="gents">
          <div class="hover">
            <a href="#">GENTS</a>
          </div>
          <img src="/jomalone/img/main_other_gents.jpg" alt="">
        </div>
      </section>
    </div>

  <?php
   include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/footer.php"
  ?>
  </div>
<script type="text/javascript">jssor_1_slider_init();</script>
</body>
</html>