$(document).ready(function(){
    $('.collapse_btn').click(function(){
        $('.menu').slideToggle(500); 
    }); 
});

// Call to Action Button
// Call to action Button
$(document).ready(function() {
    $(window).scroll(function() {
      // Get the current vertical scroll position
      var scrollPosition = $(this).scrollTop();

      // If the scroll position is greater than or equal to 500px, show the button; otherwise, hide it
      if (scrollPosition >= 500) {
        $("#ctaBtn").fadeIn();
      } else {
        $("#ctaBtn").fadeOut();
      } 800; 
    });
 
  }); 
// Venobox img
new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});
// Venobox Video 
new VenoBox({
  selector: '.my-video-links',
});