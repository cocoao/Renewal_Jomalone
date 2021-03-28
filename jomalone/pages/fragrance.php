<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jo Malone</title>

  <!-- favicon link -->
  <link rel="icon" href="/jomalone/img/jomalone_favicon.png">
  <link rel="apple-touch-icon" href="/jomalone/img/jomalone_favicon.png">

  <!-- font awesome link -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- css link -->
  <link rel="stylesheet" href="/jomalone/css/reset.css">
  <link rel="stylesheet" href="/jomalone/css/style.css">
  <link rel="stylesheet" href="/jomalone/css/animation.css">
  <link rel="stylesheet" href="/jomalone/css/fragrance.css">
  <link rel="stylesheet" href="/jomalone/css/media.css">

  <!-- jqeury link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="/jomalone/js/fragrance.js"></script> 
  <script defer src="/jomalone/js/frag_slide.js"></script> 
  <script src="/jomalone/plugin/isotope.pkgd.min.js"></script>
</head>
<body>
  <div class="wrap">
  <?php
    include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/header.php"
  ?>
    <div class="center clear">
      <section class="scentsSlideBox clear">
        <div id="loop-slider" data-autoplay="true" data-speed="4000">
          <ul id="img-group">
            <li class="slide" data-img="/jomalone/img/scents_citrus.jpeg">
              <div class="scentxtBox">
                <h4>Citrus</h4>
                <hr class="on">
                <p>밝고 에너지 넘치는 생기 발랄한 향</p>
              </div>
            </li>
            <li class="slide" data-img="/jomalone/img/scents_fruity.jpeg">
              <div class="scentxtBox">
                <h4>Fruity</h4>
                <hr>
                <p>순식간에 퍼져나가는 달콤하고<br>감미로운 매력의 과일 향</p>
              </div>
            </li>
            <li class="slide" data-img="/jomalone/img/scents_light_floral.jpeg">
              <div class="scentxtBox">
                <h4>Light Floral</h4>
                <hr>
                <p>현대적으로 재해석한 섬세하고,<br>투명하며 정교한 플로랄 향</p>
              </div>
            </li>
            <li class="slide" data-img="/jomalone/img/scents_floral.jpeg">
              <div class="scentxtBox">
                <h4>Floral</h4>
                <hr>
                <p>꽃이 풍성하게 만개한 듯<br>강렬하고 이국적인 향</p>
              </div>
            </li>
            <li class="slide" data-img="/jomalone/img/scents_spicy.jpeg">
              <div class="scentxtBox">
                <h4>Spicy</h4>
                <hr>
                <p>따뜻하고 정열적이며 강렬한 매력의 향</p>
              </div>
            </li>
            <li class="slide" data-img="/jomalone/img/scents_woody.jpeg">
              <div class="scentxtBox">
                <h4>Woody</h4>
                <hr>
                <p>아로마틱하고 흙내음 가득한,<br>유행을 타지 않는 자연의 향</p>
              </div>
            </li>
          </ul>
        </div><!-- end of loop-slider -->

        <!-- Next/prev buttons -->
        <div class="slideBtns">
          <a class="prev">&#10094;</a>
          <a class="next">&#10095;</a>
        </div>
      </section>

      <section class = "productSection">
        <div class="productFilter">
          <div class="button-group">
            <button data-filter="*" class="all">All
              <div class="filterBg">
                <img src="/jomalone/img/filter_all.png" alt="scents">
              </div>
            </button>
            <button data-filter=".citrus" class="citrus">Citrus
              <div class="filterBg">
                <img src="/jomalone/img/filter_citrus.png" alt="citrus">
              </div>
            </button>
            <button data-filter=".fruity" class="fruity">Fruity
              <div class="filterBg">
                <img src="/jomalone/img/filter_fruity.png" alt="fruity">
              </div>
            </button>
            <button data-filter=".lightFloral" class="lightFloral">Light Floral
              <div class="filterBg">
                <img src="/jomalone/img/filter_light_floral.png" alt="light_floral">
              </div>
            </button>
            <button data-filter=".floral" class="floral">Floral
              <div class="filterBg">
                <img src="/jomalone/img/filter_floral.png" alt="floral">
              </div>
            </button>
            <button data-filter=".spicy" class="spicy">Spicy
              <div class="filterBg">
                <img src="/jomalone/img/filter_spicy.png" alt="spicy">
              </div>
            </button>
            <button data-filter=".woody" class="woody">Woody
              <div class="filterBg">
                <img src="/jomalone/img/filter_woody.png" alt="woody">
              </div>
            </button>
          </div>
        </div><!-- end of filter -->
        <div class="productBoxes clear">
        <?php
          include $_SERVER['DOCUMENT_ROOT'].'/jomalone/include/db_connect.php';
          $sql = 'select* from jomalone_fragrance order by jo_num';
          
          $result_sql = mysqli_query($dbConn,$sql);
          while($result_row=mysqli_fetch_array($result_sql)){
            $num=$result_row['jo_num'];
            $name=$result_row['jo_name'];
            $type=$result_row['jo_type'];
            $imgName=$result_row['jo_img'];
        ?>
          <div class="productBox <?=$type?>">
            <span class="hoverBox" onclick="javacsript:location.href='/jomalone/pages/fra_detail.php?num=<?=$num?>'">
              <h3><?=$name?></h3>
            </span>
            <img src="/jomalone/img/products/prod_scent_<?=$imgName?>.jpg" alt="<?=$imgName?>">
          </div><!--  -->
          <?php
          }
          ?>
        </div><!-- end of products -->
      </section>
    </div>

  <?php
    include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/footer.php"
  ?>
  </div>
</body>
</html>