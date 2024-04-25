$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });   

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
    
    function dotnavigation(){
             
        var numSections = $('section').length;
        // console.log("Number of sections:" + " " + numSections);
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          // console.log("ele offset:" + " " + ele.offset().top)
          // console.log(ele.next().html());
         
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
            // console.log("Not undefined nextTop:" + " " + nextTop);
          }
          else {
            nextTop = $(document).height();
            // console.log("Undefined nextTop:" + " " + nextTop);
          }
          //console.log(nextTop);
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
            // console.log("This top:" + " " + thisTop);
          }
          else {
            thisTop = 0;
            // console.log("This top zero:" + " " + thisTop);
          }
          
          var docTop = $(document).scrollTop();
          // console.log("DocTop:" + " " + docTop);
          // console.log("----------")
          if(docTop >= ele.offset().top && (docTop < nextTop)){
            $('#dot-nav li').eq(i).addClass('active');
          }
        });   
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 0);
      
        return false;
    });

/* end dot nav */
});