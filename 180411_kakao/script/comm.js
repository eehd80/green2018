$(function () {
    //menu
    $('.menu_depth1>li').mouseover(function () {
        $(this).children('.menu_depth2').stop().slideDown();
    });
    $('.menu_depth1>li').mouseout(function(){
        $(this).children('.menu_depth2').stop().slideUp();
    });
    
    //
    var now = 1;
    var max = 3;
    var width = 1000;

    dd
});