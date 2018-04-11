$(function () {

    // slide menu

    //.menu_depth1의 자식 중 li에게 마우스 오버시
    $('.menu_depth1>li').mouseover(function () {
        //this(.menu_depth1>li)의 자식인 .menu_depth2를 슬라이드 다운 시키시오 (모든 동작 중지)
        $(this).children('.menu_depth2').stop().slideDown();
    })
    //.menu_depth1의 자식 중 li에게 마우스 오버시
    $('.menu_depth1>li').mouseleave(function () {
        //this(.menu_depth1>li)의 자식인 .menu_depth2를 슬라이드 업 시키시오 (모든 동작 중지)
        $(this).children('.menu_depth2').stop().slideUp();
    })

    // main slide
    var now = 1; //현재 이미지를 now 변수에 지정
    var max = 3; //이미지의 갯수를 max 변수에 지정
    var width = 1000; //이미지 가로 사이즈 width 변수에 지정

    var slide = setInterval(function () { //이 명령을 실행할 때마다
        if(now<3){ //만약 현재 이미지의 위치(=now)가 1이나 2라면...
            $('.mainslide>ul').animate({ //.mainslide>ul에 애니메이션을 실행
                //left값을 (1*1000*-1=-1000px)/(2*1000*-1=-2000px)
                'left':(now*width*(-1))+'px' 
            },600); //0.6초 동안 실행
            now++; //now 변수를 1씩 더함
        }else{  //그 밖의 경우라면...
            $('.mainslide ul').animate({ //.mainslide>ul에 애니메이션을 실행
                'left':'0px' // left의 값을 0으로 지정
        },600); //0.6초 동안 실행
            now=1; //now의 변수를 1로 지정
        }
    },2000); // 이 기능을 2초마다 실행

    // banner layer popup
    $('.col3 a').click(function () { //.col a 를 클릭했을 때
        $('#modal').addClass('on'); //#modal에 on을 추가
    })
    $('#modal button').click(function () { //#modal button을 클릭했을 때
        $('#modal').removeClass('on'); //#modal에 on을 삭제
    })

    //a링크 마우스 오버시
    $("a").focusin(function(){ //a링크에 포커스인하면
        $(this).css("color","#F00") // 이것(a)의 폰트 컬러를 #F00으로 변경
    })
    $("a").focusout(function(){  //a링크에 포커스아웃하면
        $(this).css("color","inherit") // 이것(a)의 폰트 컬러를 기존 컬러로 변경
    })
  

})