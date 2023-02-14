
$(document).ready(function(){
    $('.burger-menu').click(function(){
      $('.burger-menu , .header-menu').toggleClass('active');
      $('body').toggleClass('lock');
    })
  })
  $('.menu-list').click(function() {
    $('.burger-menu , .header-menu').removeClass('active');
    $('body').removeClass('lock');
  })