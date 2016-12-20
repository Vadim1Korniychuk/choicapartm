app.controller('PaginationController', ['$scope', 'DataFactory', 
                                        function($scope, dataFactory){
    $scope.currentPage = 0;
    $scope.itemsPerPage = 10;
    $scope.items = []
      
    $scope.paginationRealty = function() {
        dataFactory.getRealty().then(
        function (response) {
          $scope.items = response.data.realty;
        $scope.itemsPerPage = 10;
        });
    };
    
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
}]);