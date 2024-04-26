$(document).ready(function(){
$(window).bind('scroll',function(e){
    arrowScroller();
  });
//   function arrowScroller(){
//     $('#arrow-toggle img').removeClass('down');   

//     var docTop = $(document).scrollTop();
//     if(docTop > 0){
//         $('#arrow-toggle img').addClass('down');
//     }
//   }

function arrowScroller(){
    $('#arrowWrapper').removeClass('down');   
    var docTop = $(document).scrollTop();
    if(docTop > 0){
        $('#arrowWrapper').addClass('down');
    }
  }
});