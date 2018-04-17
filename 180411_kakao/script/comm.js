$(function () {
    //menu
    $('.menu_depth1>li').mouseover(function () {
        $(this).children('.menu_depth2').stop().slideDown();
    });
    $('.menu_depth1>li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    });
    
    //
    
});