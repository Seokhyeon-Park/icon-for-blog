"use strict"


// 실행
$(function(){
    $(document).on('click', '#testBtn', function(){
        $('#testDiv').text(("gm3259239592390589203582385").match(/[0-9]{0,13}$/));
    });
})
