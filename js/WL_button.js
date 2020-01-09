$(()=>{
    $(".order-button").hover(function(){
        $(this).stop().animate({paddingLeft:15,paddingRight:15},300).find(".arrow").stop().animate({opacity:1},600)
    },function(){
        $(this).stop().animate({paddingLeft:0,paddingRight:0},300).find(".arrow").stop().animate({opacity:0},600)
       
    }  )
    $(".order-button-wrapper").click(function(){
        location.href='/shunfeng/WL_quick'
    })
})

