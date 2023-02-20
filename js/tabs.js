$('.tab-content>div').hide();
$('.tab-content>div').first().slideDown();
  $('.tab-buttons span').click(function(){
    var thisclass=$(this).attr('class');
    $('#lamp').removeClass().addClass('#lamp').addClass(thisclass);
    $('.tab-content>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });

$('.tab-content-cast>div').hide();
$('.tab-content-cast>div').first().slideDown();
  $('.tab-buttons-cast span').click(function(){
    var thisclass=$(this).attr('class');
    $('#lamp-cast').removeClass().addClass('#lamp-cast').addClass(thisclass);
    $('.tab-content-cast>div').each(function(){
      if($(this).hasClass(thisclass)){
        $(this).fadeIn(800);
      }
      else{
        $(this).hide();
      }
    });
  });