<?php 
  session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
    <link rel="stylesheet" href="includes/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Mandali&display=swap" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <title>View Meal Whats Inside</title>
</head>
<body>
<header>
    <a href="myUser.php"><div id="logo"></div></a>
</header>
    <div>
      <nav class="navbar">
      <a href="myUser.php" ><img src="https://i.imgur.com/wJpfoGk.png" class="homeHeight"></a>
        <div id="mySidenav" class="sidenav1">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;     
          </a>
          <!-- <a href="#"><img src="images/id.png"> <span>Hi Meir</span></a> -->
          <a href="#" id="personLink1"><img id="personImage1"> <span>
            <?php 
            echo $_SESSION["username"];
            ?>
          </span></a>
          <a href="#" class="category">Main Menu</a>
          <a href="index.html" ><img src="images/home.png"><span class="user">Home</span></a>
          <a href="add_product.html" class="add" ><img src="images/add.png"> Add Meal</a>
          <a href="#" class="review" ><img src="images/review.png"> Check Reviews</a>
          <a href="#" class="category">Account</a>
          <a href="index.html" ><img src="images/profile.png">Profile</span></a>
          <a href="add_product.html"><img src="images/switch.png">Switch Mode</a>
          <a href="#"><img src="images/logout.png"> Logout</a>
        </div>
        <span style="cursor:pointer" onclick="openNav()"><img class="hamburger" src="https://i.imgur.com/aOSdhZR.png"></span>
            <div class="row">
              <div class="search">
                  <input type="text" class="form-control input-sm" maxlength="64" placeholder="Search" />
                  <button type="submit" class="btn btn-primary btn-sm">Search</button>
              </div>
          </div>
          <div class="userid">
          <a href="#" id="personLink2">
              <img id="personImage2">
              <?php 
            echo $_SESSION["username"];
            ?> 
          </div>
      </nav>
      <section class="bread">
        <ul>
          <li><a href="myUser.php">Main Menu</a></li>
          <li>//  <a href="#" class="selected">Check My Reviews</a></li>
        </ul>
      </section>
      <nav class="sidenav">
        <ul>
          <li><a href="myUser.php" class="#" ><img src="images/mymenu.png" alt="" > My Menu</a> </li>
          <li><a href="#" class="add" ><img src="images/add.png" alt=""> Add Meal to List</a>  </li>
          <li><a href="#" class="selected" ><img src="images/review.png" alt=""> Check My Reviews</a></li>
        </ul>
      </nav>
<div id="wrapper">
  <main class= "view_main">
      <div class="fix">
        <div class="allDetails">
          <h1 class= "titleName"></h1>
          <img class= "imgName" src="">
        </div>
      </div>
    <div  class="containerView">
    </div>
  </main>
</div>
    <footer class="page-footer font-small blue">
            <div class="footer-copyright text-center py-3">© 2019 Copyright WhatsInside>>
              <a>Itay Gershman & Aviel Dagan</a>
            </div>
    </footer>    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="includes/check.js"></script>
</body>
</html>