/**
 * Created by dsh on 2017/7/11.
 */
$(function () {
    //选项卡
    $('.tab ul li').not('#all').on('click',function(){
        $(this).css({'color':'#ffb607','borderBottom':'3px solid #ffb607'}).siblings().css({'color':'#000000','borderBottom':'none'});
        $('div').filter('.tab2').eq($(this).index()-1).css('display','block').siblings('.tab2').css('display','none');
    })
    $('#all').on('click',function(){
        $(this).css({'color':'#ffb607','borderBottom':'3px solid #ffb607'}).siblings().css({'color':'#000000','borderBottom':'none'});
        $('.tab2').css('display','block');
    })

    //付款
    $('.right').on('click',function(){
        if($(this).closest('.car-goods').find('.shopCheck').prop("checked") == true){
            window.location.href='page.html';
        }
        else{
            alert('您还未选中店铺按钮！请先选中再付款');
        }
    })

    //取消订单

    $('.left').on('click',function(){
        $(this).closest('.car-goods').remove();
        if($(this).closest('.car-goods').length==1){
            $('.code').css('display','none');
        }
    })

    //弹窗
    $('.time').on('click',function () {
        $('.alert2').css('display','block');
        $('.black2').css('display','block');


    })

    //弹窗关闭
    //取消
    $('.xiao').on('click',function(){
        $('.alert2').css('display','none');
        $('.black2').css('display','none');
    })

    //确定加7天
    $('.ding').on('click',function(){
        $('.alert2').css('display','none');
        $('.black2').css('display','none');
    })

    //撤销申请
    $('.delete').on('click',function(){
         $(this).closest('.car-goods').remove();
    })

    //联系客服
    $('.contat').on('click',function(){
        $('.alert3').css('display','block');
        $('.black2').css('display','block');
    })

    //确定
    $('.confirm2').on('click',function(){
        $('.alert3').css('display','none');
        $('.black2').css('display','none');
    })
})
