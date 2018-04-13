//$(function(조건문){실행문})

$(function(){
    
    //menu
    $('.menu_depth1>li').mouseover(function(){
        $(this).children('.menu_depth2').stop().slideDown();
    });
    $('.menu_depth1>li').mouseleave(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    })
    
    // main sldie
    var now = 1;
    var max = 3;
    var width = $('.slideimg li').width();
    
    var slide = setInterval(function(){
        if(now<max){
            $('.slideimg>ul').animate({
                left:(now*width*(-1))+'px'
            },600);
            now++;
        }else{
           $('.slideimg>ul').animate({
               left:'0'
           },600);
            now=1;
        }
    },2000);
    
    
    // banner layer popup
    $('.col3>a').click(function(){
        $('#modal').addClass('on');
    });
    $('#modal button').click(function(){
        $('#modal').removeClass('on');
    });
    
    //a링크 마우스 오버시
    $('a').focusin(function(){
        $(this).css('color','#f00');
    });
    $('a').focusout(function(){
        $(this).css('color','inherit');
    });
  
});
