$(function () {
// 메뉴 액션
  $(".menu_depth1>li").mouseover(function(){
    $(this).children(".menu_depth2").stop().slideDown();
  });
  $(".menu_depth1>li").mouseleave(function(){
    $(this).children(".menu_depth2").stop().slideUp();
  });
})