$(() => {
    $(window).on('scroll', function(e) {
        let fo = $('.footer').offset().top - $(window).scrollTop();
        let distance = $('.standardization').offset().top - $('.warehouse_service_tab').height();
        if ($(document).scrollTop() > distance) {
            $('.warehouse_service_tab').css('position', 'fixed');
            $('.standardization').css('marginTop', '90px')
            $('.return_to').fadeIn();
        } else {
            $('.warehouse_service_tab').css('position', 'relative');
            $('.standardization').css('marginTop', '0')
            $('.return_to').fadeOut();
        }
        if (fo < $(window).height()) {
            $('.return_to').addClass('absoluteness')
        } else if (fo > $(window).height()) {
            $('.return_to').removeClass('absoluteness')
        }
    })
    $('.return_to').on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
})