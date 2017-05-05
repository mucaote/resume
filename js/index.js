(function () {
    //轮播图部分；
    var mySwiper1 = new Swiper('#swiper1', {
        loop: true,
        autoplay: 5000,
        direction : 'vertical',autoplayDisableOnInteraction: false,
        pagination: '#pagination1',
        paginationType: 'fraction',
        onTransitionEnd: function (swiper) {
            //swiper.slides; 获取的是一个对象数组 滑块的长度
            var slides = swiper.slides,
            //swiper.activeIndex 滑块当前的索引值
                curIndex = swiper.activeIndex,
            //所有滑块的长度
                total = slides.length,
                targetId = 'page';
            switch (curIndex) {
                case 0:
                    targetId += (total - 2);
                    break;
                case (total - 1):
                    targetId += 1;
                    break;
                default:
                    targetId += curIndex;
            }
            var aLis=document.getElementsByTagName('li');
            [].forEach.call(slides, function (item, index) {
                if (curIndex == index) {
                    item.id = targetId;
                    console.log(targetId)
                } else {
                    item.id = null;
                }
            });
        }
    });

    //audio,music部分；
    var oMusic=document.getElementById('music'),

        audioMusic=document.getElementById('audioMusic');
    window.setTimeout(function(){
        audioMusic.play();
        oMusic.style.opacity=1;
        audioMusic.addEventListener('canplay',function(){
            oMusic.className='music musicMove';
        },false)
    },1000);
    oMusic.onclick=function(){
        if(audioMusic.paused){
            audioMusic.play();
            oMusic.className='music musicMove';
        }else{
            audioMusic.pause();
            oMusic.className='music';

        }
    };
})();