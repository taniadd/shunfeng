$(()=>{
    $(".order-button").hover(function(){
        $(this).stop().animate({paddingLeft:15,paddingRight:15},300).find(".arrow").stop().animate({opacity:1},600)
    },function(){
        $(this).stop().animate({paddingLeft:0,paddingRight:0},300).find(".arrow").stop().animate({opacity:0},600)
       
    }  )


    // <!-- tab栏切换JavaScript代码 -->
        class Tab {
            constructor(id) {
                this.main = document.querySelector(id);
                this.ul = this.main.querySelector('.package-tab');
                this.fsection = this.main.querySelector('.package-tab-content')
                this.init();
            }
            init() {
                this.updateNode();
                // init 初始化操作让相关的元素绑定事件
                for (var i = 0; i < this.lis.length; i++) {
                    this.lis[i].index = i;
                    this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);

                }
            }

            //更新功能
            updateNode() {
                this.lis = this.ul.querySelectorAll('span');
                this.sections = this.fsection.querySelectorAll('.tab-list');
            }
            //切换功能
            toggleTab(that) {
                that.clearClass();
                this.style.color = '#dc1e32';
                this.style.borderBottom=' 2px solid  #dc1e32';
                that.sections[this.index].style.display = 'block';
            }
            //清除当前类
            clearClass() {
                for (var i = 0; i < this.lis.length; i++) {
                    this.lis[i].style.color='#606060';
                    this.lis[i].style.borderBottom = ' 2px solid transparent';
                    this.sections[i].style.display = 'none';
                }
            }


        }
        new Tab('#tab1')

})