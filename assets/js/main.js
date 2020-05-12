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


    // $( ".ghost" ).click(function() {
    //     $(this).addClass(".ghostopen").animate({
    //       opacity: 0.25,
    //       left: "+=50",
    //       height: "toggle"
    //     }, 5000, function() {
    //       // Animation complete.
    //     });
    //   });

});