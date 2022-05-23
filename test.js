// 실행
$(function(){
    $(document).on('click', '.btn', function(){
        $(`#${$(this).attr('data-frame')}`).attr("src", `./${$(this).attr('data-frame')}.html`);

        for(let ele of $('.btn')){
            if($(`#${$(ele).attr('data-frame')}`).hasClass('d-none')){
                $(`#${$(ele).attr('data-frame')}`).removeClass('d-none');
            }
            $(`#${$(ele).attr('data-frame')}`).addClass('d-none');
        }

        $(`#${$(this).attr('data-frame')}`).removeClass('d-none');

        
    });

})

// btn-primary
// btn-secondary
