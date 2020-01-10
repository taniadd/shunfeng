$(function() {
    let boxwhith = $('.subject_box').width()
    let sum = 0;
    $('.subject_left').on('click', function() {
        if (sum < 5) {
            sum++
            let ju = boxwhith * sum;
            $('.subject_slideshow').css('transform', 'translateX(-' + ju + 'px)')
            $('.tab')[sum].click();
        } else {}
    })
    $('.subject_right').on('click', function() {
        if (sum >= 0) {
            sum--
            let ju = boxwhith * sum;
            $('.subject_slideshow').css('transform', 'translateX(-' + ju + 'px)')
            $('.tab')[sum].click();
        } else {}
    })
    $('.tab').on('click', function() {
        sum = $(this).index()
        $('.tab').removeClass('acriit')
        $(this).addClass('acriit');
        let ju = boxwhith * sum;
        $('.subject_slideshow').css('transform', 'translateX(-' + ju + 'px)')
    })


    let flWidth = $('.components_fl_box').width()
    let sei = 0;
    $('.subject_di_box_rigth').on('click', function() {
        if (sei < 3) {
            sei++
            let ju = flWidth * sei;
            $('.components_fl').css('transform', 'translateX(-' + ju + 'px)')
        } else {}
    })
    $('.subject_di_box_leth').on('click', function() {
        if (sei >= 0) {
            sei--
            let ju = flWidth * sei;
            $('.components_fl').css('transform', 'translateX(-' + ju + 'px)')
        } else {}
    })
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 3) {
            $('.head').css('backgroundColor', '#fff')
        } else {
            $('.head').css('backgroundColor', 'rgba(255, 255, 255, 0.4)')
        }
    })
})