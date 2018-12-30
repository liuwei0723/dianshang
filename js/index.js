

/* 推荐使用addEventListener的方式添加事件
    1.这个方式可以添加多个同类型的事件
    2.控制事件的触发顺序 冒泡 还是 捕获
    3.添加一些新的事件 移动端新的触摸事件 css一些动画事件 等等
*/
//添加一个load事件,等页面资源加载完毕触发
window.addEventListener('load',function(){
    //获取元素 querySelector querySelectorAll
    // 1.顶部搜索框背景色透明度渐变
        // 1.在滚动的时候获取滚动的距离
        // 2.获取轮播图的高度
        // 3.计算透明度值 = 滚动距离/轮播图的高度
        // 4.设置给透明背景色 rgba(红,绿,蓝,透明度值)
    //  1.获取轮播图的元素
    var slide = document.querySelector('#slide');
    // 2.获取轮播图的高度
    var slideHeight = slide.offsetHeight;

    var header = document.querySelector('#header');
    
    scrollOpacity();
    function scrollOpacity (){
        // 4.获取当前滚动的距离,做一个兼容性处理 短路运算符 前面成立返回前面的不成立返回后面的
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
        // 5. 计算透明度
        var opacity =scrollTop / slideHeight;
        console.log(opacity);
        //  6. 把透明度设置给头部的rgba的a 上
        header.style.backgroundColor = 'rgba(222,24,27,'+opacity + ')';
    }
// 3.添加一个滚动条滚动的事件
    window.addEventListener('scroll',scrollOpacity);
})

var spans = document.querySelectorAll('.down-time span:not(:nth-child(3n))');
console.log(spans);

var time = 2 * 60*60;
setTime();
function setTime(){
    if(time<=0){
        time = 7200;
    }
    var hour = Math.floor(time/3600);

    var minute = Math.floor(time%3600 /60);
    
    var second = time % 60 ;
    spans[0].innerHTML = Math.floor(hour/10); 
    spans[1].innerHTML = Math.floor(hour%10);
    spans[2].innerHTML = Math.floor(minute/10); 
    spans[3].innerHTML = Math.floor(minute%10);
    spans[4].innerHTML = Math.floor(second/10); 
    spans[5].innerHTML = Math.floor(second%10);
}
setInterval(function(){
    time--;
    setTime();
},1000)


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});