$(function () {
  $(".tab_menu li").click(function () {
    $(".tab_menu li").removeClass("active");
    $(this).addClass("active");
    const sub_con = $(this).data('title');
    $(".sub01_con").hide();
    $('#' + sub_con).show();
  });
    
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.btn_top').fadeIn();
    } else {
      $('.btn_top').fadeOut();
    }
  });
  $('.btn_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
  });
})