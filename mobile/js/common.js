var sidebar =  {
    init:function(){
        $('header .btn-sidebar-toggle').click(function(){
            $('body').addClass('hidden');
            $('#sidebar').addClass('on');
        })
        $('#sidebar .sidebar-close').click(function(){
            $('body').removeClass('hidden');
            $('#sidebar').removeClass('on');
        })
        $('#snb>ul>li>button').click(function(){
            $('#snb li.cur').removeClass('cur');
            $(this).parent().addClass('cur');
        });
    }
}

var fixed_banner = {
    init:function(){
        var len = $('.top-fixed-slide .swiper-slide').length;
        if(len>0){
            $('.top-fixed-banner').show();
            if(len>1){
                var slide = new Swiper(".top-fixed-slide", {
                    loop:true,
                    speed:700,
                    autoplay: {
                        delay: 3500,
                      },
                });
            }

            $('.top-fixed-banner .btn-close').click(function(){
                $('.top-fixed-banner').hide();
                $('#content').css({paddingTop:$('header').height()});
            });
        }
    }
}


$(function(){
    fixed_banner.init();
    sidebar.init();

    //language
    $('footer .language button').click(function(){
        $(this).siblings('.lang-list').slideToggle(300);
    })
})


$(window).scroll(function(){
     var top = $(this).scrollTop();
     (top >= 10)?$('body').addClass('header-fixed'):$('body').removeClass('header-fixed');
});