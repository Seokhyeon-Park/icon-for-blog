// 실행
$(function(){
    const content = "에디터 내용 입니다.";

    const myEditor = $('#editor').trumbowyg({
        lang: 'ko',
        imageWidthModalEdit: true,
        /**
         * [btnsDef]
         *  - 커스텀 버튼
         */
        btnsDef: {
            refresh: {
                fn: function(){
                    console.log("refresh!");
                    const content = myEditor.html();
                    myEditor.html(content);
                },
                tag: 'refreshTag',
                title: '새로고침',
            },
        },
        btns: [
            ['fontsize'],
            ['viewHTML'],
            // ['undo', 'redo'], // Only supported in Blink browsers
            ['formatting'],
            ['strong', 'em', 'del'],
            ['superscript', 'subscript'],
            ['link'],
            // ['insertImage'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen'],
            ['refresh'],
            ['imgController']
        ],
        plugins: {
            fontsize: {
                sizeList: [
                    '6px',
                    '8px',
                    '9px',
                    '10px',
                    '12px',
                    '14px',
                    '16px',
                    '18px',
                    '20px',
                    '22px',
                    '24px',
                    '26px',
                    '28px',
                    '30px',
                ]
            }
        }
    });
    
    // 에디터를 최대 화면으로
    $('#editor').trumbowyg('execCmd', {cmd: 'fullscreen'});
    $('#editor').trumbowyg('html', content);

    // 새로고침 버튼 이미지(btnsDef에서 기본적으로 제공하는 아이콘 등록 방법이 있음, 나는 그냥 직접 바꿨다.)
    $('.trumbowyg-refresh-button ').children().remove();
    $('.trumbowyg-refresh-button ').append(`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
        </svg>
    `);
})