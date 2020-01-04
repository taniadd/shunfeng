$(function(){
        //关广告
        $('.imgba').click(function(){
            $(this).parents('.LThorn').hide();
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
        


        //小轮播图
               //经过li图片定时器清除
               $('LTmo img').mouseenter(function(){
                   clearInterval(timer);
               })

        //自动播放 
          var timer = setInterval(function(){
                //
          },1000);
        


          var index=0;
        //   var timer = setInterval()












})