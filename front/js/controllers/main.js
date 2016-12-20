+// app.controller('MainController',
//     ['$scope', function($scope){
//         $scope.title = 'Top Sellers in LoL';
//         // $scope.realty = $scope.getAll;
//         $scope.realty = [];
//         $scope.getAll =
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
//
//
//         $scope.plusOne = function(index) {
//             $scope.products[index].likes += 1;
//         };
//         $scope.minusOne = function(index) {
//             $scope.products[index].dislikes += 1;
//         };
//     }
//     ]);

app.controller('MainController',
    ['$scope', 'DataFactory', function($scope, dataFactory){
        $scope.title = 'Top Sellers in LoL';
        $scope.status;
        // $scope.realty = $scope.getAll;
        $scope.realty;
        $scope.realty_unit_temp;
        $scope.realty_by_street_temp
        $scope.orders;
        
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
  
//  `city` char(100) DEFAULT NULL,
//  `street` char(100) DEFAULT NULL,
//  `address_district` char(64) DEFAULT NULL,
//  `address_house` int(10) unsigned DEFAULT NULL,
//  `address_flat` int(10) unsigned DEFAULT NULL,
//  `address_guide` char(64) DEFAULT NULL,
//  `floor_current` int(10) unsigned DEFAULT NULL,
//  `house_type` enum('не вказано','цегляний','дерев`янний','панельний') DEFAULT NULL,
//  `rooms_quantity` int(10) unsigned NOT NULL,
//  `rooms_type` enum('не вказано','суміжні','роздільні','суміжно-роздільні') DEFAULT NULL,
//  `area_all` int(10) unsigned DEFAULT NULL,
//  `area_rooms` int(11) DEFAULT NULL,
//  `area_kitchen` int(11) DEFAULT NULL,
//  `ceiling_height` int(11) DEFAULT NULL,
//  `layout` enum('не вказано','чешка','київка','старий фонд','хрущовка','сталінка','новобудова','в особняку','спецпроект','м/с','гуртожиток') DEFAULT NULL,
//  `repair` enum('не вказано','не штукатурено','від забудовника','б/р не жилий стан','хороший стан','косметичний ремонт','ремонт','євроремонт','дизайнерсткий ремонт',' частковий','савдеп') DEFAULT NULL,
//  `convenience` enum('не вказано','всі','туалет','ванна','газ','світло','вода','каналізація','душ','джакузі','душова кабіна') DEFAULT NULL,
//  `heating` enum('не вказано','без опалення','пічне (наз/дрова)','централізоване','котел','конвектор','АГВ','котельня на будинок') DEFAULT NULL,
//  `flooring` enum('не вказано','ломінат','дерево','стяжка','паркет','плитка','лінолеум') DEFAULT NULL,
//  `walls` enum('не вказано','обої','штукатурка','не штукатурено','побілка','вагонка') DEFAULT NULL,
//  `ceiling` enum('не вказано','побілка','не штукатурено','гіпсокартон','натяжні стелі','вагонка') DEFAULT NULL,
//  `windows` enum('не вказано','металопластикові','дерев`янні','без вікон') DEFAULT NULL,
//  `plumbing` enum('не вказано','нова','стара','без сантехніки') DEFAULT NULL,
//  `bathroom` enum('не вказано','роздільний','окремий','суміщений') DEFAULT NULL,
//  `hot_water` enum('не вказано','бойлер','котел','газова колонка','без гарячої води') DEFAULT NULL,
//  `price` decimal(10,2) unsigned DEFAULT NULL,
//  `min_price` decimal(10,2) unsigned DEFAULT NULL,
//  `sale` enum('не вказано','прямий','не прямий') DEFAULT NULL,
//  `furniture` enum('без меблів','старі меблі','нові меблі') DEFAULT NULL
        const 
            house_type  = {
                id      : 0,
                name    : 'house_type',
                label   : 'house_type',

                data    : [ 
                            {
                                value :  1,
                                label :  'цегляний'
                            },
                            {
                                value :  2,
                                label :  'дерев`янний'
                            },
                            {
                                value :  '3',
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
                        min_price ,
                      ];
        
//        console.log($scope.input);
        $scope.enum_ = house_type;
                             
        
         $scope.data = {
            singleSelect: null,
            multipleSelect: [],
            option1: 'option-1'
           };

           $scope.forceUnknownOption = function() {
             $scope.data.singleSelect = 'nonsense';
           };
//        console.log($scope.enum);
        
// console.log( $('.button-plus'));
        getRealty();
//        console.log($scope.realty);

        // alert($scope.realty);
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
        function getRealty() {
            dataFactory.getRealty()
                .then(function (response) {
                    // alert(response.realty);
                    // alert(response.data.realty);
                    $scope.realty = response.data.realty;
//                     console.log(response.data.realty);

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