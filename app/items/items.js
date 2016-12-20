'use strict';

angular.module('myApp.items', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items', {
    templateUrl: 'items/items.html',
    controller: 'ItemsCtrl'
  });
}])

// .controller('View1Ctrl', ['$scope', 'DataFactory', function($scope, dataFactory){

    .controller('ItemsCtrl',
            ['$scope', 'DataFactory', function($scope, dataFactory){
                $scope.title = 'Top Sellers in LoL';
                $scope.status;
                // $scope.realty = $scope.getAll;
                $scope.realty;
                $scope.realty_unit_temp;
                $scope.realty_by_street_temp
                $scope.orders;






                $scope.showAllDataOfRealtyUnit = function (id) {

                    $scope.realty_unit_temp = $scope.getRealtyUnit(id);
//            console.log(id);
//            console.log($scope.realty_unit_temp);
//                        console.log(id);

                    event.preventDefault(); // выключaем стaндaртную рoль элементa
                    $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                        function(){ // пoсле выпoлнения предъидущей aнимaции
                            $('#modal_form')
                                .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                                .animate({opacity: 1, top: '50%'}, 200);
//                                .$('#modal_content').animate({opacity: 1}, 200);
                            $('#modal_content')
                            //                                .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                                .css('opacity', '1') ;// убирaем у мoдaльнoгo oкнa display: none;
//                                .animate({opacity: 1}, 200);

                            // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        });
                };

                $scope.closeAllDataOfRealtyUnit  = function (id) {
                    $('#modal_form').animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                        function(){ // пoсле aнимaции
                            $(this).css('display', 'none'); // делaем ему display: none;
                            $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                        }
                    );
                };
                $scope.getRealty = function() {

                  dataFactory.getRealty()
                        .then(function (response) {
                            console.log('response');
                            // console.log(response.data.realty);
                            // alert(response.data.realty);
                            $scope.realty = response.data.realty;
                    console.log($scope.realty );

                        }, function (error) {
                            $scope.status = 'Unable to load customer data: ' + error.message;
                        });
                }

                $scope.getRealtyByStreet = function (id) {
                    // console.log(id);
                    dataFactory.getRealtyByStreet(id)
                        .then(function (response) {
                            $scope.realty_unit_temp = response.data.realty;
//                    console.log(response.data.realty);
                            // alert(response.data.realty);
                            $scope.status = 'Updated Customer! Refreshing customer list.';
                        }, function (error) {
                            $scope.status = 'Unable to update customer: ' + error.message;
                        });
                };

                $scope.getRealtyUnit = function (id) {
                    // console.log(id);
                    dataFactory.getRealtyUnit(id)
                        .then(function (response) {
                            $scope.realty_unit_temp = response.data;
//                    console.log(response);
//                    console.log(response.data);
                            // alert(response.data.realty);
                            $scope.status = 'Updated Customer! Refreshing customer list.';
                        }, function (error) {
                            $scope.status = 'Unable to update customer: ' + error.message;
                        });
                };


                $scope.updateRealtyUnit = function (id) {
                    var tempRealtyUnit;
                    for (var i = 0; i < $scope.realty.length; i++) {
                        if ($scope.realty[i].id == id) {
                            tempRealtyUnit = $scope.realty[i];
                            break;
                        }
                    }
                    tempRealtyUnit.street = 'Зелена';
                    console.log(tempRealtyUnit);
                    dataFactory.updateRealtyUnit(tempRealtyUnit)
                        .then(function (response) {
                            $scope.status = 'Updated Customer! Refreshing customer list.';
                        }, function (error) {
                            $scope.status = 'Unable to update customer: ' + error.message;
                        });
                };

                $scope.insertRealtyUnit = function () {

                    var realty_unit = {
                        address_flat:"2222",
                        address_guide:"22",
                        address_house:"12",
                        area_all:"2221",
                        area_kitchen:"112",
                        area_rooms:"222",
                        bathroom:"окремий",
                        ceiling:"не штукатурено",
                        ceiling_height:"213",
                        city:"Запоріжжя",
                        convenience:"туалет",
                        floor_current:"2",
                        flooring:"дерево",
                        furniture:"без меблів",
                        heating:"пічне (наз/дрова)",
                        hot_water:"котел",
                        house_type:"дерев`янний",
                        layout: "київка",
                        min_price :"121212.00",
                        plumbing: "стара",
                        price : "221212.00",
                        repair: "не штукатурено",
                        rooms_quantity:"2",
                        rooms_type:"роздільні",
                        sale:"прямий",
                        street:"sdds",
                        walls:"штукатурка",
                        windows:"дерев`янні"
                    };



                    dataFactory.insertRealtyUnit(realty_unit)
                        .then(function (response) {
                            $scope.status = 'Inserted Customer! Refreshing customer list.';
                            $scope.realty.push(realty_unit);
                        }, function(error) {
                            $scope.status = 'Unable to insert customer: ' + error.message;
                        });
                };

                $scope.deleteRealtyUnit = function (id, id_in_realty) {
//            console.log(id);
//            console.log(id_in_realty);
                    dataFactory.deleteRealtyUnit(id)
                        .then(function (response) {
                            $scope.status = 'Deleted Customer! Refreshing customer list.';
                            alert($scope.status);
                            $scope.realty.splice(id_in_realty, 1);
//                    $scope.realty.delete(id_in_realty, 1);


//                    for (var i = 0; i < $scope.realty.length; i++) {
//                        var cust = $scope.realty[i];
//                        if (cust.ID === id) {
//                            $scope.realty.splice(i, 1);
//                            break;
//                        }
//                    }
                            $scope.orders = null;
                        }, function (error) {
                            $scope.status = 'Unable to delete customer: ' + error.message;
                        });
                };

//         $scope.getAll =
//             alert('getall');
//             $.ajax({
//                 url: 'http://lab.free-lib.com/api/realty',
//                 // url: 'http://lab.free-lib.com/api/realty/search/Зелена',
//                 dataType: "json",
//                 type: "GET",
//                 success: function (json) {
//                     var result = json.realty;
//                     $scope.realty = result;
//                     // return result;
//                     // alert(result[1]);
// //                    alert(result[1]['id']);
//                 }
//             });



            }
            ]);