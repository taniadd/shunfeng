$(() => {
    $(window).on('scroll', () => {
        let hight = $(document).scrollTop();
        let sum = $('.tab_container').offset().top - $('.serve').height();
        let num = $('.footer').offset().top - $(window).scrollTop();
        hight > sum ? $('.list_width').addClass("dh") : $('.list_width').removeClass("dh");
        hight > sum ? $('.tab_title').css('margin-top', '90px') : $('.tab_title').css('margin-top', '0px');
        hight > sum ? $('.iconfont').css('display', 'block') : $('.iconfont').css('display', 'none');
        num < $(window).height() ? $('.iconfont').addClass("w") : $('.iconfont').removeClass("w");
    })
    $('.iconfont').on('click', () => {
        $('html,body').animate({
            scrollTop: '0'
        }, 500)
    })
})