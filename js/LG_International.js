$(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(); //页面滚动的距离
        if (scrollTop < 50) {
            $(".box").fadeOut();
        } else {
            $(".box").fadeIn();
        }


        if (scrollTop > 780) {
            $(".box").removeClass("box_mixbox")
         $(".box").addClass("box_minbox")
            

          }else{
            $(".box").addClass("box_mixbox")
              $(".box").removeClass("box_minbox")
            
          }


          if(scrollTop >590) {
            $(".tabs_nav").addClass("tabs_nav_ul_two")
          }else{
            $(".tabs_nav").removeClass("tabs_nav_ul_two")
          }
    });
    let box = document.querySelector(".box")
    box.onclick = function () {
        var timer=null;
        timer = setInterval(() => {
            
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            scrollTo(0,oTop-10);
            if(oTop<=0){
                clearInterval(timer);
                return
            }
        }, 20);
    }



    $(".tabs_nav_ul>li").mouseover(function(){
        // $(this)  当前元素  不要加引号
        // show()  显示元素  hide()  隐藏元素
        $(this).children("ul").show();
    });
    $(".tabs_nav_ul>li").mouseout(function(){
        $(this).children("ul").hide();
    });
})