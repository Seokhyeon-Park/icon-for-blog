"use strict"


// 실행
$(function(){
    $(document).on('click', '#testBtn1', function(){
        const myAttr = $("#testDiv").attr("class");
        console.log("class1 ? : ", myAttr);
    });

    $(document).on('click', '#testBtn2', function(){
        $("#testDiv").attr("class", "addClass");
        console.log("class2 ? : ", $("#testDiv").attr("class"));
    });

    $(document).on('click', '#testBtn3', function(){
        $("#testDiv").removeAttr("class");
        console.log("class3 ? : ", $("#testDiv").attr("class"));
    });
})
