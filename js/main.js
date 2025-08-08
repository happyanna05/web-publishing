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

    let mouseCursor = document.getElementById("cursor");//지정된 ID와 일치하거나 일치하는 요소를 문서에서 발견해서 반환
    //let: 변수 재할당 해야 하는 경우에 그게 아니라면 대부분 const
    document.addEventListener("mousemove", cursor);
    function cursor(e) {
      mouseCursor.style.top = e.pageY + document.body.scrollTop + "px"; //스크롤시에 페이지의 상단의 위치값을 반환하거나 부여한다.
      mouseCursor.style.left = e.pageX + document.body.scrollLeft + "px";//스크롤시에 페이지의 좌측의 위치값을 반환하거나 부여한다.
    }
})
