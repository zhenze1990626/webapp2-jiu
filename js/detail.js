
/**
 * Created by Administrator on 2017/7/4.
 */
$(function(){

    $('.common').on('click',function(){
     $('.alert').css('display','block');
     $('.black').css('display','block');
    })

    //删除
    $('.cha').on('click',function(){
        $('.alert').css('display','none');
        $('.black').css('display','none');
    })

    //点击换色
    $('.cite2 li').on('click',function(){
        $(this).css({'background':'#ff7007','color':'#ffffff'});
        $(this).siblings().css({'background':'#f5f5f5','color':'#000000'});
    })


    $('#cite1 li').on('click',function(){
        var m=$(this).html();
        $('.style').html(m);
        var style=m;
        localStorage.setItem('b',$('.style').html());
    })

    $('#cite2 li').on('click',function(){
        var m=$(this).html();
        $('.name').html(m);
        localStorage.setItem('a',$('.name').html());
    })


    //设置数据
    $('.left').on('click',function(){
        var localstroage = window.localStorage;
        localStorage.setItem('c',$('.text').html());
        localStorage.setItem('d',$('.cicle3').html());
        localStorage.setItem('e',$('.color span').html());
    })


    //数量减
    $(".decreate").on('click',function() {
        var t = $(this).next();
        t.text(parseInt(t.text()) - 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        localStorage.setItem('f',$('.texts').html());
    });
    // 数量加
    $(".add2").on('click',function() {
        var t = $(this).prev();
        t.text(parseInt(t.text()) + 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        localStorage.setItem('f',$('.texts').html());
    });
})