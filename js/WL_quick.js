

$(()=>{
    //当input盒子获取焦点时,border-bottom变红2px
    $('.input_red').focus(function(){

        
        $(this).css('border-bottom', ' 2px solid #dc1e32')
    })
    .on('blur',function(){
        $(this).css('border-bottom', ' 1px solid #ccc')
    })

   

                        /************************  失焦判断  **********************************/
                        $(".input").blur(function () {
                            $(".spa").css("color", "#BD362F")
                            if ($(this).is(".senderName")) {             //姓名判断
                                var na = /^[\u4E00-\u9FA5]{2,4}$/
                                if ($(".senderName").val() != "") {
                                    if (!(na.test($(".senderName").val()))) {
                                        $(".spa1").text("请输入2-4个汉字");

                                        return false;
                                    } /* else if (na) {
                                        $(".spa1").text("");
                                        return true;
                                    } */
                                } else {
                                    $(".spa1").text("");
                                }
                            }

                            if ($(this).is(".company")) {             //公司判断
                                var con = /^[\u4E00-\u9FA5]{2,18}$/
                                if ($(".company").val() != "") {
                                    if (!(con.test($(".senderName").val()))) {
                                        $(".spa4").text("请输入公司名(2-18个汉字)");

                                        return false;
                                    } else if (con) {
                                        $(".spa4").text("");
                                        return true;
                                    }
                                } else {
                                    $(".spa4").text("");
                                }
                            }
                            if ($(this).is(".telephoneNumber")) {            //手机号判断
                                var ph = /^1[3|5|7|8|][0-9]{9}$/
                                if ($(".telephoneNumber").val() != "") {
                                    if (!(ph.test($(".telephoneNumber").val()))) {
                                        $(".spa2").text("请输入正确手机号");

                                    } else if (ph) {
                                        $(".spa2").text("");
                                        return true;
                                    }
                                } else {
                                    $(".spa2").text("");
                                }
                            }
                            if ($(this).is(".lineTelephone")) {            //固话判断
                                var lt = /^[0-9]{7,8}$/
                                if ($(".lineTelephone").val() != "") {
                                    if (!(lt.test($(".lineTelephone").val()))) {
                                        $(".spa5").text("请输入正确电话号码(7-8位数字)");

                                    } else if (lt) {
                                        $(".spa5").text("");
                                        return true;
                                    }
                                } else {
                                    $(".spa5").text("");
                                }
                            }
                            if ($(this).is(".bigAddress")) {            //省市地址判断
                                var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
                                if ($(".bigAddress").val() != "") {
                                    if (!(ad.test($(".bigAddress").val()))) {
                                        $(".spa3").text("请输入省市地址");

                                    } else if (ad) {
                                        $(".spa3").text("");
                                        return true;
                                    }
                                } else {
                                    $(".spa3").text("");
                                }
                            }

                            if ($(this).is(".smallAddress")) {            //详细地址判断
                                var ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;
                                if ($(".smallAddress").val() != "") {
                                    if (!(ad.test($(".smallAddress").val()))) {
                                        $(".spa6").text("请输入详细地址");

                                    } else if (ad) {
                                        $(".spa6").text("");
                                        return true;
                                    }
                                } else {
                                    $(".spa6").text("");
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
                        $(".input").focus(function () {
                            if ($(this).is(".senderName")) {
                                $(".spa1").text("2-4个汉字").css("color", "#aaa")
                            }
                            if ($(this).is(".telephoneNumber")) {
                                $(".spa2").text("11位手机号码").css("color", "#aaa")

                            }
                            if ($(this).is(".bigAddress")) {
                                $(".spa3").text("例如湖南省长沙市岳麓区").css("color", "#aaa")

                            }
                            if ($(this).is(".company")) {
                                $(".spa4").text("请输入公司名(2-18个汉字)").css("color", "#aaa")

                            }
                            if ($(this).is(".lineTelephone")) {
                                $(".spa5").text("7-8位数字").css("color", "#aaa")

                            }
                            if ($(this).is(".smallAddress")) {
                                $(".spa6").text("请输入详细地址").css("color", "#aaa")

                            }


                        })
                        /*********************** 提交验证 ***************************/
                        $(".nextButton").click(function () {
                            const na = /^[\u4E00-\u9FA5]{2,4}$/;   //姓名正则
                            const ph = /^1[3|5|7|8|][0-9]{9}$/;    //手机号正则
                            const ad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{8,32}/;     //地址正则
                            const smad = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]{4,32}/;  //详细地址正则
                            const lt = /^[0-9]{7,8}$/  //固定电话正则
                            const con = /^[\u4E00-\u9FA5]{2,18}$/  //公司名正则
                            if (na.test($(".senderName").val()) && ph.test($(".telephoneNumber").val()) && ad.test($(".bigAddress").val()) && smad.test($(".smallAddress")) && lt.test($(".lineTelephone")) && con.test($(".company"))) {
                                return true;
                            } else {
                                if ($(".senderName").val() == "") {
                                    $(".spa1").text('请你填写用户名')
                                }
                                if ($(".telephoneNumber").val() == "") {
                                    $(".spa2").text('请你填写手机号')
                                }
                                if ($(".bigAddress").val() == "") {
                                    $(".spa3").text('请你填写地址')
                                }
                                if ($(".company").val() == "") {
                                    $(".spa4").text('请输入公司名(2-18个汉字)')
                                }
                                if ($(".lineTelephone").val() == "") {
                                    $(".spa5").text('请输入正确电话号码')
                                }
                                if ($(".smallAddress").val() == "") {
                                    $(".spa6").text('请输入详细地址')
                                }
                                return false;
                            }
                        })

                        $('.appointmenttitle a').click(function(){
                            console.log(1);
                            console.log($(this).find("span"));
                            
                            $(this).find("span").toggleClass("red");
                            $(this).siblings("a").find("span").toggleClass("red")
                            if ( $('.appointmenttitle a:first').find("span").hasClass("red")) {
                                $(".doorTime").css("display","block").siblings('.oneself').css("display","none")
                            }else {
                               $(".doorTime").css("display","none").siblings('.oneself').css("display","block")
                            }
                        })
                 

})

