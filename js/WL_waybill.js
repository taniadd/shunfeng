$(() => {
    $(".order-button").hover(function () {
        $(this).stop().animate({ paddingLeft: 15, paddingRight: 15 }, 300).find(".arrow").stop().animate({ opacity: 1 }, 600)
    }, function () {
        $(this).stop().animate({ paddingLeft: 0, paddingRight: 0 }, 300).find(".arrow").stop().animate({ opacity: 0 }, 600)

    })

    $(".order-button-wrapper").click(function () {
        location.href = '/shunfeng/WL_quick'
    })

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
            this.style.borderBottom = ' 2px solid  #dc1e32';
            that.sections[this.index].style.display = 'block';
        }
        //清除当前类
        clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].style.color = '#606060';
                this.lis[i].style.borderBottom = ' 2px solid transparent';
                this.sections[i].style.display = 'none';
            }
        }


    }
    new Tab('#tab1')

    $(window).on('scroll', function (e) {
        let distance = $('.quick_header_nav').offset().top;
        if ($(document).scrollTop() > distance) {

            $('.return_to').fadeIn();
        } else {

            $('.return_to').fadeOut();
        }
        let botton = $('.footer').offset().top - 650
        if ($(document).scrollTop() > botton) {
            console.log(12);
            $('.return_to').css('position', 'absolute').css('top', '0');
            console.log('123');
        } else if ($(document).scrollTop() < botton) {
            $('.return_to').css('position', 'fixed').css('top', '100%');
        }
    })
    $('.return_to').on('click', function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })

    $('.order-again').on('click', function () {
        location.href = "/shunfeng/WL_quick"
    })
    //查询运单
    $('.search-button').on("click", function () {
        var searchnum = $(".search-input").val();
        if (searchnum == '') {
            location.href = '/shunfeng/WL_waybill'
        } else {
            location.href = "/shunfeng/WL_waybill?num=" + searchnum
        }
    })


    //删除运单
    $(".clear-list-wrap  ").on("click", function () {

        var res = confirm("请问是否要删除这个运单?");


        if (res) {

            //获取点击的i标签中的自定义属性data-id
            var id = $(this).attr("data-id");
            // alert("需要删除的用户的id是："+id);
            location.href = "/shunfeng/delete?id=" + id;
        }
    })
   //删除搜索框运单号
   $(".icon-shanchu").click(function(){
       $(this).parent().siblings(".search-input").val("")
   })

})