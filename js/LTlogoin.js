$(function(){
   
        //关广告
        $('.imgba').click(function(){
            $(this).parents('.LThorn').hide();
            $('.LTtwo').css("padding-top", "10px")
        })
        // 给小喇叭添加点击事件
        var n=0;
        $(".laba2").click(function(){
            if(n==0){
                 $(this).siblings('.laba2_1').show();
                 n =1;
            } else {
                $(this).siblings('.laba2_1').hide();
                n =0;
            }
            return n;
        })

        //table栏切换
        $('.LTtab').children().click(function(){
            $(this).addClass('LTli2').siblings().removeClass('LTli2')
         //   点击的同时，得到当前的索引号
        var index = $(this).index();
              // alert(index);   0   1
               if(index!=0){
                  // alert(2)
                   $('.LTtemplate1').hide();
                    $('.LTlili').animate({
                        'left':'+80px'
                    })
               } else {
                 //  alert(3)
                $('.LTtemplate1').show();
                $('.LTlili').animate({
                    'left':'0'
                })
               }
        })


 //   获取当前时间
    //写下面的操作之前必须要首先new一个，必要操作
  		var myDate = new Date();
    //      //获取当前年
    //      var year=myDate.getFullYear();
    //      //获取当前月
    //      var month=myDate.getMonth();
    //      //获取当前日
    //      var date=myDate.getDate(); 
        var h=myDate.getHours();       //获取当前小时数(0-23)
        var m=myDate.getMinutes();     //获取当前分钟数(0-59)
        var s=myDate.getSeconds();   //huo当前的秒数
        h = h < 10 ? '0' + h : h; //条件表达式 ? 表达式1 : 表达式2
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        var time = h+"-"+m+"-"+s;
        $('.LTtime').text(time)
    //      拼接：
    //          var nowDayTime = year + "年" + month + "月"  + date + "日 " + hours + ":" + minutes + ":" +  seconds
            
        

        let timer;
            //移动图            
            var index = 0;
            var flag = true;
            moveul();
            //移动动画
            function moveul() {
                if(index == 0){                   //难点节流阀问题 - 把开阀写到移动动画里面
                    $('.LTmo').animate({left: -2},1000,function(){
                        flag = true;
                    });
                    $('.LTmo').animate({left: -2},1000,function(){
                        flag = true;
                    });
                    index++;
                } else {
                    $('.LTmo').animate({left: -302},1000,function(){
                        flag = true;
                    });
                    index--;
                }
            }

            //移入跳转到指定图片
             $('.LTmc .LTkuai1').mouseover(function(){
                if(flag){
                    console.log(1);
                    flag = false;
                    clearInterval(timer)
                   index = 0;
                   moveul();
                   add();
                } 
            }).mouseout(function(){
                clearInterval(timer)
                autoPlay();
             
            })
            $('.LTmc .LTkuai2').mouseover(function(){
              if(flag){
                console.log(2);
                flag = false;
                clearInterval(timer)
                index = 1;
                moveul();
                add();
              }
            }).mouseout(function(){
                clearInterval(timer)
                autoPlay();
            })

            // 自动播放
            function autoPlay(){
                timer = setInterval(function(){
                    moveul();
                    add();
                },2000)
            }
            autoPlay();
            
            //添加类
           function add(){
            if(index!==0){
                $('.LTmc .LTkuai1').addClass('LTkuai3').siblings().removeClass('LTkuai3');
            // console.log(0);
            
            } else {
                $('.LTmc .LTkuai2').addClass('LTkuai3').siblings().removeClass('LTkuai3');
            // console.log(1);
            }
        } 

            //鼠标移入图片,清除定时器
            $('.LTmo img').mouseover(function(){
                clearInterval(timer)
            }).mouseout(function(){
                autoPlay();
            })



    

            

            


              

       


       












})