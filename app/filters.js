app.filter('startFrom', function() {
    return function(input, start) {
//        console.log(input);
//        console.log(start);
        start = +start;
        if(input !== undefined){
            return input.slice(start);
        }
    };   
});
