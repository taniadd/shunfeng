$(() => {
    $('.toggle-service-list').click(function () {
        if ($('.toggle-service-list .open-toggle-txt').hasClass('display')) {
            $('.toggle-service-list  .open-toggle-txt').removeClass("display");
            $('.toggle-service-list .close-toggle-txt').addClass("display");
            $('.more-support').stop().slideToggle();
        } else {
            $('.toggle-service-list .close-toggle-txt').removeClass("display");
            $('.toggle-service-list  .open-toggle-txt').addClass("display");
            $('.more-support').stop().slideToggle();
        }
    })
//滚动js
    $(window).on('scroll', function (e) {
        let distance = $('.sfexpress_header_nav').offset().top;
        if ($(document).scrollTop() > distance) {

            $('.return_to').fadeIn();
        } else {

            $('.return_to').fadeOut();
        }
        let botton = $('.footer').offset().top - 650
        if ($(document).scrollTop() > botton) {

            $('.return_to').css('position', 'absolute').css('top', '0');

        } else if ($(document).scrollTop() < botton) {
            $('.return_to').css('position', 'fixed').css('top', '100%');
        }
    })
    $('.return_to').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })

})