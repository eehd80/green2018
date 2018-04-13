//$(function(){})
$(function(){
  
  //slidemenu
  $('.menu_depth1>li').mouseover(function(){
      $(this).children('.menu_depth2').stop().slideDown();
  });
    $('.menu_depth1>li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    });
    
    //main slide
    
    
    
    // banner layer popup
    $('.col3 a').click(function(){
        $('#modal').addClass('on');
    })
    $('#modal button').click(function(){
        $('#modal').removeClass('on');
    })
    
    // a링크 마우스 오버시 효과
    $('a').focusin(function(){
        $(this).css('color','#F00');
    });
    $('a').focusout(function(){
        $(this).css('color','inherit');
    });    
    
});