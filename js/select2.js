/**
 * Created by Administrator on 2017/7/15.
 */
$(function () {
//下拉框选择年份
    $('[name="nice-select2"]').click(function (e) {
        $('[name="nice-select2"]').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });

    // $('[name="nice-select"] li').hover(function (e) {
    //     $(this).toggleClass('on');
    //     e.stopPropagation();
    // });


    $('[name="nice-select2"] li').click(function (e) {
            var val = $(this).text();
            $(this).parents('[name="nice-select2"]').find('input').val(val);
            $('[name="nice-select2"] ul').hide();
            e.stopPropagation();

    });


    $(document).click(function () {
        $('[name="nice-select2"] ul').hide();
    });
})