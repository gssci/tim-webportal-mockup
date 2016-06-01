<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">    
    <?php include("includes/head.html");?>
</head>

<body>
    
    
<?php include("includes/navbar.html");?>
  
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
               <h1 style="font-size:1.3em;">Tim Smart Casa</h1>
          <p>Internet fino a 20 Mega e chiamate illimitate TIM Vision e Modem Wi-Fi inclusi</p>
          </div>
           
           <br />
          <button type="button" class="btn btn-primary btn-lg">Scopri</button>
          </center>
    </div>

      <div class="item center-cropped" style="background-image: url('images/homepage/carousel_2.jpg');">
         <center>
               <div class="sub_item">
               <h1 style="font-size:1.3em;">Internet Senza Limiti</h1>
          <p>ADSL illimitata e linea di casa - 20,90€ /mese per 24 mesi</p>
          </div>
           <br />
          <button type="button" class="btn btn-primary btn-lg">Scopri</button>
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
    
   <div class="container text-center" style="margin-top:0;">  
  <h3>What We Do</h3><br>
  <div class="row">
    <div class="col-sm-4">
      <img src="http://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
      <p>Current Project</p>
    </div>
    <div class="col-sm-4"> 
      <img src="http://placehold.it/150x80?text=IMAGE" class="img-responsive" style="width:100%" alt="Image">
      <p>Project 2</p>    
    </div>
    <div class="col-sm-4">
      <div class="well">
       <p>Some text..</p>
      </div>
      <div class="well">
       <p>Some text..</p>
      </div>
    </div>
  </div>
</div><br>


<?php include("includes/footer.html");?>
</body>

</html>