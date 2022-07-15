var main_slide = {
    init(){
        var len = $('.main-slide .swiper-slide').length;
        if(len>1){
            new Swiper(".main-slide", {
                loop:true,
                speed:1000,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: '.main-slide-pagination',
                    type: 'fraction',
                  },
            });
        }
    }
}

var main_banner = {
    init(){
        var len = $('.banner-slide .swiper-slide').length;
        if(len>1){
            new Swiper(".banner-slide", {
                loop:true,
                speed:700,
                autoplay: {
                    delay: 4000,
                },
                pagination: {
                    el: '.banner-slide-pagination',
                    type: 'bullets',
                  },
            });
        }

        $('.main-board .board-tabs button').click(function(){
            var i = $(this).parent().index();
            $('.main-board .board-tabs button.cur').removeClass('cur');
            $(this).addClass('cur');
            $('.main-board .board-contents .board-item').eq(i).addClass('cur').siblings('.board-item').removeClass('cur');
        })
    }
}

var eye_number = {
    init(){
        // mainSwiper2
        new Swiper('.s-eye-slide', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows : true
            }
            
        });
    }
}


$(function(){
    main_slide.init();
    main_banner.init();
    eye_number.init();
})
