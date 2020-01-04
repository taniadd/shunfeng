window.addEventListener('load',function(){
    // 动画封装函数
    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()
    
        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + 'px';
    
        }, 15);
    }
    // 动画封装函数结束

    // banner轮播图开始
    var bannerWidt = document.querySelector('.bannerWidt');
    var bannerWidth = bannerWidt.offsetWidth;
    var bannerImg = document.querySelector('.banner_img');
    console.log(bannerImg);
    
    var banenr_splot = document.querySelector('.banner_splot'); 
    var bannerRight = document.querySelector('.banner_left')
    for( var i = 0; i < bannerImg.children.length; i++){
        // console.log(bannerImg.children);
        
        //创建节点
        var splotLis =  document.createElement('li');
        //创建自定义属性
        splotLis.setAttribute('data-index',i);
        // console.log(splotLis);
        //获取节点
        banenr_splot.appendChild(splotLis);
        splotLis.addEventListener('click',function(){
            for(var i = 0; i < banenr_splot.children.length; i++){
                banenr_splot.children[i].className = '';
            }
            this.className = 'banner_splot_curr';
            //切换小圆点的时候，图片自动切换
            var dataIndex = this.getAttribute('data-index');
            console.log(dataIndex); 
            num = dataIndex;  
            circle = dataIndex;           
            animate(bannerImg, -dataIndex * bannerWidth);
            // console.log( animate(bannerImg, -dataIndex * bannerWidth));
            

        });
        banenr_splot.style.marginLeft = -banenr_splot.offsetWidth/2 + 'px'; 
    }
     //第一个小圆圈的颜色
     banenr_splot.children[0].className = 'banner_splot_curr';
     //克隆元素
     var first = bannerImg.children[0].cloneNode(true);
     bannerImg.appendChild(first);
     //小圆点函数封装
     function changCircle(){
         for( var i = 0; i < banenr_splot.children.length; i++){
            banenr_splot.children[i].className = '';
         }
         banenr_splot.children[circle].className = 'banner_splot_curr';
     }
    // 右侧
    var num = 0; //图片
    var circle = 0;//小圆点
    var flag = true; // 节阀流
    bannerRight.addEventListener('click',function(){
        if(flag){
            flag = false;
            if(num == bannerImg.children.length - 1){
                bannerImg.style.left = 0;
                num = 0;
            }
            num++;
            // animate(bannerImg, -dataIndex * bannerWidth);

            animate(bannerImg, -num * bannerWidth,function(){
                flag = true;
            });
            circle++;
            if(circle == banenr_splot.children.length ){
                circle = 0;
            }
            changCircle();
        }   
    });
    //定时器
    var timer = setInterval(function(){
        bannerRight.click();
        
    },5000); 
    // banner轮播图结束

    // banner图上面的温馨提醒和意见反馈动画
    var warmTips = document.querySelector('.warm_tips');
    var banner = document.querySelector('.banner');
    var warmImg = document.querySelector('.warm_tips_img');
    var warmTitle = document.querySelector('.warm_tips_tit');
    var advices = document.querySelector('.addvices');
    var warmImgWidth = warmImg.offsetWidth;
    var warmTitleWidth = warmTitle.offsetWidth
    var bannerWidth = banner.offsetWidth;
    var targetWidth = bannerWidth - (warmImgWidth + warmTitleWidth);
    warmTips.addEventListener('mouseenter',function(){
        animate(warmTips,targetWidth);
    });
     warmTips.addEventListener('mouseleave',function(){
        animate(warmTips,bannerWidth-warmImgWidth);
    });
    advices.addEventListener('mouseenter',function(){
        animate(advices,targetWidth);
    });
    advices.addEventListener('mouseleave',function(){
        animate(advices,bannerWidth-warmImgWidth);
    });


    // 运单查询开始
    // var bill = document.querySelector('.bill_search');
    // var billInput = bill.querySelector('input');
    // // console.log(billInput);
    // billInput.addEventListener('click',function(){
    //     billInput.type = 'te'
    // })
    
    // 运单查询结束
 

})