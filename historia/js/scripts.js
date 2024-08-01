jQuery(document).ready(function( $ ) {

    $(".js-timeline").Timeline();

    $('.imagen').click(function(){
      var imagen1=$(this).attr('src');
      var titleimagen=$(this).attr('title');
      if (imagen1==""){
        $('.recibir-imagen').attr('src','images/errores/404.png');
        $('#mimodal').modal('show');
      }else{
        $('.recibir-imagen').attr('src',imagen1);
        $('.texto-imagen').text(titleimagen);
        $('#mimodal').modal('show');
    }
  });

});