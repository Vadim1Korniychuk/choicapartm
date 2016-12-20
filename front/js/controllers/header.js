header.controller('HeaderController',
    ['$scope', function($scope){
        $scope.header = "<!DOCTYPE html>
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

    </head>
    <body ng-app="myApp">
        <header style="margin: 0; padding: 0;">
            <nav class="navbar navbar-default">
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
                            <li class="active"><a href="#">&emsp;Перегляд об'єктів&emsp;</a></li>
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
        </menu>";
       
    }
    ]);