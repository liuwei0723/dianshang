
window.addEventListener('load',function(){
    //初始化分类左侧的滑动 限制了是初始化分类左侧的滑动效果 传入category-right里面的轮播图大容器选择器
    new Swiper('.category-left .swiper-container', {
        direction: 'vertical',//垂直滚动
        //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
        slidesPerView: 'auto',
        //开启回弹效果
        freeMode: true,//是否添加滑动的惯性
        // mousewheel: true, //支持鼠标滚轮
    });

    new Swiper('.category-right .swiper-container', {
        direction: 'vertical',
        //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
        slidesPerView: 'auto',
        //开启回弹效果
        freeMode: true,
        //初始化滚动条  必须子元素的高度超过父元素
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
        // mousewheel: true,
    });


    // 获取所有li添加点击事件
    var lis = document.querySelectorAll('.category-left li');
    var liHeight = lis[0].offsetHeight;
    // 获取分类左侧的swiper-wrapper 真正滑动的元素
    var swiperWrapper = document.querySelector('.category-left .swiper-wrapper');

    //计算最小的位置距离   父容器高度 - 子容器高度
    var parent = document.querySelector('.swiper-container');

    var children = document.querySelector('.swiper-slide');

    var minTranslateY = parent.offsetHeight - children.offsetHeight;
    // console.log(minTranslateY);


    for(var i = 0 ; i<lis.length; i++){
        // // js对象添加属性
        // lis[i].index = i ;
        // //添加标签属性
        // lis[i].setAttr

        lis[i].dataset['index']= i;
        lis[i].addEventListener('click',function(){

            var translateY = -(this.dataset['index']*liHeight);
            console.log(translateY);
            // 在设置位移之前判断当前位移的距离 是否小于最小的位置距离
            if(translateY < minTranslateY){
                translateY = minTranslateY;
            }
            // 给swiperWrapper 设置位移
            swiperWrapper.style.transform = 'translate3d(0px,' + translateY + 'px,0px)';
            // 设置一个过渡效果 慢慢位移
            swiperWrapper.style.transition = 'all 0.2s';
            // 先删除所有人 active 给当前点击添加 active
            for(var j = 0; j<lis.length;j++){
                lis[j].classList.remove('active');
            }
            this.classList.add('active');
        })
    }

})



