/**
 * Created by Administrator on 2017/7/14.
 */

$(function () {
//下拉框选择年份
    $('[name="nice-select"]').click(function(e){
        $('[name="nice-select"]').find('ul').hide();
        $(this).find('ul').show();
        e.stopPropagation();
    });

    $('[name="nice-select"] li').hover(function(e){
        $(this).toggleClass('on');
        e.stopPropagation();
    });


    $('[name="nice-select"] li').click(function(e){
        var val = $(this).text();
        //判断
        var myDate=new Date();
        var year=myDate.getFullYear();
        //console.log(year);
        var value=$(this).html();
        //console.log(value);
        if(value<=year){
            $(this).parents('[name="nice-select"]').find('input').val(val);
            $('[name="nice-select"] ul').hide();
            e.stopPropagation();
        }
        else{
            alert('您选择的年份还没到呢客官！！')
        }
    });


    $(document).click(function(){
        $('[name="nice-select"] ul').hide();
    });



    //按月详情
    var flag=true;
    $('.month').on('click',function () {
            if(flag) {
                $(this).closest('.all').find('.detail3').show(200).css("display", "block");
                flag=false;
                $(this).find('.list').attr("src","img/list2.png");
            }
            else{
                $(this).closest('.all').find('.detail3').hide(200).css("display", "none");
                flag=true;
                $(this).find('.list').attr("src","img/list.png");
            }

    })
    
    //冻结佣金弹窗
    $('.dongjie').on('click',function () {
        $('.alert10').css('display','block');
        $('.black2').css('display','block');
    })

    //确定
    $('.title3').on('click',function () {
        $('.alert10').css('display','none');
        $('.black2').css('display','none');
    })


    //提现
    $('.text10').on('click',function(){
        $('.alert11').css('display','block');
        $('.black2').css('display','block');
    })


    //确定  成功失败 弹窗
    $('.title5').on('click',function(){
        if($('.shuru').val()!='') {
            $('.alert11').css('display', 'none');
            $('.black2').css('display', 'none');
            var m1 = parseInt($('.shuru').val());
            var m2 = parseInt($('.title-keyong span').html());
            if (m1 <= m2) {
                $('.alert13').css('display', 'block');
                $('.black2').css('display', 'block');
                $('.alert12').css('display', 'none');
            }
            else {
                $('.alert12').css('display', 'block');
                $('.alert13').css('display', 'none');
                $('.black2').css('display', 'block');
            }

        }
    })


    $('.title6').on('click',function () {
        $('.alert12').css('display','none');
        $('.black2').css('display','none');
    })

    $('.title7').on('click',function () {
        $('.alert13').css('display','none');
        $('.black2').css('display','none');
    })
})
