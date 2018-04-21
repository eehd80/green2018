// 배너 팝업창 띄우기
$(".col3 img").click(function(){
  $("#model").addClass("active");
})
$("#model button").click(function(){
  $("#model").removeClass("active");
})

// a링크 클릭시 색깔 바뀜
$("a").focusin(function(){
  $(this).css("color","#f00");
})
$("a").focusout(function(){
  $(this).css("color","inherit");
})

// 메뉴 액션
$(".nav>li").mouseover(function(){
  $(this).children(".submenu").stop().slideDown();
});
$(".nav>li").mouseleave(function(){
  $(this).children(".submenu").stop().slideUp();
});

//이미지 슬라이드
start();
var imgs = 1;
var now = 0;
function start(){
  $(".main_images>img").eq(0).siblings().css({"margin-left":"-2000px"});
  setInterval(function(){slide();},2000);
}
function slide(){
  now = now==imgs?0:now+=1;
  $(".main_images>img").eq(now-1).css({"margin-left":"-2000px"});  
  $(".main_images>img").eq(now).css({"margin-left":"0px"});
}