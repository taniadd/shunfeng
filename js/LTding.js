
$(function(){
    //到今日推荐出现广告条
     var headerTop = $(".header").height();
     var footerTop = $(".footer").offset().top;

      $(window).scroll(function(){
          if($(document).scrollTop() >= headerTop){
            $(".LTding").fadeIn();
               if($(document).scrollTop() >= footerTop-700){
                  // $(".LTding").css("position","absolute").css("top","-60px");
                  $(".LTding").addClass('current');
            } else {
               $(".LTding").removeClass('current');
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
})


