
$(function(){
    //到今日推荐出现广告条
     var headerTop = $(".header").height();
     var footerTop = $(".footer").offset().top;

     $(window).scroll(function(){
      if($(document).scrollTop() >= headerTop){
        $(".LTding").fadeIn();

        //窗口可视高度
        var nl = $(window).height();
        console.log(nl);
                                        
           if($(document).scrollTop() >= $('.footer').offset().top-nl){
              // $(".LTding").css("position","absolute").css("top","-60px");
              $(".LTding").addClass('currenttop');
        } else {
           $(".LTding").removeClass('currenttop');
        }
     } else {
       // $(".LTding").fadeOut();
         $(".LTding").fadeOut();
     };
  })

 $(".LTding").click(function(){
 $("body,html").stop().animate({                            
     scrollTop:0
 });
})


     $(".LTding").click(function(){
     $("body,html").stop().animate({                            
         scrollTop:0
     });
  })


  //失焦事件
   $('.LTqu1').click(function(){
         $('.LTshi').slideDown();
   })

   $('.LTshi1 li').click(function(){
      $(this).addClass("LTchang LTcha").siblings().removeClass("LTchang LTcha");
      var index = $(this).index();
      $('.LTS ul').eq(index).show().siblings().hide();
   })

   // $('.LTS>ul').click(function(){
   //    var num = $(this).index();
   //    console.log(num);
   //    $(this).hide();
   //    $('.LTshi1 li').eq(2).show().addClass("LTchang").siblings().removeClass("LTchang");
   //    $('.LTzu').show();
   //    $('.LTzu>ul').eq(num).show().siblings().hide();
   // })
   $('.LTS li').click(function(){
      //var nu = $(this).index();
     var num = $(this).parent().index();
   //   console.log(num);
     // console.log(nu);
      var ll = $(this).text();
     // console.log(ll);
      
      $(this).parent().hide();
      $('.LTshi1 li').eq(2).show().addClass("LTchang").siblings().removeClass("LTchang");
      $('.LTzu').show();
      $('.LTzu>ul').eq(num).show().siblings().hide();
     // $('.LTqu1').attr("placeholder",ll);

      $('.LTzu li').click(function(){

         $('.LTshi').slideUp();
        $(this).parents('.LTzu').hide().siblings('.LTshi2').show();
        $('.LTshi1 li').eq(0).addClass("LTchang").siblings().removeClass();

         var lv = $(this).text();
         $('.LTqu1').attr("placeholder",ll+"-"+lv);
      })
   }) 
   

   $('.LTshi').mouseleave(function(){
      $(this).slideUp();
   })



   //表单验证   失焦
       //姓名
      var uname = /^[\u4E00-\u9FA5]{2,5}$/
      $('.LTming').blur(function(){
         if(uname.test($(this).val())){
            $(this).removeClass('LTcoo').siblings(".LTco2").hide();
         } else {
            $(this).addClass('LTcoo').siblings(".LTco2").show();
         }
      })
      //地址
      var coo1 = /^[\u4E00-\u9FA50-9_-]{4,25}$/
      $('.LTqu2').blur(function(){
         if(coo1.test($(this).val())){
            $(this).removeClass('LTcoo').siblings(".LTco2").hide();
         } else {
            $(this).addClass('LTcoo').siblings(".LTco2").show();
         }
      })
         //手机
      var coo2 = /^1\d{10}$/
      $('.LTphone1').blur(function(){
         if(coo2.test($(this).val())){
            $(this).removeClass('LTcoo').siblings(".LTco2").hide();
         } else {
            $(this).addClass('LTcoo').siblings(".LTco2").show();
         }
      })
         //座机
      var coo3 = /^[0-9]{7}$/
      $('.LTphone2').blur(function(){
         if(coo3.test($(this).val())){
            $(this).removeClass('LTcoo').siblings(".LTco2").hide();
         } else {
            $(this).addClass('LTcoo').siblings(".LTco2").show();
         }
      })
      //费用
      var coo3 = /^[1-9]\d*$/
      $('.LTco5').blur(function(){
         if(coo3.test($(this).val().trim())){
            $(this).removeClass('LTcoo').siblings(".LTco2").hide();
         } else {
            $(this).addClass('LTcoo').siblings(".LTco2").show();
         }
      })

      //业务模块
      $('.LTyun').click(function(){
         if($(this).hasClass('LTyun2')){
            $(this).removeClass('LTyun2');
            $('.LTsu').hide();
         } else {
            $(this).addClass('LTyun2');
             $('.LTsu').show();
         }
      })

      $('.LTsu li').click(function(){
            $('.LTqu3').attr('placeholder',$(this).text());
            $('.LTyun').removeClass('LTyun2');
            $('.LTsu').hide();
      })
         
      //单选框必选
      $('.LTcheck').mouseover(function(){
            if($('.LTcheckbox').prop("checked")){
               $('.LTco8').hide();
               return true;
            } else{
               $('.LTco8').show();
               return false;
            }
      })
      $('.LTcheckbox').click(function(){
         if($(this).prop("checked")){
            $('.LTco8').hide();
            return true;
         } else{
            $('.LTco8').show();
            return false;
         }
      })

      //提交按钮   
      // {
         
      // })
      $('.LTjiao').click(function() {
             if ($('.LTming').val() == "" || $('.LTphone1').val() == "" || $('.LTqu2').val() == ""){
                alert('提交失败')
             } else {
                alert('ok');
             }
  
     })


      


     
















})
