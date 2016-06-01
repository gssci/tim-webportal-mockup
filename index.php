<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    
<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
</head>

<body>
<? php
include("includes/navbar.html");
?>
    
    <div id="Promotions_Home" class="carousel slide" data-ride="carousel">
        
  <!-- Indicators MOMENTANEAMENTE NON LI METTIAMO PERCHE' FANNO SCHIFO 
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol> -->

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
      
    
      <div class="item active center-cropped" style="background-image: url('images/homepage/carousel_1.jpg');">
          <center>
               <div class="sub_item">
               <h1 style="font-size:1.5em;">Tim Smart Casa</h1>
          <p>Internet fino a 20 Mega e chiamate illimitate TIM Vision e Modem Wi-Fi inclusi</p>
          <button type="button" class="btn btn-primary btn-lg">Scopri</button>
          </div>
           
          </center>
    </div>

      <div class="item center-cropped" style="background-image: url('images/homepage/carousel_2.jpg');">
         <center>
               <div class="sub_item">
               <h1 style="font-size:1.5em;">Internet Senza Limiti</h1>
          <p>ADSL illimitata e linea di casa - 20,90€ /mese per 24 mesi</p>
          <button type="button" class="btn btn-primary btn-lg">Scopri</button>
          </div>
           
          </center>
    </div>
      
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#Promotions_Home" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
        
  <a class="right carousel-control" href="#Promotions_Home" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        
</div>

<?php include("includes/footer.html");?>
</body>

</html>