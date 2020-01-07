

$(() => {
    //当input盒子获取焦点时,border-bottom变红2px
    $('.input_red').focus(function () {
        $(this).css('border-bottom', ' 2px solid #dc1e32')
    })
        .on('blur', function () {
            $(this).css('border-bottom', ' 1px solid #ccc')
        })



    /************************  失焦判断  **********************************/
    $("input").blur(function () {
        $(".spa").css("color", "#BD362F")
        if ($(this).is(" .senderName")) {             //姓名判断
            var na = /^[\u4E00-\u9FA5]{2,4}$/
            if ($(this).val() != "") {
                if (!(na.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入2-4个汉字");
                    console.log(123123);
                    return false;
                } else if (na) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {

                $(this).siblings('.spa').text('')

            }
        }

        if ($(this).is(" .company")) {             //公司判断
            var con = /^[\u4E00-\u9FA5]{2,18}$/
            if ($(this).val() != "") {
                if (!(con.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入公司名(2-18个汉字)");

                    return false;
                } else if (con) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {
                $(this).siblings('.spa').text("");
            }
        }
        if ($(this).is(" .telephoneNumber")) {            //手机号判断
            var ph = /^1[3|5|7|8|][0-9]{9}$/
            if ($(this).val() != "") {
                if (!(ph.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入正确手机号");

                } else if (ph) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {
                $(this).siblings('.spa').text("");
            }
        }
        if ($(this).is(".lineTelephone")) {            //固话判断
            var lt = /^[0-9]{7,8}$/
            if ($(this).val() != "") {
                if (!(lt.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入正确电话号码(7-8位数字)");

                } else if (lt) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {
                $(this).siblings('.spa').text("");
            }
        }
        if ($(this).is(" .bigAddress")) {            //省市地址判断
            var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
            if ($(this).val() != "") {
                if (!(ad.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入省市地址(4-32汉字)");

                } else if (ad) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {
                $(this).siblings('.spa').text("");
            }
        }

        if ($(this).is(" .smallAddress")) {            //详细地址判断
            var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
            if ($(this).val() != "") {
                if (!(ad.test($(this).val()))) {
                    $(this).siblings('.spa').text("请输入详细地址(4-32位汉字)");

                } else if (ad) {
                    $(this).siblings('.spa').text("");
                    return true;
                }
            } else {
                $(this).siblings('.spa').text("");
            }
        }


        //     //判断所有寄件人收件人信息
        //     if ($('.senderInformation2').find('.input').val() == '')
        //    /*  if ($('.senderInformation2 .senderName').val() == '' || $('.senderInformation2 .telephoneNumber').val() == '' || $('.senderInformation2 .lineTelephone').val() == '' || $('.senderInformation2 .company').val() == '' || $('.senderInformation2 .bigAddress').val() == '' || $('.senderInformation2 .smallAddress').val() == '') */ {
        //         $('.submit-order').attr({
        //             "disabled": "disabled"
        //         }).css('background-color', '#999').css('cursor', 'not-allowed');
        //     } else {
        //         $('.submit-order').css('background-color', '#dc1e32').css('cursor', 'pointer')
        //             .removeAttr("disabled");
        //     }



    })
    /********************** 聚焦提示 ************************/
    $(" input").focus(function () {
        if ($(this).is(" .senderName")) {
            $(this).siblings('.spa').text("必填,请输入2-4个汉字").css("color", "#aaa")
        }
        if ($(this).is(" .telephoneNumber")) {
            $(this).siblings('.spa').text("必填,11位手机号码").css("color", "#aaa")

        }
        if ($(this).is(" .bigAddress")) {
            $(this).siblings('.spa').text("必填,(4-18位汉字)").css("color", "#aaa")

        }
        if ($(this).is(" .company")) {
            $(this).siblings('.spa').text("请输入公司名").css("color", "#aaa")

        }
        if ($(this).is(" .lineTelephone")) {
            $(this).siblings('.spa').text("7-8位数字").css("color", "#aaa")

        }
        if ($(this).is(" .smallAddress")) {
            $(this).siblings('.spa').text("必填,请输入详细地址(4-18位汉字)").css("color", "#aaa")

        }


    })
    /*********************** 下一页 ***************************/
    $(".three_tab_1 .nextButton").click(function () {
        const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
        const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
        const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;     //地址正则
        const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
        if (na.test($(".three_tab_1 .senderName").val()) && ph.test($(".three_tab_1 .telephoneNumber").val()) && ad.test($(".three_tab_1 .bigAddress").val()) && smad.test($(".three_tab_1 .smallAddress").val())) {
            $(this).parents(".three_tab_1").removeClass('current').next().addClass('current')

        } else {
            if ($(".three_tab_1 .senderName").val() == "") {
                $(".three_tab_1 .spa1").text('请你填写用户名')
            }
            if ($(".three_tab_1 .telephoneNumber").val() == "") {
                $(".three_tab_1 .spa2").text('请你填写手机号')
            }
            if ($(".three_tab_1 .bigAddress").val() == "") {
                $(".three_tab_1 .spa3").text('请你填写地址')
            }
            if ($(".three_tab_1 .smallAddress").val() == "") {
                $(".three_tab_1 .spa6").text('请输入详细地址')
            }
            return false;
        }
    })
    $(".three_tab_2 .nextButton").click(function () {
        console.log(123);


        const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
        const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
        const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;     //地址正则
        const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
        if (na.test($(".three_tab_2 .senderName").val()) && ph.test($(".three_tab_2 .telephoneNumber").val()) && ad.test($(".three_tab_2 .bigAddress").val()) && smad.test($(".three_tab_2 .smallAddress").val())) {
            console.log(12356);

            $(this).parents(".three_tab_2").removeClass('current').next().addClass('current')

        } else {
            if ($(".three_tab_2 .senderName").val() == "") {
                $(".three_tab_2 .spa1").text('请你填写用户名')
            }
            if ($(".three_tab_2 .telephoneNumber").val() == "") {
                $(".three_tab_2 .spa2").text('请你填写手机号')
            }
            if ($(".three_tab_2 .bigAddress").val() == "") {
                $(".three_tab_2 .spa3").text('请你填写地址')
            }
            if ($(".three_tab_2 .smallAddress").val() == "") {
                $(".three_tab_2 .spa6").text('请输入详细地址')
            }
            return false;
        }
    })
    $(".three_tab_3 .nextButton").click(function () {
        if ($(".three_tab_3 .agree").hasClass('checked')) {
            $(this).parents(".three_tab_3").removeClass('current').next().addClass('current')
        }
    })
    /*************************返回上一页************************ */
    $(".backButton").click(function () {
        $(this).parents('.three_tab').removeClass('current').prev().addClass('current')
    })
    // 寄大件提交按钮
    //当寄大件input失去焦点判断
    $(".senderInformation2 input").blur(function () {
        const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
        const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
        const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;     //地址正则
        const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
        if (na.test($(".senderInformation2 .senderName").val()) && ph.test($(".senderInformation2 .telephoneNumber").val()) && ad.test($(".senderInformation2 .bigAddress").val()) && smad.test($(".senderInformation2 .smallAddress").val()) && $(".senderInformation2 .agree").hasClass('checked') && na.test($(".senderInformation2 .receiverName").val()) && ph.test($(".senderInformation2 .receiverTel").val()) && ad.test($(".senderInformation2 .receiverBigAdd").val()) && smad.test($(".senderInformation2 .receiverSmallAdd").val())) {
            console.log(1);

            $(".senderInformation2 #orders").attr('disabled', false).removeClass("disabled")
        } else {
            if ($(".senderInformation2 #orders").hasClass("disabled")) {
                console.log(2);

                $(".senderInformation2 #orders").attr('disabled', true)
            } else {
                console.log(3);

                $(".senderInformation2 #orders").attr('disabled', true).addClass("disabled")
            }


        }
    })
    //   我同意按钮
    $(".agree").click(function () {
        $(this).toggleClass('checked')
    })

    $(".senderInformation2 .agree").click(function () {
        const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
        const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
        const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;     //地址正则
        const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
        if (na.test($(".senderInformation2 .senderName").val()) && ph.test($(".senderInformation2 .telephoneNumber").val()) && ad.test($(".senderInformation2 .bigAddress").val()) && smad.test($(".senderInformation2 .smallAddress").val()) && $(".senderInformation2 .agree").hasClass('checked') && na.test($(".senderInformation2 .receiverName").val()) && ph.test($(".senderInformation2 .receiverTel").val()) && ad.test($(".senderInformation2 .receiverBigAdd").val()) && smad.test($(".senderInformation2 .receiverSmallAdd").val())) {
            console.log(11);

            $(".senderInformation2 #orders").attr('disabled', false).removeClass("disabled")
        } else {
            $(".senderInformation2 #orders").attr('disabled', true).addClass("disabled")
        }
    })

    //    模态框点击选中功能                                                                                
    
    $("#myModal1").find('.agree1').click(function () {
        if (!$(this).parents("#myModal1").siblings(".agree").hasClass("checked")) {
            $(this).parents("#myModal1").siblings(".agree").addClass('checked')
        }
    })
    $("#myModal2").find('.agree1').click(function () {
        if (!$(this).parents("#myModal2").siblings(".agree").hasClass("checked")) {
            $(this).parents("#myModal2").siblings(".agree").addClass('checked')
        }
    })
    // 预定信息切换
    $('.appointmenttitle a').click(function () {

        $(this).find("span").toggleClass("red");
        $(this).siblings("a").find("span").toggleClass("red")
        if ($('.appointmenttitle a:first').find("span").hasClass("red")) {
            $(".doorTime").css("display", "block").siblings('.oneself').css("display", "none")
        } else {
            $(".doorTime").css("display", "none").siblings('.oneself').css("display", "block")
        }
    })


})

