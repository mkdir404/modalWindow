   $(function () { 

       var  navegaW  = $(this).width(),
            navegaH  = $(this).height(),
            bodyEle  = $('body'),
            domHtml  = $('html'),
            modal    = $('.modal'),
            divmodalwEle = $('.video').addClass('apend noneDisplay'), // this part change the class
            divBackGroundEle = $('<div></div>').addClass('screen noneDisplay');      

    modal.click(function(){

          var y = (navegaW / 2 ) - 400 ;
          var x = $(document).scrollTop() + 30;

          $('img.closeimg').remove();

        bodyEle.append(
                divBackGroundEle.removeClass('noneDisplay')
                );

        bodyEle.append(
              divmodalwEle.removeClass('noneDisplay').css({'top':x,'left':y}).append(
                '<img class="closeimg" src="img/close.png">'
                )

          );

        domHtml.addClass('no_scroll');
        
        $('img.closeimg').bind('click',function(){
            divmodalwEle.addClass('noneDisplay');
            divBackGroundEle.addClass('noneDisplay');
            domHtml.removeClass('no_scroll');
        });

      });
       
});     



