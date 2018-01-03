$(function () {

    //设置为默认地址
    $('.default').bind('click',function () {
        $(this).css('display','none');
        $(this).closest('.paragraph').find('.test').css('display','block');
        $(this).closest('.paragraph').siblings('.paragraph').find('.default').css('display','block');
        $(this).closest('.paragraph').siblings('.paragraph').find('.test').css('display','none');
    })

    //取数据
    var localstroage = window.localStorage;
    var name=localStorage.getItem('name');
    var phone=localStorage.getItem('phone');
    var address=localStorage.getItem('address');
    $('.left').html(name);
    $('.right').html(phone);
    $('.paragraph-text2').html(address);

    //修改
    $('.modify').bind('click',function () {
        window.location.href="address.html";

    })
    //删除
    $('.delete').bind('click',function () {
        $(this).closest('.paragraph').remove();
        if($('.delete').length ==0){
            $('.add').css('display','none');
        }
    })

    //添加新地址
    $('.add').bind('click',function () {
        // 跳转
        // window.location.href="address.html";

        //改变默认样式
        $('.default').css('display','block');
        $('.test').css('display','none');

        //动态添加
        var ul = '<div class="paragraph" style="margin-top:0;"><div class="paragraph-text1"><div class="left">' + name + '</div><div class="right">' + phone + '</div></div><div class="paragraph-text2">' + address + '</div><div class="black"></div><div class="paragraph-text3"><div class="default"><ul><li>设置默认</li><li>地址</li></ul></div><div class="modify">修改</div><div class="delete">删除</div><div class="test">默认地址</div></div></div>';
        $(ul).insertBefore($('.add'));
    })

    //动态绑定元素
    //修改
    $(document).on("click",".modify",function(){
        window.location.href="address.html";
    })

    //删除
    $(document).on("click",".delete",function(){
        $(this).closest('.paragraph').remove();
        if($('.delete').length ==0){
            $('.add').css('display','none');
        }
    })

    //默认地址
    $(document).on("click",".default",function(){
        $(this).css('display','none');
        $(this).closest('.paragraph').find('.test').css('display','block');
        $(this).closest('.paragraph').siblings('.paragraph').find('.default').css('display','block');
        $(this).closest('.paragraph').siblings('.paragraph').find('.test').css('display','none');
    })

})
