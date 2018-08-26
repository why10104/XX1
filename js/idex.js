$(function(){
   $('.left-bot1 a').hover(function(){
       $(this).children('.is2').stop(true,false).animate({left: '45px'}, "fast");
   },function(){
       $(this).children('.is2').stop(true,false).animate({left: '1000px'}, "fast");
   });

   $('.masg').click(function(){
       $('.imgss2').hide();
       $('.imgss1').animate({
           height: 'toggle', opacity: 'toggle'
       }, "slow");
       //当信息框出现时, .r1top 消失，反之出现
       if($(".imgss1").height() > 2){
           $('.r1top').css("display","block");
       }else{
           $('.r1top').css("display","none");
       };
   });
    $('.warm').click(function(){
       $('.imgss1').hide();
       $('.imgss2').animate({
           height: 'toggle', opacity: 'toggle'
       }, "slow");
        //当信息框出现时, .r1top 消失，反之出现
        if($(".imgss2").height() > 2){
            $('.r1top').css("display","block");
        }else{
            $('.r1top').css("display","none");
        };
   });

});