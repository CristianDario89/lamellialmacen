function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();

    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        var hash = this.hash;
        if( hash ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 900, function(){
              window.location.hash = hash;
          });
        }

    });
    
})(jQuery);

/*-----------------------------*/

$(function() {
  var elemCount = 3;
  var current = 1;
  var elemWidth = 650;
  /*  
     if ( screenX < 800px) {
    
    } else {
     
    }  
    */
  var move = 0;
  $('.next').click(function() {
    if (current < elemCount) {
      $('.slider22 .thumbs').toggleClass('move');
      move += elemWidth;
    	$('.slider22 .thumbs').css('transform', 'translateX(-'+move+'px)');
      current++;
    } else {
      move = 0;
      current = 1;
      $('.slider22 .thumbs').css('transform', 'translateX('+move+'px)');
    }
  });
  $('.prev').click(function() {
    if (current > 0) {
      $('.slider22 .thumbs').toggleClass('move');
      move -= elemWidth;
    	current--;
    	$('.slider22 .thumbs').css('transform', 'translateX(-'+move+'px)');
    }
  });
});
