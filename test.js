"use strict"

// 실행
$(function(){
    // 방법 1
    // alert이 없을 때 버튼을 누르면 alert을 띄움
    // alert이 있을 때 버튼을 누르면 alert을 제거
    $(document).on('click', '#tBtn', function(){
        // if (alert에 d-none class가 있는 경우)
        if($('#tAlert').hasClass('d-none')){
            // d-none class 제거
            $('#tAlert').removeClass('d-none');
        }else{
            // d-none class 추가
            $('#tAlert').addClass('d-none');
        }
    });

    // 방법 2
    // 누르고 3초 뒤 alert 제거
    $(document).on('click', '#tBtn', function(){
        $('#tAlert').removeClass('d-none');
        setTimeout(function(){
            $('#tAlert').addClass('d-none');
        }, 3000);
    });
})
