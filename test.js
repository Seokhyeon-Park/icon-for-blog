"use strict"

/**
 * 입력 문자열이 날짜 형태인지를 반환
 * @param {string} date 
 * @param {string} pattern 날짜 Format yyyyMMddHHmmssSSS
 * @returns 
 */
 const isDate = (date, pattern) => {  
    if (date.length != pattern.length) {
       return false;
   }

   let patArr = pattern.split('');
   let datArr = date.split('');
   let yyyy = "";
   let mm = "";
   let dd = "";
   let hh = "";
   let mi = "";
   let ss = "";
   let sss = "";
   let idx = 0;

   for (let s of patArr) {
       if (s === "y") {
           yyyy += datArr[idx];
       } else if (s === "M") {
           mm += datArr[idx];
       } else if (s === "d") {
           dd += datArr[idx];
       } else if (s === "H") {
           hh += datArr[idx];
       } else if (s === "m") {
           mi += datArr[idx];
       } else if (s === "s") {
           ss += datArr[idx];
       } else if (s === "S") {
           sss += datArr[idx];
       } else {
           if (s !== datArr[idx]) {
               return false;
           }
       }
       idx++;
   }
   
   // 년과, 월이 없는 경우 윤달 여부로 인해 날자 형식 확인 불가
   if (yyyy === "") {
       return false;
   }
   if (mm === "") {
       return false;
   }
   if (hh === "") {
       hh = "01";
   }
   if (dd === "") {
       dd = "01";
   }
   if (mi === "") {
       mi = "01";
   }
   if (ss === "") {
       ss = "01";
   }
   if (sss === "") {
       sss = "01";
   }
   return !!Date.parse(yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + mi + ":" + ss + "." + sss + "Z");
}

// 실행
$(function(){
    let date =  isDate("19940905", "yyyyMMdd");
    console.log("isDate?", date);       // isDate? true

    
    $(document).on('click', '#testBtn', function(){
        
    });
})
