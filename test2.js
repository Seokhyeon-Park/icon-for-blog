"use strict"

// 실행
$(function(){
    // 모달 오픈 (show)
    $(document).on('click', '.modalBtn', function(){
        $('#modalArea').modal('show');
    });
    
    // 모달 종료 (hide)
    $(document).on('click', '#closeBtn', function(){
        $('#modalArea').modal('hide');
    });
})
