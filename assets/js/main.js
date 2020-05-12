$( document ).ready(function() {
    
    
    $('.ghost').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            console.log("funziona!");
            $(this).addClass(".ghostopen");
        } else {
            $(this).removeClass(".ghostopen");
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