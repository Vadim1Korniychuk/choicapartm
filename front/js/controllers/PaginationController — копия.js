////app1.controller('PaginationController', function($scope){
//app1.filter('startFrom', function() {
//    return function(input, start) {
//      start = +start;
//      return input.slice(start);
//    };
//app1.controller('PaginationController',  ['$scope', 'dataFactory', 
//                                          function($scope, dataFactory){
//  $scope.currentPage = 0;
//  $scope.itemsPerPage = 5;
//  $scope.items = [];
//                                              
//  for(var i=0; i<30; i++){
//    $scope.items.push('Product ' + (i+1));
//  }
//  $scope.firstPage = function() {
//    return $scope.currentPage == 0;
//  };
//  $scope.lastPage = function() {
//    var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
//    return $scope.currentPage == lastPageNum;
//  };
//  $scope.numberOfPages = function(){
//    return Math.ceil($scope.items.length / $scope.itemsPerPage);
//  };
//  $scope.startingItem = function() {
//    return $scope.currentPage * $scope.itemsPerPage;
//  };
//  $scope.pageBack = function() {
//    $scope.currentPage = $scope.currentPage - 1;
//  };
//  $scope.pageForward = function() {
//    $scope.currentPage = $scope.currentPage + 1;
//  };
//}]);
    
  app1.filter('startFrom', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    };
    
  })
  .controller('PaginationController', function($scope) {
      $scope.currentPage = 0;
      $scope.itemsPerPage = 5;
      $scope.items = [];
      for (var i = 0; i < 30; i++) {
        $scope.items.push('Product ' + (i + 1));
        }
        $scope.firstPage = function() {
          return $scope.currentPage === 0;
        };
        $scope.lastPage = function() {
          var lastPageNum = Math.ceil($scope.items.length / $scope.itemsPerPage - 1);
          return $scope.currentPage == lastPageNum;
        };
        $scope.numberOfPages = function() {
          return Math.ceil($scope.items.length / $scope.itemsPerPage);
        };
        
        $scope.startingItem = function() {
          return $scope.currentPage * $scope.itemsPerPage;
        };
        $scope.pageBack = function() {
          $scope.currentPage = $scope.currentPage - 1;
        };
        $scope.pageForward = function() {
          $scope.currentPage = $scope.currentPage + 1;
        };
      });
//});