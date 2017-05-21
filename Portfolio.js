$(document).ready(function() {
    $('.popUp').hide();
   $('.details').hide();
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

    $('#sistersSite').on('hover', function(){
        $('.tooltiptext').css("visibility", "visible");
    });


    $('img').mouseenter(function(){
      $(this).siblings().toggle();

    });
    $('img').mouseleave(function(){
      $(this).siblings().toggle();

    });



});
