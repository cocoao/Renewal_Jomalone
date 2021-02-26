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
  <link rel="stylesheet" href="/jomalone/css/fragrance.css">
  <link rel="stylesheet" href="/jomalone/css/media.css">


  <!-- jqeury link -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script defer src="/jomalone/js/fragrance.js"></script> 
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
      </div>

      <!-- Next/prev buttons -->
      <div class="slideBtns">
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
      </div>

    </section>
    <section class = "productSection">
      <div class="productFilter">
        <div class="button-group">
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

        <div class="productBox woody">
          <span class="hoverBox">
            <h3>154</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_154.jpg" alt="154">
        </div><!--  -->
        <div class="productBox citrus">
          <span class="hoverBox">
            <h3>Grapefruit</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_gf.jpg" alt="Grapefruit">
        </div><!--  -->
        <div class="productBox fruity">
          <span class="hoverBox">
            <h3>Nectarine Blossom & Honey</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_nbh.jpg" alt="Nectarine Blossom & Honey">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Dark Amber & Ginger Lily</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_dagl.jpg" alt="Dark Amber & Ginger Lily">
        </div><!--  -->
        <div class="productBox citrus">
          <span class="hoverBox">
            <h3>Lime Basil & Mandarin</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_lbm.jpg" alt="Lime Basil & Mandarin">
        </div><!--  -->
        <div class="productBox lightFloral">
          <span class="hoverBox">
            <h3>Red Roses</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_rr.jpg" alt="Red Roses">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Myrrh & Tonka</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_mt.jpg" alt="Myrrh & Tonka">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Mimosa & Cardamom</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_mc.jpg" alt="Mimosa & Cardamom">
        </div><!--  -->
        <div class="productBox citrus">
          <span class="hoverBox">
            <h3>Basil & Neroli</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_wsss.jpg" alt="Basil & Neroli">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Vetiver & Golden Vanilla</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_vgv.jpg" alt="Vetiver & Golden Vanilla">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Velvet Rose & Oud</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_vro.jpg" alt="Velvet Rose & Oud">
        </div><!--  -->
        <div class="productBox fruity">
          <span class="hoverBox">
            <h3>Blackberry & Bay</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_bb.jpg" alt="Blackberry & Bay">
        </div><!--  -->
        <div class="productBox spicy">
          <span class="hoverBox">
            <h3>Amber & Lavender</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_al.jpg" alt="Amber & Lavender">
        </div><!--  -->
        <div class="productBox citrus">
          <span class="hoverBox">
            <h3>Earlgrey & Cucumber</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_egc.jpg" alt="Earlgrey & Cucumber">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Oud & Bergamot</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_oub.jpg" alt="Oud & Bergamot">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Orange Blossom</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_ob.jpg" alt="Orange Blossom">
        </div><!--  -->
        <div class="productBox lightFloral">
          <span class="hoverBox">
            <h3>Wild Bluebell</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_wb.jpg" alt="Wild Bluebell">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Wood Sage & Sea Salt</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_wsss.jpg" alt="Wood Sage & Sea Salt">
        </div><!--  -->
        <div class="productBox spicy">
          <span class="hoverBox">
            <h3>English Oak & Hazelnut</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_eoh.jpg" alt="English Oak & Hazelnut">
        </div><!--  -->
        <div class="productBox fruity">
          <span class="hoverBox">
            <h3>English Pear & Freesia</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_epf.jpg" alt="English Pear & Freesia">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Tuberose Angelica</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_ta.jpg" alt="Tuberose Angelica">
        </div><!--  -->
        <div class="productBox woody">
          <span class="hoverBox">
            <h3>Pomegranate Noir</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_pn.jpg" alt="Pomegranate Noir">
        </div><!--  -->
        <div class="productBox lightFloral">
          <span class="hoverBox">
            <h3>Poppy & Barley</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_pb.jpg" alt="Poppy & Barley">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Peony & Blushsuede</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_pbs.jpg" alt="Peony & Blushsuede">
        </div><!--  -->
        <div class="productBox floral">
          <span class="hoverBox">
            <h3>Honeysuckle & Davana</h3>
          </span>
          <img src="/jomalone/img/products/prod_scent_hsd.jpg" alt="Honeysuckle & Davana">
        </div><!--  -->
      </div>
    </section>
  </div>

  <?php
  include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/footer.php"
  ?>

</div>
</body>
</html>