//var app1 = angular.module('myApp',[])
app.factory('DataFactory', ['$http', function($http) {

    var urlBase = 'http://lab.free-lib.com/api/realty';
    var dataFactory = {};

    dataFactory.getRealty = function () {
        return $http.get(urlBase);
    };

    dataFactory.getRealtyByStreet = function (street) {
        return $http.get(urlBase + '/search/' + street);
    };

    dataFactory.getRealtyUnit = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertRealtyUnit = function (realty_unit) {
        return $http.post(urlBase, realty_unit);
    };

    dataFactory.updateRealtyUnit = function (realty_unit) {
        return $http.post(urlBase + '/' + realty_unit.id, realty_unit)
    };

    dataFactory.deleteRealtyUnit = function (id) {
        return $http.post(urlBase + '/delete/' + id);
    };

    return dataFactory;
}]);

