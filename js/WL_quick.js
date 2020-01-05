

$(() => {
    //当input盒子获取焦点时,border-bottom变红2px
    $('.input_red').focus(function () {


        $(this).css('border-bottom', ' 2px solid #dc1e32')
    })
        .on('blur', function () {
            $(this).css('border-bottom', ' 1px solid #ccc')
        })



    /************************  失焦判断  **********************************/
    $(".three_tab_1 input").blur(function () {
        $(".three_tab_1 .spa").css("color", "#BD362F")
        if ($(this).is(".three_tab_1 .senderName")) {             //姓名判断
            var na = /^[\u4E00-\u9FA5]{2,4}$/
            if ($(".three_tab_1 .senderName").val() != "") {
                if (!(na.test($(".three_tab_1 .senderName").val()))) {
                    $(".three_tab_1 .spa1").text("请输入2-4个汉字");

                    return false;
                } /* else if (na) {
                            $(".spa1").text("");
                            return true;
                        } */
            } else {
                $(".three_tab_1 .spa1").text("");
            }
        }

        if ($(this).is(".three_tab_1 .company")) {             //公司判断
            var con = /^[\u4E00-\u9FA5]{2,18}$/
            if ($(".three_tab_1 .company").val() != "") {
                if (!(con.test($(".three_tab_1 .company").val()))) {
                    $(".three_tab_1 .spa4").text("请输入公司名(2-18个汉字)");

                    return false;
                } else if (con) {
                    $(".three_tab_1 .spa4").text("");
                    return true;
                }
            } else {
                $(".three_tab_1 .spa4").text("");
            }
        }
        if ($(this).is(".three_tab_1 .telephoneNumber")) {            //手机号判断
            var ph = /^1[3|5|7|8|][0-9]{9}$/
            if ($(".three_tab_1 .telephoneNumber").val() != "") {
                if (!(ph.test($(".three_tab_1 .telephoneNumber").val()))) {
                    $(".three_tab_1 .spa2").text("请输入正确手机号");

                } else if (ph) {
                    $(".three_tab_1 .spa2").text("");
                    return true;
                }
            } else {
                $(".three_tab_1 .spa2").text("");
            }
        }
        if ($(this).is(".three_tab_1 .lineTelephone")) {            //固话判断
            var lt = /^[0-9]{7,8}$/
            if ($(".three_tab_1 .lineTelephone").val() != "") {
                if (!(lt.test($(".three_tab_1 .lineTelephone").val()))) {
                    $(".three_tab_1 .spa5").text("请输入正确电话号码(7-8位数字)");

                } else if (lt) {
                    $(".three_tab_1 .spa5").text("");
                    return true;
                }
            } else {
                $(".three_tab_1 .spa5").text("");
            }
        }
        if ($(this).is(".three_tab_1 .bigAddress")) {            //省市地址判断
            var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
            if ($(".three_tab_1 .bigAddress").val() != "") {
                if (!(ad.test($(".three_tab_1 .bigAddress").val()))) {
                    $(".three_tab_1 .spa3").text("请输入省市地址");

                } else if (ad) {
                    $(".three_tab_1 .spa3").text("");
                    return true;
                }
            } else {
                $(".three_tab_1 .spa3").text("");
            }
        }

        if ($(this).is(".three_tab_1 .smallAddress")) {            //详细地址判断
            var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
            if ($(".three_tab_1 .smallAddress").val() != "") {
                if (!(ad.test($(".three_tab_1 .smallAddress").val()))) {
                    $(".three_tab_1 .spa6").text("请输入详细地址");

                } else if (ad) {
                    $(".three_tab_1 .spa6").text("");
                    return true;
                }
            } else {
                $(".three_tab_1 .spa6").text("");
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
    $(".three_tab_1 input").focus(function () {
        if ($(this).is(".three_tab_1 .senderName")) {
            $(".three_tab_1 .spa1").text("2-4个汉字").css("color", "#aaa")
        }
        if ($(this).is(".three_tab_1 .telephoneNumber")) {
            $(".three_tab_1 .spa2").text("11位手机号码").css("color", "#aaa")

        }
        if ($(this).is(".three_tab_1 .bigAddress")) {
            $(".three_tab_1 .spa3").text("例如湖南省长沙市岳麓区").css("color", "#aaa")

        }
        if ($(this).is(".three_tab_1 .company")) {
            $(".three_tab_1 .spa4").text("请输入公司名(2-18个汉字)").css("color", "#aaa")

        }
        if ($(this).is(".three_tab_1 .lineTelephone")) {
            $(".three_tab_1 .spa5").text("7-8位数字").css("color", "#aaa")

        }
        if ($(this).is(".three_tab_1 .smallAddress")) {
            $(".three_tab_1 .spa6").text("请输入详细地址").css("color", "#aaa")

        }


    })
    /*********************** 提交验证 ***************************/
    $(".three_tab_1 .nextButton").click(function () {
        const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
        const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
        const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{8,32}/;     //地址正则
        const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
        const lt = /^[0-9]{7,8}$/  //固定电话正则
        const con = /^[\u4E00-\u9FA5]{2,18}$/  //公司名正则
        if (na.test($(".three_tab_1 .senderName").val()) && ph.test($(".three_tab_1 .telephoneNumber").val()) && ad.test($(".three_tab_1 .bigAddress").val()) && smad.test($(".three_tab_1 .smallAddress")) && lt.test($(".three_tab_1 .lineTelephone")) && con.test($(".three_tab_1 .company"))) {
            return true;
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
            if ($(".three_tab_1 .company").val() == "") {
                $(".three_tab_1 .spa4").text('请输入公司名(2-18个汉字)')
            }
            if ($(".three_tab_1 .lineTelephone").val() == "") {
                $(".three_tab_1 .spa5").text('请输入正确电话号码')
            }
            if ($(".three_tab_1 .smallAddress").val() == "") {
                $(".three_tab_1 .spa6").text('请输入详细地址')
            }
            return false;
        }
    })




    $('.appointmenttitle a').click(function () {

        console.log($(this).find("span"));

        $(this).find("span").toggleClass("red");
        $(this).siblings("a").find("span").toggleClass("red")
        if ($('.appointmenttitle a:first').find("span").hasClass("red")) {
            $(".doorTime").css("display", "block").siblings('.oneself').css("display", "none")
        } else {
            $(".doorTime").css("display", "none").siblings('.oneself').css("display", "block")
        }
    })


})

