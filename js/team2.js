/**
 * Created by Administrator on 2017/7/13.
 */



$(function(){

    $('.tab div').on('click',function(){
        $(this).css('background','#f6c550').find('ul li').css('color','#ffffff');
        $(this).siblings().css('background','#ffffff').find('ul li').css('color','#f6c550');
        $('div').filter('.layout').eq($(this).index()).css('display','block').siblings('.layout').css('display','none');

    })


})