!(function($) {
  "use strict";

  $(window).on('load', function() {

    // Initiate venobox (lightbox feature used in video)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

})(jQuery);