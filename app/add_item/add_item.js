'use strict';

angular.module('myApp.add_item', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_item/:id', {
    templateUrl: 'add_item/add_item.html',
    controller: 'AddItemCtrl'
  });
    $routeProvider.when('/add_item', {
        templateUrl: 'add_item/add_item.html',
        controller: 'AddItemCtrl'
    });
}])

.controller('AddItemCtrl',
        ['$scope', '$location', 'DataFactory', '$routeParams', function($scope, $location,   dataFactory, routeParams){
        // ['$scope', 'DataFactory', '$routeParams', function($scope, dataFactory,$routeParams){
            $scope.status;
            $scope.realty_unit_temp={};
            $scope.add_item={};
            $scope.orders




            const
                city = {
                    id      : 15,
                    name    : 'city',
                    label   : 'city',
                },
                street = {
                    id      : 16,
                    name    : 'street',
                    label   : 'street',
                },
                address_district = {
                    id      : 17,
                    name    : 'address_district',
                    label   : 'address_district',
                },
                address_house = {
                    id      : 18,
                    name    : 'address_house',
                    label   : 'address_house',
                },
                address_flat = {
                    id      : 19,
                    name    : 'address_flat',
                    label   : 'address_flat',
                },
                address_guide = {
                    id      : 20,
                    name    : 'address_guide',
                    label   : 'address_guide',
                },
                floor_current = {
                    id      : 21,
                    name    : 'floor_current',
                    label   : 'floor_current',
                },
                rooms_quantity = {
                    id      : 22,
                    name    : 'rooms_quantity',
                    label   : 'rooms_quantity',
                },
                area_all = {
                    id      : 23,
                    name    : 'area_all',
                    label   : 'area_all',
                },
                area_rooms = {
                    id      : 24,
                    name    : 'area_rooms',
                    label   : 'area_rooms',
                },
                area_kitchen = {
                    id      : 25,
                    name    : 'area_kitchen',
                    label   : 'area_kitchen',
                },
                ceiling_height = {
                    id      : 26,
                    name    : 'ceiling_height',
                    label   : 'ceiling_height',
                },
                price = {
                    id      : 27,
                    name    : 'price',
                    label   : 'price',
                },
                min_price = {
                    id      : 28,
                    name    : 'min_price',
                    label   : 'min_price',
                };

            const
                house_type  = {
                    id      : 0,
                    name    : 'house_type',
                    label   : 'house_type',

                    data    : [
                        {
                            value :  'цегляний',
                            label :  'цегляний'
                        },
                        {
                            value :  'дерев`янний',
                            label :  'дерев`янний'
                        },
                        {
                            value :  'панельний',
                            label :  'панельний'
                        },
                    ]
                },

                rooms_type  = {
                    id      : 1,
                    name    : 'rooms_type',
                    label   : 'rooms_type',

                    data    : [
                        {
                            value :  1,
                            label :  'суміжні'
                        },
                        {
                            value :  2,
                            label :  'роздільні'
                        },
                        {
                            value :  3,
                            label :  'суміжно-роздільні'
                        },

                    ]
                },
                layout      = {
                    id      : 2,
                    name    : 'layout',
                    label   : 'layout',

                    data    : [
                        {
                            value :  1,
                            label :  'чешка'
                        },
                        {
                            value :  2,
                            label :  'київка'
                        },
                        {
                            value :  3,
                            label :  'старий фонд'
                        },
                        {
                            value :  4,
                            label :  'хрущовка'
                        },
                        {
                            value :  5,
                            label :  'сталінка'
                        },
                        {
                            value :  6,
                            label :  'новобудова'
                        },
                        {
                            value :  7,
                            label :  'в особняку'
                        },
                        {
                            value :  8,
                            label :  'спецпроект'
                        },
                        {
                            value :  9,
                            label :  'м/с'
                        },
                        {
                            value :  10,
                            label :  'гуртожиток'
                        },

                    ]
                },
                repair = {
                    id      : 3,
                    name    : 'repair',
                    label   : 'repair',

                    data    : [
                        {
                            value :  1,
                            label :  'не штукатурено'
                        },
                        {
                            value :  2,
                            label :  'від забудовника'
                        },
                        {
                            value :  3,
                            label :  'б/р не жилий стан'
                        },
                        {
                            value :  4,
                            label :  'хороший стан'
                        },
                        {
                            value :  5,
                            label :  'косметичний ремонт'
                        },
                        {
                            value :  6,
                            label :  'ремонт'
                        },
                        {
                            value :  7,
                            label :  'євроремонт'
                        },
                        {
                            value :  8,
                            label :  'дизайнерсткий ремонт'
                        },
                        {
                            value :  9,
                            label :  'частковий'
                        },
                        {
                            value :  10,
                            label :  'савдеп'
                        },

                    ]
                },
                convenience = {
                    id      : 4,
                    name    : 'convenience',
                    label   : 'convenience',

                    data    : [
                        {
                            value :  1,
                            label :  'всі'
                        },
                        {
                            value :  2,
                            label :  'туалет'
                        },
                        {
                            value :  3,
                            label :  'ванна'
                        },
                        {
                            value :  4,
                            label :  'газ'
                        },
                        {
                            value :  5,
                            label :  'світло'
                        },
                        {
                            value :  6,
                            label :  'вода'
                        },
                        {
                            value :  7,
                            label :  'каналізація'
                        },
                        {
                            value :  8,
                            label :  'душ'
                        },
                        {
                            value :  9,
                            label :  'джакузі'
                        },
                        {
                            value :  10,
                            label :  'душова кабіна'
                        },

                    ]
                },
                heating = {
                    id      : 5,
                    name    : 'heating',
                    label   : 'heating',

                    data    : [
                        {
                            value :  1,
                            label :  'без опалення'
                        },
                        {
                            value :  2,
                            label :  'пічне (наз/дрова)'
                        },
                        {
                            value :  3,
                            label :  'централізоване'
                        },
                        {
                            value :  4,
                            label :  'котел'
                        },
                        {
                            value :  5,
                            label :  'конвектор'
                        },
                        {
                            value :  6,
                            label :  'АГВ'
                        },
                        {
                            value :  7,
                            label :  'котельня на будинок'
                        },

                    ]
                },
                flooring = {
                    id      : 6,
                    name    : 'flooring',
                    label   : 'flooring',

                    data    : [
                        {
                            value :  1,
                            label :  'ломінат'
                        },
                        {
                            value :  2,
                            label :  'дерево'
                        },
                        {
                            value :  3,
                            label :  'стяжка'
                        },
                        {
                            value :  4,
                            label :  'паркет'
                        },
                        {
                            value :  5,
                            label :  'плитка'
                        },
                        {
                            value :  6,
                            label :  'лінолеум'
                        },

                    ]
                },
                walls = {
                    id      : 7,
                    name    : 'walls',
                    label   : 'walls',

                    data    : [
                        {
                            value :  1,
                            label :  'обої'
                        },
                        {
                            value :  2,
                            label :  'штукатурка'
                        },
                        {
                            value :  3,
                            label :  'не штукатурено'
                        },
                        {
                            value :  4,
                            label :  'побілка'
                        },
                        {
                            value :  5,
                            label :  'вагонка'
                        },

                    ]
                },
                ceiling = {
                    id      : 8,
                    name    : 'ceiling',
                    label   : 'ceiling',

                    data    : [
                        {
                            value :  1,
                            label :  'побілка'
                        },
                        {
                            value :  2,
                            label :  'не штукатурено'
                        },
                        {
                            value :  3,
                            label :  'гіпсокартон'
                        },
                        {
                            value :  4,
                            label :  'натяжні стелі'
                        },
                        {
                            value :  5,
                            label :  'вагонка'
                        },

                    ]
                },
                windows = {
                    id      : 9,
                    name    : 'windows',
                    label   : 'windows',

                    data    : [
                        {
                            value :  1,
                            label :  'металопластикові'
                        },
                        {
                            value :  2,
                            label :  'дерев`янні'
                        },
                        {
                            value :  3,
                            label :  'без вікон'
                        },

                    ]
                },
                plumbing = {
                    id      : 10,
                    name    : 'plumbing',
                    label   : 'plumbing',

                    data    : [
                        {
                            value :  1,
                            label :  'нова'
                        },
                        {
                            value :  2,
                            label :  'стара'
                        },
                        {
                            value :  3,
                            label :  'без сантехніки'
                        },

                    ]
                },
                bathroom = {
                    id      : 11,
                    name    : 'bathroom',
                    label   : 'bathroom',

                    data    : [
                        {
                            value :  1,
                            label :  'роздільний'
                        },
                        {
                            value :  2,
                            label :  'окремий'
                        },
                        {
                            value :  3,
                            label :  'суміщений'
                        },

                    ]
                },
                hot_water = {
                    id      : 12,
                    name    : 'hot_water',
                    label   : 'hot_water',

                    data    : [
                        {
                            value :  1,
                            label :  'бойлер'
                        },
                        {
                            value :  2,
                            label :  'котел'
                        },
                        {
                            value :  3,
                            label :  'газова колонка'
                        },
                        {
                            value :  4,
                            label :  'без гарячої води'
                        },
                    ]
                },
                sale = {
                    id      : 13,
                    name    : 'sale',
                    label   : 'sale',

                    data    : [
                        {
                            value :  1,
                            label :  'прямий'
                        },
                        {
                            value :  2,
                            label :  'не прямий'
                        },
                    ]
                },
                furniture = {
                    id      : 14,
                    name    : 'furniture',
                    label   : 'furniture',

                    data    : [
                        {
                            value :  1,
                            label :  'без меблів'
                        },
                        {
                            value :  2,
                            label :  'старі меблі'
                        },
                        {
                            value :  3,
                            label :  'нові меблі'
                        },

                    ]
                };

            $scope.enum = [
                house_type,
                rooms_type ,
                layout     ,
                repair ,
                convenience ,
                heating ,
                flooring ,
                walls ,
                ceiling ,
                windows,
                plumbing ,
                bathroom ,
                hot_water,
                sale ,
                furniture
            ];
            $scope.input = [
                city,
                street,
                address_district,
                address_house,
                address_flat,
                address_guide,
                floor_current ,
                rooms_quantity ,
                area_all ,
                area_rooms ,
                area_kitchen ,
                ceiling_height,
                price ,
                min_price
            ];




             $scope.getRealtyUnit = function(id) {

                // console.log(id);
                dataFactory.getRealtyUnit(id)
                    // .success(function (response) {
                    .then(function (response) {
                        $scope.realty_unit_temp = response.data;
                        if($scope.realty_unit_temp != false) {
                            $scope.add_item = $scope.realty_unit_temp;
                        }
//                    console.log(response);
//                    console.log('.data');
//                    console.log(response.data);
//                    console.log($scope.add_item);
                        // alert(response.data.realty);
                        $scope.status = 'Updated Customer! Refreshing customer list.';
                    }, function (error) {

                        $scope.status = 'Unable to update customer: ' + error.message;
                    });
            };
            $scope.add_item = { house_type:"", rooms_type :"", layout     :"", repair :"", convenience:"", heating :"",
                flooring :"", walls :"", ceiling :"", windows:"", plumbing :"", bathroom :"", hot_water:"", sale :"", furniture:"",
                city:"", street:"", address_district:"", address_house:"", address_flat:"", address_guide:"", floor_current :"",
                rooms_quantity :"", area_all :"", area_rooms :"", area_kitchen :"", ceiling_height:"", price :"", min_price:""
            };

            // console.log(routeParams.id);

            $scope.updateRealtyUnit = function (id) {
                var response = $scope.add_item;
                    // response.id = id;
                // for (var i = 0; i < $scope.realty.length; i++) {
                //     if ($scope.realty[i].id == id) {
                //         tempRealtyUnit = $scope.realty[i];
                //         break;
                //     }
                // }
                // tempRealtyUnit.street = 'Зелена';
                // console.log(response);
                dataFactory.updateRealtyUnit(response)
                    .then(function (response) {
                        // console.log(response);
                        // $location.path('#!/items');
                        $location.url('/items');
                        $scope.status = 'Updated Customer! Refreshing customer list.';

                    }, function (error) {
                        $scope.status = 'Unable to update customer: ' + error.message;
                    });
                // console.log($scope.status);

            };

            $scope.insertRealtyUnit = function () {
                var response = $scope.add_item;

                // console.log('realty_unit');
                // console.log(realty_unit);
                // var realty_unit = {
                //     address_flat:"2222",
                //     address_guide:"22",
                //     address_house:"12",
                //     area_all:"2221",
                //     area_kitchen:"112",
                //     area_rooms:"222",
                //     bathroom:"окремий",
                //     ceiling:"не штукатурено",
                //     ceiling_height:"213",
                //     city:"Запоріжжя",
                //     convenience:"туалет",
                //     floor_current:"2",
                //     flooring:"дерево",
                //     furniture:"без меблів",
                //     heating:"пічне (наз/дрова)",
                //     hot_water:"котел",
                //     house_type:"дерев`янний",
                //     layout: "київка",
                //     min_price :"121212.00",
                //     plumbing: "стара",
                //     price : "221212.00",
                //     repair: "не штукатурено",
                //     rooms_quantity:"2",
                //     rooms_type:"роздільні",
                //     sale:"прямий",
                //     street:"sdds",
                //     walls:"штукатурка",
                //     windows:"дерев`янні"
                // };



                dataFactory.insertRealtyUnit(response)
                    .then(function (response) {
                        $scope.status = 'Inserted Customer! Refreshing customer list.';
                        // $scope.realty.push(response);
                        $location.url('/items');

                    }, function(error) {
                        $scope.status = 'Unable to insert customer: ' + error.message;
                    });
            };

            $scope.getRealtyUnit(routeParams.id);

            $scope.addItem = function () {
              for (var field in $scope.add_item){
                  if($scope.add_item[field] === ""){
                       console.log(field);
                  }

              }
                console.log($scope.add_item);

              if(parseInt(routeParams.id) > 0){
                  // $scope.updateRealtyUnit(routeParams.id,$scope.add_item);
                  $scope.updateRealtyUnit(routeParams.id);

              }
              else{
                  $scope.insertRealtyUnit();

              }

            };

        }]);