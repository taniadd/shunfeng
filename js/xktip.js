window.addEventListener('load',function(){
    var tip = document.querySelector('.tip')
    var footer = document.querySelector('.footer')
    

    document.addEventListener('scroll',function(){
        if (window.pageYOffset > 100) {
            tip.style.display = 'block'
        } else {
            tip.style.display = 'none'
        }

        // 当前视口窗的高度
        var h = document.documentElement.clientHeight;
        console.log(h);
        
        // footer到页面顶部的距离
        var h1 = footer.offsetTop;
        console.log(h1);
            
        // 页面被卷去的高度
        var h2 = window.pageYOffset;
        console.log(h2);
        
        if(h1 - h2 < h) {
            tip.style.position = 'absolute';
            tip.style.right = 0;
        }else {
            tip.style.position = 'fixed';
            tip.style.right = '110px';
        }

        tip.addEventListener('click',function(){
            // document.body.scrollTop = document.documentElement.scrollTop = 0
            // 平滑返回顶部
             window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
        })
        // function animate(){
           
        // }
  })
   
})