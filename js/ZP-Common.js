$(() => {
    $(window).on('scroll', function (e) {
        var banner = document.querySelector('.banner')
        var banTop = banner.offsetTop
        let fo = $('.footer').offset().top - $(window).scrollTop();
        let distance = $('.floor').offset().top - $('.tabs_nav_fa').height();
        if (window.pageYOffset >= banTop) {
            $('#go_nav').addClass('go_top_nav')
            $('#go_nav').css('display', 'block')
        } else {
            $('#go_nav').css('display', 'none')
        }
        if (fo < $(window).height()) {
            $('#go_nav').addClass('go_left_nav')
        } else if (fo > $(window).height()) {
            $('#go_nav').removeClass('go_left_nav')
        }
        if ($(document).scrollTop() > distance) {
            $('.tabs_nav_fa').css('position', 'fixed')
        } else {
            $('.tabs_nav_fa').css('position', 'relative')
        }
    })
    $('#go_nav').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })
})