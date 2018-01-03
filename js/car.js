/**
 * Created by dsh on 2017/6/29.
 */
$(function(){
    // 点击商品按钮
    $(".goodsCheck").on('click',function() {
        var goods = $(this).closest(".car-goods").find(".goodsCheck"); //获取本店铺的所有商品
        var goodsC = $(this).closest(".car-goods").find(".goodsCheck:checked"); //获取本店铺所有被选中的商品
        var Shops = $(this).closest(".car-goods").find(".shopCheck"); //获取本店铺的全选按钮
        var allshops=$(this).closest('html').find('.goodsCheck:checked').length;
        $('.layout em').html(allshops);

        if(allshops==0){
            $('.layout em').html('');
        }
        if (goods.length == goodsC.length) { //如果选中的商品等于所有商品
            Shops.prop('checked', true); //店铺全选按钮被选中
            if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
                $("#AllCheck").prop('checked', true); //全选按钮被选中
                TotalPrice();
            } else {
                $("#AllCheck").prop('checked', false); //else全选按钮不被选中
                TotalPrice();
            }
        } else { //如果选中的商品不等于所有商品
            Shops.prop('checked', false); //店铺全选按钮不被选中
            $("#AllCheck").prop('checked', false); //全选按钮也不被选中
            // 计算
            TotalPrice();
        }
    });


    // 点击店铺按钮
    $(".shopCheck").on('click',function() {
        if ($(this).prop("checked") == true) { //如果店铺按钮被选中
            var allshops=$(this).closest('.car-goods').find('.goodsCheck').length;

            $(this).parents(".car-goods").find(".goods-check").prop('checked', true); //店铺内的所有商品按钮也被选中
            if ($(".shopCheck").length == $(".shopCheck:checked").length) { //如果店铺被选中的数量等于所有店铺的数量
                $("#AllCheck").prop('checked', true); //全选按钮被选中
                TotalPrice();
            } else {
                $("#AllCheck").prop('checked', false); //else全选按钮不被选中
                TotalPrice();
            }
        } else { //如果店铺按钮不被选中
            $('.layout em').html('');

            $(this).parents(".car-goods").find(".goods-check").prop('checked', false); //店铺内的所有商品也不被全选
            $("#AllCheck").prop('checked', false); //全选按钮也不被选中
            TotalPrice();
        }
    });



    // 点击全选按钮
    $("#AllCheck").on('click',function() {
        if ($(this).prop("checked") == true) { //如果全选按钮被选中
            $(".goods-check").prop('checked', true); //所有按钮都被选中
            var allshops=$(this).closest('html').find('.goodsCheck:checked').length;
            $('.layout em').html(allshops);

            TotalPrice();
        } else {
            $(".goods-check").prop('checked', false); //else所有按钮不全选
            $('.layout em').html('');
            TotalPrice();
        }
        $(".shopCheck").change(); //执行店铺全选的操作
    });



    //计算
    function TotalPrice() {
        var allprice = 0; //总价
        $(".car-goods").each(function() { //循环每个店铺
            var oprice = 0; //店铺总价
            $(this).find(".goodsCheck").each(function() { //循环店铺里面的商品
                if ($(this).is(":checked")) { //如果该商品被选中
                    var num = parseInt($(this).parents(".shop2").find(".number").text()); //得到商品的数量
                    var price = parseFloat($(this).parents(".shop2").find(".price2").text()); //得到商品的单价
                    var total = price * num; //计算单个商品的总价
                    oprice += total; //计算该店铺的总价
                }

            });
            var oneprice = parseFloat(oprice.toFixed(2)); //得到每个店铺的总价
            $(this).closest('.car-goods').find('.code2-text em').text(oneprice.toFixed(2));
            allprice += oneprice; //计算所有店铺的总价

        });

        $("#price").text(allprice.toFixed(2)); //输出全部总价

    }


    //编辑页面修改样式
    var flag=true;
    $('.write').on('click',function () {
        if(flag) {
            $(this).html("完成");
            $(this).closest('.car-goods').find('.detail').css('display', 'none');
            $(this).closest('.car-goods').find('.detail2').css('display', 'flex');
            flag=false;
            $('.text3').html($('.number').html());

        }

        else{
            $(this).html("编辑");
            $(this).closest('.car-goods').find('.detail').css('display', 'flex');
            $(this).closest('.car-goods').find('.detail2').css('display', 'none');
            flag=true;
            var jkl=$('.text4 span').html();
            var jkl2=$('.text4 em').html();
            $('.text span').html(jkl);
            $('.text em').html(jkl2);
        }

    })


    //总编辑修改样式
    $('.all-get').on('click',function(){
        if(flag){
            $(this).html('完成');
            $(this).closest('body').find('.car-goods').find('.detail').css('display', 'none');
            $(this).closest('body').find('.car-goods').find('.detail2').css('display', 'flex');
            flag=false;
            $('.write').html('');

        }
        else{
            $(this).html('编辑');
            $(this).closest('body').find('.car-goods').find('.detail').css('display', 'flex');
            $(this).closest('body').find('.car-goods').find('.detail2').css('display', 'none');
            flag=true;
            var jkl=$('.text4 span').html();
            var jkl2=$('.text4 em').html();
            $('.text span').html(jkl);
            $('.text em').html(jkl2);
            if($(this).html()=="编辑"){
                $('.write').html('编辑');
            }
        }
    })

    // 数量减
    $(".jian").on('click',function() {
        var t = $(this).parent().find('.text3');
        t.text(parseInt(t.text()) - 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        var m=$(this).siblings('.text3').html();
        $(this).closest('.shop2').find('.number').html(m);
        TotalPrice();
    });


    // 数量加
    $(".jia").on('click',function() {
        var t = $(this).parent().find('.text3');
        t.text(parseInt(t.text()) + 1);
        if (t.text() <= 1) {
            t.text(1);
        }
        var m=$(this).siblings('.text3').html();
        $(this).closest('.shop2').find('.number').html(m);
        TotalPrice();
    });


    //删除按钮
    $('.delete2').on('click',function () {
        //结算删除
        var m=$('body').find('.goodsCheck:checked').length;
        $('.layout em').html(m-1);

        //购物车删除
        var m=$('body').find('.goodsCheck').length;

        $('.car em').html(m-1);

        var m=$(this).closest('.shop2').find('.goodsCheck');
        var goods = $(this).closest(".car-goods").find(".shop2");
        if(goods.length-1==0){
            $(this).closest('.car-goods').find('.shop').remove();
        }
        var num=$(this).closest('body').find('.shop2');
       // console.log(num.length);
        if(num.length==1){
            //清空店铺并跳转
            $('.all-get').html('');
            window.location.href='empty.html';
        }
            $(this).closest(".shop2").remove();
        TotalPrice();
    })


    //弹框
    $('.greet').on('click',function greet(){
       $('.alert').css("display",'block');
       $('.black').css('display','block');
        //传价格
        var a=localStorage.getItem('a');
        var b=localStorage.getItem('b');
        $('.cicle-3 span').html(b);
        $('.cicle-3 em').html(a);
        var kl=$(this).closest('.shop2').find('.price2').html();
        $('.cicle-1 span').html(kl);
    })


    //删除
    $('.cha').on('click',function(){
        $('.alert').css('display','none');
        $('.black').css('display','none');
    })


    //点击换色
    $('#cite1 li').on('click',function(){
        $(this).css({'background':'#ff7007','color':'#ffffff'});
        $(this).siblings().css({'background':'#f5f5f5','color':'#000000'});
        var c=$(this).html();
        $('#all span').html(c);

    })

    $('#cite2 li').on('click',function(){
        $(this).css({'background':'#ff7007','color':'#ffffff'});
        $(this).siblings().css({'background':'#f5f5f5','color':'#000000'});
        var d=$(this).html();
        $('#all em').html(d);

    })


    //确定修改
    $('.geto').on('click',function(){
      $('.alert').css('display','none');
      $('.black').css('display','none');
      $('.text4 span').html($('#all span').html());
      $('.text4 em').html($('#all em').html());
        })


    //获取数据
    var localstroage = window.localStorage;
    var a=localStorage.getItem('a');
    var b=localStorage.getItem('b');
    var c=localStorage.getItem('c');
    var d=localStorage.getItem('d');
    var e=localStorage.getItem('e');
    var f=localStorage.getItem('f');
    $('.text span').html(b);
    $('.text em').html(a);
    $('.text4 span').html(b);
    $('.text4 em').html(a);
    $('.detail-title').html(d);
    $('.price2').html(e);
    $('.number').html(f);

    //获取购物车数量
    //console.log($(".goodsCheck").length);
    var num=$(".goodsCheck").length;
    $('.car em').html(num);

})




