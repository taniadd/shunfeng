window.addEventListener('load',function(){
    // 动画封装函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + 'px';
    
        }, 15);
    }
    // 动画封装函数结束

    // 返回顶部动画封装函数
    function animateTop(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()
        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }

    // banner轮播图开始
    var bannerWidt = document.querySelector('.bannerWidt');
    var bannerWidth = bannerWidt.offsetWidth;
    var bannerImg = document.querySelector('.banner_img');  
    // console.log(bannerImg);
    var banenr_splot = document.querySelector('.banner_splot'); 
    var bannerRight = document.querySelector('.banner_left')
    for( var i = 0; i < bannerImg.children.length; i++){
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
            // console.log(dataIndex); 
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
    // 当鼠标移入轮播图中的时候，自动播放取消
     bannerWidt.addEventListener('mouseover',function(){
        clearInterval(timer);
         timer = null;
     });
    // 当鼠标移入轮播图中的时候，自动播放取消
    bannerWidt.addEventListener('mouseleave',function(){ 
        //定时器
        timer = setInterval(function(){
            bannerRight.click();     
      },5000); 
     })
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
    var warmTitleWidth = warmTitle.offsetWidth;
    var warmWidth = banner.offsetWidth;
    var targetWidth = warmWidth - (warmImgWidth + warmTitleWidth);
    warmTips.addEventListener('mouseenter',function(){
        animate(warmTips,targetWidth);
    });
     warmTips.addEventListener('mouseleave',function(){
        animate(warmTips,warmWidth-warmImgWidth);
    });
    advices.addEventListener('mouseenter',function(){
        animate(advices,targetWidth);
    });
    advices.addEventListener('mouseleave',function(){
        animate(advices,warmWidth-warmImgWidth);
    });

    // 返回顶部按钮
    var backTop = document.querySelector('.back_top_img');
    var backHeight = document.querySelector('.content_new');
    // var contentTop = document.querySelector('.content_nav');
    document.addEventListener('scroll',function(){
        // console.log(window.pageYOffset);
        if(window.pageYOffset > banner.offsetTop && window.pageYOffset <= backHeight.offsetTop){  
            backTop.classList.add('back_top_img','fixed');
        } else { 
            console.log(111);
            backTop.classList.remove('fixed');
        }
    });
    backTop.addEventListener('click',function(){
         // 里面的x和y 不跟单位的 直接写数字即可
            // window.scroll(0, 0);
            // 因为是窗口滚动 所以对象是window
            animateTop(window, 0);
    });
    // 业务介绍tab栏切换开始
    var content_banner = document.querySelector('.content_banner_tit');
    var content_lis = content_banner.querySelectorAll('li');
    var content_banner_lis = document.querySelectorAll('.content_banner_lis');
    var content_a = content_lis.children
    for(var i = 0; i < content_lis.length; i++){
        content_lis[i].setAttribute('index',i);
        content_lis[i].addEventListener('click',function(){
            for(var i = 0; i < content_lis.length; i++){
                content_lis[i].className = '';
               
            }
            this.className = 'content_current';
            var index = this.getAttribute('index');
            for(var i = 0; i < content_banner_lis.length; i++){
                content_banner_lis[i].style.display = 'none';
            }
            content_banner_lis[index].style.display = 'block'
        })
    }
    // 业务介绍tab栏切换结束


    // 业务介绍轮播图开始
    // var box_content = document.querySelector('.box_content');
    // auto(box_content);
    // function auto(box){
        var contentWidth = document.querySelector('.content_bannerWidth');
        var contentWidt = contentWidth.offsetWidth;  
        var contentImg = document.querySelector('.content_img');
        var contentSplot = document.querySelector('.content_banner_splot'); 
        var contentRight = document.querySelector('.content_left');
        for( var i = 0; i < contentImg.children.length; i++){
            //创建节点
            var splotLiss =  document.createElement('li');
            //创建自定义属性
            splotLiss.setAttribute('data-indexs',i);
            // console.log(splotLis);
            //获取节点
            contentSplot.appendChild(splotLiss);
            splotLiss.addEventListener('click',function(){
                for(var i = 0; i < contentSplot.children.length; i++){
                    contentSplot.children[i].className = '';
                }
                this.className = 'banner_splot_curr';
                //切换小圆点的时候，图片自动切换
                var dataIndexs = this.getAttribute('data-indexs');
                // console.log(dataIndex);               
                nums = dataIndexs;  
                circles = dataIndexs;           
                animate(contentImg, -dataIndexs * contentWidt);
                 
                           
            });
            contentSplot.style.marginLeft = -contentSplot.offsetWidth/2 + 'px'; 
        }
         //第一个小圆圈的颜色
         contentSplot.children[0].className = 'banner_splot_curr';
         //克隆元素
         var firsts = contentImg.children[0].cloneNode(true);
         contentImg.appendChild(firsts);
         //小圆点函数封装
         function changCircles(){
             for( var i = 0; i < contentSplot.children.length; i++){
                contentSplot.children[i].className = '';
             }
            contentSplot.children[circles].className = 'banner_splot_curr';
         }
        // 当鼠标移入轮播图中的时候，自动播放取消
        contentWidth.addEventListener('mouseover',function(){
            clearInterval(timers);
            timers = null;
         });
        // 当鼠标移入轮播图中的时候，自动播放取消
        contentWidth.addEventListener('mouseleave',function(){
            //定时器
            timers = setInterval(function(){
                contentRight.click();     
          },5000); 
         })
        // // 右侧
        var nums = 0; //图片
        var circles = 0;//小圆点
        var flags = true; // 节阀流
        contentRight.addEventListener('click',function(){
            if(flags){
                flags = false;
                if(nums == contentImg.children.length - 1){
                    contentImg.style.left = 0;
                    nums = 0;
                }
                nums++;
                animate(contentImg, -nums * contentWidt,function(){
                    flags = true;
                });
                    
                circles++;
                if(circles == contentSplot.children.length ){
                    circles = 0;
                }
                changCircles();
            }   
        });
        //定时器
        var timers = setInterval(function(){
            contentRight.click();
            
        },5000); 


        var contentWidths = document.querySelector('.content_bannerWidths');
        console.log(contentWidths.offsetWidth);
        
        var contentImgs = document.querySelector('.content_img2');
        
        var contentSplots = document.querySelector('.content_banner_splots'); 
        var contentRights = document.querySelector('.content_left2');
       
    // 业务介绍轮播图结束

    


    // 运单查询开始
    // var bill = document.querySelector('.bill_search');
    // var billInput = bill.querySelector('input');
    // // console.log(billInput);
    // billInput.addEventListener('click',function(){
    //     billInput.type = 'te'
    // })
    
    // 运单查询结束
 

})