

$(()=>{
    //当input盒子获取焦点时,border-bottom变红2px
    $('.input_red').focus(function(){

        
        $(this).css('border-bottom', ' 2px solid #dc1e32')
    })
    .on('blur',function(){
        $(this).css('border-bottom', ' 1px solid #ccc')
    })
})