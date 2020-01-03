$(()=>{
    $('.toggle-service-list').click(function(){
       if( $('.toggle-service-list .open-toggle-txt').hasClass('display')){
        $('.toggle-service-list  .open-toggle-txt').removeClass("display");
        $('.toggle-service-list .close-toggle-txt').addClass("display");
        $('.more-support').addClass('display')
       }else {
        $('.toggle-service-list .close-toggle-txt').removeClass("display");
        $('.toggle-service-list  .open-toggle-txt').addClass("display");
        $('.more-support').removeClass('display')
       }
        
    })
})