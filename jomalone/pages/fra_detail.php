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

  <?php
    $num = $_GET['num'];

    include $_SERVER['DOCUMENT_ROOT'].'/jomalone/include/db_connect.php';
    $sql = "select* from jomalone_fragrance where jo_num = $num";
    
    $result_sql = mysqli_query($dbConn,$sql);
    $result_row=mysqli_fetch_array($result_sql);

    $name=$result_row['jo_name'];
    $imgName=$result_row['jo_img'];
    $bottle30=$result_row['jo_30ml'];
    $bottle50=$result_row['jo_50ml'];
    $desc=$result_row['jo_desc'];
    $topImg=$result_row['jo_top'];
    $topDesc=$result_row['jo_top_desc'];
    $heartImg=$result_row['jo_heart'];
    $heartDesc=$result_row['jo_heart_desc'];
    $baseImg=$result_row['jo_base'];
    $baseDesc=$result_row['jo_base_desc'];

    if(!$bottle50){
    ?>
      <style>
      .detailImgBox img.ml50{display:none;}
      .detailTxtBox .mlBtns button.ml50{display:none;}
      </style>
    <?php
    } if(!$bottle30){
    ?>
      <style>
      .detailImgBox img.ml30{display:none;}
      .detailTxtBox .mlBtns button.ml30{display:none;}
      </style>
    <?php
    }
    ?>
    <div class="center clear">
      <div class="topBar">
        <img src="/jomalone/img/products/<?=$imgName?>_bar.jpg" alt="<?=$imgName?>_pattern">
      </div>
      <a href="/jomalone/pages/fragrance.php" class="prevPage"><i class="fa fa-angle-double-left"></i></a>
      <section class = "detailSection">
      <div class="detailImgBox">
        <img src="/jomalone/img/products/<?=$imgName?>_100ml.png" alt="<?=$imgName?>_100ml_bottle" class="ml100">
        <img src="/jomalone/img/products/<?=$imgName?>_50ml.png" alt="<?=$imgName?>_50ml_bottle" class="ml50">
        <img src="/jomalone/img/products/<?=$imgName?>_30ml.png" alt="<?=$imgName?>_30ml_bottle" class="ml30">
      </div>
      <div class="detailTxtBox">
        <h4><?=$name?></h4>
        <p><?=$desc?></p>
        <div class="mlBtns">
          <button class="ml30">30ml</button>
          <button class="ml50">50ml</button>
          <button class="ml100">100ml</button>
        </div>
        <div class="noteBox">
          <div class="topNote note">
            <em>Top note</em>
            <div class="noteImg">
              <div class="noteName"><?=$topImg?></div>
              <img src="/jomalone/img/products/<?=$imgName?>_top.png" alt="<?=$imgName?>_topNote">
            </div>
            <div class="noteDesc"><?=$topDesc?></div>
          </div>
          <div class="heartNote note">
          <em>heart note</em>
            <div class="noteImg">
              <div class="noteName"><?=$heartImg?></div>
              <img src="/jomalone/img/products/<?=$imgName?>_heart.png" alt="<?=$imgName?>_heartNote">
            </div>
            <div class="noteDesc"><?=$heartDesc?></div>
          </div>
          <div class="baseNote note">
            <em>base note</em>
            <div class="noteImg">
              <div class="noteName"><?=$baseImg?></div>
              <img src="/jomalone/img/products/<?=$imgName?>_base.png" alt="<?=$imgName?>_baseNote">
            </div>
            <div class="noteDesc"><?=$baseDesc?></div>
          </div>
        </div>
      </div>
      </section>
      <div class="bottomBar">
        <img src="/jomalone/img/products/<?=$imgName?>_bar.jpg" alt="<?=$imgName?>_pattern">
      </div>
    </div>

  <?php
    include $_SERVER["DOCUMENT_ROOT"]."/jomalone/include/footer.php"
  ?>
  </div>
</body>
</html>