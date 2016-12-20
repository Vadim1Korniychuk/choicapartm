<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />

    <!--        <link rel="stylesheet" type="text/css" href="style.css" />-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>


    <link href="css/main.css" rel="stylesheet" />
    
    <link href="../slider_own_car/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="../slider_own_car/owl-carousel/owl.theme.css" rel="stylesheet">

</head>
<body ng-app="App" ng-controller="PaginationController">
    <div class="wrapper">

        <header style="margin: 0; padding: 0;">
            <nav id="navbar_header" class="navbar navbar-default">
                <div class="container">
                    <div class="col-sm-4">
                        <div id="logo">
                            <a href="#"><img src="images/logo.png" title="Your Store" alt="Your Store" class="img-responsive"></a>
                        </div>
                    </div>
                    <div id="top-links" class="nav pull-right">
                        <ul class="list-inline">
        <!--                    <li><a href="##"><span class="glyphicon glyphicon-phone"></span>123456789</a></li>-->
                            <li><a href="##">Привіт, Ім'я</a></li>
                            <li><a href="#">Вийти</a></li>
                          </ul>
                    </div>
                </div>
            </nav>
        </header>

        <menu style="margin: 0; padding: 0;">
            <nav class="navbar navbar-inverse" role="navigation">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">&emsp;&emsp;Головна&emsp;&emsp;</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="view/view_items.html">&emsp;Перегляд об'єктів&emsp;</a></li>
                            <li><a href="#">&emsp;Додати об'єкт&emsp;</a></li>
                            <li><a href="#">&emsp;Контактна інформація&emsp;</a></li>

                        </ul>

        <!--                <ul class="nav navbar-nav navbar-right">-->
                            <form class="navbar-form navbar-right" role="search">

                                <a href="#"><button type="submit" class="btn btn-default">&emsp;&emsp;Знайти за фільтрами&emsp;&emsp;</button></a>
                            </form>

        <!--                </ul>-->
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid -->
            </nav>
        </menu>
    

    
<!--
<div ng-controller="PaginationController">
  <div id="content">
    <ul class="list-group">
      <li class="list-group-item" ng-repeat="item in items | startFrom: startingItem() | limitTo: itemsPerPage">{{ item }}</li>
    </ul>
    <div id="pagination" class="row">
      <button class="pull-left btn btn-primary btn-sm" ng-disabled="firstPage()" ng-click="pageBack()">Назад</button>
      <span>{{currentPage+1}} из {{numberOfPages()}}</span>
      <button class="pull-right  btn btn-primary btn-sm" ng-disabled="lastPage()" ng-click="pageForward()">Вперед</button>
    </div>
  </div>
</div>
-->
          

<!--        <div class="main">-->
           
          <div id="owl-demo" class="owl-carousel owl-theme">

              <div class="item"><img src="images/realty1.jpg" alt="The Last of us"></div>
              <div class="item"><img src="images/realty2.jpg" alt="GTA V"></div>
              <div class="item"><img src="images/realty3.jpg" alt="GTA V"></div>

            </div>
<!--        </div>-->
    </div>
    <style>
        .main{
            margin: 100px;
        }
    </style>

      <script src="../slider_own_car/owl-carousel/owl.carousel.js"></script>

    <script>
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({

            navigation : true, // Show next and prev buttons
            singleItem:true,
            slideSpeed : 200,
            paginationSpeed : 700,
            rewindSpeed : 700,

            //Авто-прокрутка
            autoPlay : true,
            stopOnHover : true,

            // Навигация
            navigation : false,
            rewindNav : true,
            scrollPerPage : false,
            pagination : false,

      });
    });
    </script>
    
    
    <footer>
        <div class="navbar navbar-default">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
<!--                        <div class="panel panel-inverse">-->
                        <h4>Контактна інформація</h4>
<!--                            <div class="panel-body">-->
<!--                                <div class="row">-->
                                <div class="col-sm-3"><strong>Your Store</strong><br>
                                    <address>
                                        Address 1 </address>
                                </div>
                                <div class="col-sm-3"><strong>Telephone</strong><br>
                                    123456789<br>
                                    <br>
                                </div>
                                <div class="col-sm-3">
                                </div>
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                </div>
            </div>
            <hr>
            <p>Розроблено <a href="#mail">Вадимом Корнійчуком</a><br>Realty  &copy; 2016</p>
        </div>
        </div>
    </footer>
    <!-- Modules --><!-- Modules -->

    <script src="js/app.js"></script>
    <script src="js/factory.js"></script>
    <script src="js/filters.js"></script>
    <script src="js/controllers/main.js"></script>
    <script src="js/controllers/pagination.js"></script>


    <script>
    //    (function() {
        function addScript(src){
            var script = document.createElement('script');
            script.src = src;
            script.async = false; // чтобы гарантировать порядок
            document.body.appendChild(script);
        }
    //    })();
    </script>

    <script>

    //        addScript('js/controllers/MainController.js');
    //        addScript('http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js');
        //    addScript('http://localhost/test2/DatingProCORE_Genie.start_8136329/application/js/video.js');
    </script>


    <script>
    //    getRealty();
    </script>

    <!--//{% helper im.imMobileBlock() %}-->
    <!--//{% helper shoutbox.shoutboxMobileBlock() %}-->
    <!--//{% helper cookie_policy.cookie_policy_block() %}-->


    <script>
        $(function(){  
//            $('body').css({'background-color':'#222'});
        });
    </script>
    
     
</body>
</html>
