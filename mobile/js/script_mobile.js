$(function() {
  // top-menu
  var selectedMenu = '.top-menu .selected';
  
  $(selectedMenu).click(function () {
    if (!$(this).hasClass('open')) {
      $(this).siblings('.sub-menu').slideDown(500);
      $(this).addClass('open');
    } else {
      $(this).siblings('.sub-menu').slideUp(500);
      $(this).removeClass('open');
    }
  });

  // tab-body
  function activeTabBody() {
    console.log()
  }

  // tab
  var tabBtn = '.btn-wrap-tab .btn';
  $(tabBtn).click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
    const btnIdx = $(this).index();
    console.log(btnIdx)
    $(this).parents().siblings('.tab-body').hide()
    $(this).parents().siblings('.tab-body').eq(btnIdx).show()
    
  })

  // tab-header
  var tabBtnHeader = '.btn-wrap-tab .header';
  $(tabBtnHeader).click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

  // swiper
  var swiper = new Swiper('.swiper-area.default', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  })

  // swiper
  var swiper = new Swiper('.swiper-area.tab', {
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: 'true',
  })

  // pagintion
  const pagination = $('.pagination .num-page');

  $(pagination).find('.num').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })
})
