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

  // tab
  var tabBtn = '.btn-wrap-tab .btn';
  $(tabBtn).click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

  // tab-header
  var tabBtn = '.btn-wrap-tab .header';
  $(tabBtn).click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  })

  // swiper
  var swiper = new Swiper('.swiper-area', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  })
})
