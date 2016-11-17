$(document).ready(function() {
    $('.popUp').hide();
    $(".port").click(function() {
        $('html,body').animate({
                scrollTop: $(".sitesScroll").offset().top
            },
            'slow');

    });

    $(".contactF").click(function() {
        $('html,body').animate({
                scrollTop: $(".contact").offset().top
            },
            'slow');

    });

    $('.about').click(function() {
        $('html,body').animate({
                scrollTop: 0
            },
            'slow');
    });




});
