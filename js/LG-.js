$(() => {
    $(window).on('scroll', function(e) {
        let distance = $('.express_service_list').offset().top - $('.tabs_nav').height();
        if ($(document).scrollTop() > distance) {
            $('.tabs_nav').css('position', 'fixed');
            $('.express_service_list').css('marginTop', '70px')
            $('.return_to').fadeIn();
        } else {
            $('.tabs_nav').css('position', 'relative');
            $('.tabs_nav').css('marginTop', '0')
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