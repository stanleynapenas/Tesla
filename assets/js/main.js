$( document ).ready(function() {
    

    var elemento = $('.myNavLink').attr('data-tgl','openHamburger');
    
    elemento.click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $(".ghost").addClass("ghostopen");
        } else {
            $(".ghost").removeClass("ghostopen");
        }
        $(this).data("clicks", !clicks);
      });

});