$(document).ready(function(){

  if($(window).width() > 800){
    $("html, body").scrollTop(0);


  } else {
    $(".card-project").click(function(){
      $(".toggle, .mobile").slideToggle();
    });
  }
})