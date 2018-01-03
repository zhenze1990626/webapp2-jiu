/**
 * Created by Administrator on 2017/7/12.
 */
$(function () {
    //点击推广
    $('.tuiguang').on('click',function () {

        $('.black3').css('display','block');
        $('.alert10').css('display','block');
    })

    //点击确定
    $('.title3').on('click',function () {
        $('.black3').css('display','none');
        $('.alert10').css('display','none');
    })
})