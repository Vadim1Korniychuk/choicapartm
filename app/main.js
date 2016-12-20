$(document).ready(function() {
    $("a.scrollto").click(function() {

        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: 9999
        }, 800);
        return false;
    });
});
