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
})
