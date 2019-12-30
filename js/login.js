$(() => {
    let sum = 30; //决定获取下次验证码需要多久
    let rand = [];
    let jinzhi = 3;
    let flag = true;
    //初始化按钮,初始是禁用的
    $('.quick').attr({
        "disabled": "disabled"
    });
    $('.login_yan button').attr({
        "disabled": "disabled"
    });
    $('.Thelogin_button').on('click', function() { //点击登录弹出登录界面
        $('.keep').show();
        $('.login').show();
    })


    $('.login_scan').on('click', function() { //TAB切换
        $('.login_content').show().siblings('.login_denglu').hide();
        $(this).children('a').addClass('creent');
        $('.login_bank').children('a').removeClass('creent');
    })
    $('.login_bank').on('click', function() { //TAB切换
        $('.login_denglu').show().siblings('.login_content').hide();
        $(this).children('a').addClass('creent');
        $('.login_scan').children('a').removeClass('creent');
    })

    $('.login_denglu_tel').on('focus', function() {
        $('.login_tel').css('border-bottom', ' 2px solid #dc1e32')
    }).on('blur', function() {
        $('.login_tel').css('border', 'none')
    })

    $('.login_denglu_tel').on('keyup', function() { //判断用户输入的手机号是否符合规定
        let tel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01235678]|18[0-9]|14[579]|16[6]|19[189])[0-9]{8}$/
        if (tel.test($(this).val())) { //当用户输入手机号符合规定时
            $(this).parents('.login_tel').css('background-image', "url('./images/correct.png')")
            if (flag) { //阀门,防止定时器还没走完,能够重复触发此代码.
                $('.login_yan button').removeAttr("disabled").css('cursor', 'pointer').css('background-color', '#333333');
            }

            function yiru() { //鼠标移入事件
                $('.login_yan button').css('background-color', '#dc1e32')
            }

            function yichu() { //鼠标移出事件
                $('.login_yan button').css('background-color', '#333333').css('border', '1px solid #333')
            }
            $('.login_yan button').on('mouseenter', yiru).on('mouseleave', yichu)

            $('.login_input_yan').on('keyup', function() {
                if (tel.test($('.login_denglu_tel').val())) { //当用户输入正确的手机号并且正确格式验证码
                    if ($(this).val() != '') {
                        $('.quick').css('background-color', '#dc1e32').css('cursor', 'pointer')
                            .removeAttr("disabled"); //不为空的时候就解除禁用
                    } else {
                        $('.quick').attr({
                                "disabled": "disabled"
                            }) //内容为空的时候就禁用按钮
                            .css('background-color', '#999').css('cursor', 'not-allowed');
                    }
                }
            })
        } else if ($(this).val() == '') { //当内容为空时,就回到初始化.
            $(this).parents('.login_tel').css('background-image', "url('')");
            yan();
        } else {
            yan();
            $(this).parents('.login_tel').css('background-image', "url('./images/error.png')")
        }

        function yan() {
            $('.login_yan button')
                .attr({
                    "disabled": "disabled"
                })
                .css('background-color', '#808080')
                .unbind('mouseenter')
                .unbind('mouseleave')
                .css('cursor', 'not-allowed').attr('disabled', true)
        }
    })
    let dsq;
    let fose = true;
    $('.login_yan button').on('click', function(event) { //点击获取验证码
        event.stopPropagation();
        let now = Math.ceil(Math.random() * 9); //验证码第一位数
        let wang = Math.ceil(Math.random() * 9); //验证码第二位数
        let sui = Math.ceil(Math.random() * 9); //验证码第三位数
        let to = Math.ceil(Math.random() * 9); //验证码第四位数
        let pj = parseInt(('' + now + wang + sui + to))
        rand.push(parseInt(pj));
        if (jinzhi > 0) {
            $(this).css('cursor', 'not-allowed')
                .css('background-color', '#333333')
                .html(sum).attr({
                    "disabled": "disabled"
                })
            flag = false;
            jinzhi--
            if (fose) {
                dsq = setInterval(function() {
                        sum--
                        $('.login_yan button').html(sum)
                        if (sum == 0) {
                            $('.login_yan button').html('获取验证码')
                                .removeAttr("disabled")
                                .css('cursor', 'pointer');
                            sum = 30
                            flag = true;
                            fose = true;
                            clearTimeout(dsq)
                        }
                    }, 1000) //每隔一秒减一
            }
            fose = false;
            alert(`您的验证码为:${rand[rand.length-1]}
                    请尽快输入,60秒后失效`)
        } else {
            alert('获取验证码频繁,请稍后再试')
        }
        clearTimeout(gb)
        var gb = setTimeout(() => {
                rand.push(null);
            }, 60000) //决定验证码在多久后失效
        clearTimeout(jz)
        var jz = setTimeout(() => {
                jinzhi = 3
            }, 86400000) //决定多久之内能够获取几次验证码
        return false;
    })
    $('.quick').on('click', function(event) {
        let flag = false;
        rand.map((re => {
            if (re == $('.login_input_yan').val()) {
                flag = true;
            }
        }))
        console.log(flag);
        console.log(rand);

        event.stopPropagation();
        if ($('.login_input_yan').val() == rand[rand.length - 1]) {
            alert('登录成功')
        } else if (flag) {
            alert('验证码已失效,请重新获取')
            return false
        } else {
            alert('验证码错误')
            return false
        }
    })
    $('.login_input_yan').on('blur', function(event) {
            event.stopPropagation();
            $('.login_input').css('border', 'none')
            if ($(this).val().length == 4 || $(this).val() == '') {
                $('.mistake').hide();
            } else {
                $('.mistake').show();
            }
        }).on('focus', function() {
            $('.login_input').css('border-bottom', ' 2px solid #dc1e32')
        })
        //地区选择
    $('.selected').on('click', function() {
        $(this).children('ul').toggle();
    })
    $('.selected ul li').on('click', function() {
        let sum = $(this).children('span').html();
        $('.selected>span').html(sum);
    })
    $('.close').on('click', function() { //关闭按钮  让所有设置和表单恢复初始值
        $('form')[0].reset();
        $(this).parents('.login').hide().siblings('.keep').hide();
        $('.mistake').hide();
        clearInterval(dsq)
        $('.login_yan button').html('获取验证码')
            .removeAttr("disabled")
            .css('cursor', 'pointer');
        sum = 30
        flag = true;
        $('.quick').attr({
                "disabled": "disabled"
            }) //内容为空的时候就禁用按钮
        $('.quick').css('background-color', '#999').css('cursor', 'not-allowed');
        $('.login_yan button').css('cursor', 'not-allowed')
            .css('background-color', '#808080').attr({
                "disabled": "disabled"
            })
        $('.login_tel').css('background-image', "url('')");
    })
})