$(() => {
    $(window).on('scroll', function(e) {
        let distance = $('.standardization').offset().top - $('.warehouse_service_tab').height();
        if ($(document).scrollTop() > distance) {
            $('.warehouse_service_tab').css('position', 'fixed');
            $('.standardization').css('marginTop', '70px')
            $('.return_to').fadeIn();
        } else {
            $('.warehouse_service_tab').css('position', 'relative');
            $('.standardization').css('marginTop', '0')
            $('.return_to').fadeOut();
        }
        let botton = $('.footer').offset().top - 650
        if ($(document).scrollTop() > botton) {
            console.log(12);

            $('.return_to').css('position', 'absolute').css('top', '0');
            console.log('123');
        } else if ($(document).scrollTop() < botton) {
            $('.return_to').css('position', 'fixed').css('top', '100%');
        }
    })
    $('.return_to').on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
})