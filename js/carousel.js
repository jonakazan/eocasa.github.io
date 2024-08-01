
$('#myCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

  $(function(){

    $('.imagen').click(function(){
        var imagen1=$(this).attr('src');
        var titleimagen=$(this).attr('title');

        if (imagen1==""){

          $('.recibir-imagen').attr('src','images/errores/error.jpg');
          $('#mimodal').modal();

        }else{
	        $('.recibir-imagen').attr('src',imagen1);
	        $('.texto-imagen').text(titleimagen);
	        $('#mimodal').modal();
      }
    });

  });

  var resolutionh=$(window).height();
  var resolutionw=$(window).width();
  
  if(resolutionw<1000){
    jQuery("#myCarousel3").hide(1000);
    jQuery("#myCarousel2").hide(1000);
    jQuery("#myCarousel").hide(1000);
  }

/** 
jQuery(document).ready(function() {
/// Usa una funcion para detectar la resolución de jquery , lo he hecho directamente , si te da algún fallo me comentas

var resolutionh=$(window).height();
var resolutionw=$(window).width();

if(resolutionw<1200)
{
jQuery("#myCarousel3").hide(1000);
}

});**/
