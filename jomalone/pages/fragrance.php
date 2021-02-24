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
  <link rel="stylesheet" href="/jomalone/plugin/loopslider.css">
  <link rel="stylesheet" href="/jomalone/css/media.css">
  <link rel="stylesheet" href="/jomalone/css/fragrance.css">


  <!-- jqeury link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="/jomalone/js/fragrance.js"></script> 
  <script src="/jomalone/plugin/jquery.loopslider.js"></script> 

</head>
<body>
  <div class="wrap">

<?php
include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/header.php"
?>

  <div class="center">
    <section class="scentsSlideBox clear">
      <div class="slider-container">
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Citrus</h4>
            <hr>
            <p>밝고 에너지 넘치는 생기 발랄한 향</p>
          </div>
          <img src="/jomalone/img/scents_citrus.jpeg" alt="fruity">
        </div>
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Fruity</h4>
            <hr>
            <p>순식간에 퍼져나가는 달콤하고<br>감미로운 매력의 과일 향</p>
          </div>
          <img src="/jomalone/img/scents_fruity.jpeg" alt="citrus">
        </div>
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Light Floral</h4>
            <hr>
            <p>현대적으로 재해석한 섬세하고,<br>투명하며 정교한 플로랄 향</p>
          </div>
          <img src="/jomalone/img/scents_light_floral.jpeg" alt="light_floral">
        </div>
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Floral</h4>
            <hr>
            <p>꽃이 풍성하게 만개한 듯 강렬하고 이국적인 향</p>
          </div>
          <img src="/jomalone/img/scents_floral.jpeg" alt="floral">
        </div>
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Spicy</h4>
            <hr>
            <p>따뜻하고 정열적이며 강렬한 매력의 향</p>
          </div>
          <img src="/jomalone/img/scents_spicy.jpeg" alt="spicy">
        </div>
        <div class="scenSlides">
          <div class="scentxtBox">
            <h4>Woody</h4>
            <hr>
            <p>아로마틱하고 흙내음 가득한,<br>유행을 타지 않는 자연의 향</p>
          </div>
          <img src="/jomalone/img/scents_woody.jpeg" alt="woody">
        </div>
      </div>
      <!-- Next/prev buttons -->
      <div class="slideBtns">
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
      </div>

      <!-- Dots/bullets/indicators -->
      <div class="dot-container">
      </div>
    </section>
    <section class = "productSection">
      <div class="productFilter">
        <div class="button-group" data-filter-group="scents">
          <button data-filter="*">All
            <div class="filterBg">
              <img src="/jomalone/img/filter_all.png" alt="scents">
            </div>
          </button>
          <button data-filter=".citrus">Citrus
            <div class="filterBg">
              <img src="/jomalone/img/filter_citrus.png" alt="citrus">
            </div>
          </button>
          <button data-filter=".fruity">Fruity
            <div class="filterBg">
              <img src="/jomalone/img/filter_fruity.png" alt="fruity">
            </div>
          </button>
          <button data-filter=".lightFloral">Light Floral
            <div class="filterBg">
              <img src="/jomalone/img/filter_light_floral.png" alt="light_floral">
            </div>
          </button>
          <button data-filter=".floral">Floral
            <div class="filterBg">
              <img src="/jomalone/img/filter_floral.png" alt="floral">
            </div>
          </button>
          <button data-filter=".spicy">Spicy
            <div class="filterBg">
              <img src="/jomalone/img/filter_spicy.png" alt="spicy">
            </div>
          </button>
          <button data-filter=".woody">Woody
            <div class="filterBg">
              <img src="/jomalone/img/filter_woody.png" alt="woody">
            </div>
          </button>
        </div>
      </div>
      <div class="productBoxes">
        <div class="productBox" data-filter=".woody">
          <span class="hoverBox">
            <h3>Wood Sage & Sea Salt</h3>
          </span>
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
        <div class="productBox" data-filter=".woody">
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
        <div class="productBox" data-filter=".woody">
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
        <div class="productBox" data-filter=".woody">
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
        <div class="productBox" data-filter=".woody">
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
        <div class="productBox" data-filter=".woody">
          <img src="/jomalone/img/prod_scent_wsss.jpg" alt="">
        </div>
      </div>
    </section>
  </div>

  <?php
  include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/footer.php"
  ?>

</div>
</body>
</html>