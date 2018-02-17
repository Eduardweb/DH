function ready() {
  
//https://www.npmjs.com/package/jq-accordion
  $('.accordion').accordion({
   "transitionSpeed": 400
  });

  $('#toggle-button').click( function() {
    var toggleWidth = $("#toggle").width() == 50 ? "290px" : "50px";
    $('#toggle').animate({ width: toggleWidth });

    $('#toggle-wrap').toggleClass( "close-slider" );
    $('#main').toggleClass( "main-full" );
  });

}
  

document.addEventListener("DOMContentLoaded", ready);