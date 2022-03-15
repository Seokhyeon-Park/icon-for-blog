"use strict"

// 실행
$(*function(){
    $(document).on('click', '#testBtn', function(){
        const arr = [1, 2, 3, 4, 5];

        // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
        // 배열.reduce의 두 번째 요소인 0은 초깃값 (적지 않으면 첫번째 인덱스 값을 가리킴)
        // 배열.reduceRight 은 요소를 반대로 순회함
        // let result = arr.reduce((acc, cur, i, d) => {
        //     console.log("누적값 : ", acc, " 현잿값 : ", cur, " 인덱스 : ", i, " 요소 : ", d);
        //     return acc + cur;
        // }, 0);

        let result = arr.reduce((acc, cur, i, d) => {
            console.log("누적값 : ", acc, " 현잿값 : ", cur, " 인덱스 : ", i, " 요소 : ", d);
            // return acc + cur;
            if (cur % 2) acc.push(cur);
            return acc;
        }, []);

        console.log("result : ", result);
    });
})
