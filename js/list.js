   /**
    * Created by Administrator on 2017/6/29.
    */
   $(function(){
       var flag=true;
       $('.list').on("click",function(){
           if(flag) {
               $('.list2').show(200).css("display", "block");
               flag=false;
               $(this).attr("src","img/list2.png");
           }
           else{
               $('.list2').hide(200).css("display", "none");
               flag=true;
               $(this).attr("src","img/list.png");
           }


         })

       })
