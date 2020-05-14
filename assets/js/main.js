function openNav(){
    document.getElementById("mySidenav").style.width = "auto";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).on('load', function () {
    // Transform the Div that contains the image
    $(".bg-Cars").css({
        "transition" : "ease-in-out 1.2s",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    });

    $(".carsText").css({
        "transition" : "ease-in-out 700ms",
        "opacity" : "100%",
    })

    $(".hero .carsText p.myP.top-margin10").css({
        "transition" : "ease-in-out 1.2s",
        "transform": "translateX(0px)"
    });
    
})

// Transform position horizontaly when a certain CLASS is clicked
$(".bg-Cars .cliccableCars.modelS").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(30%)"
    })

    $(".hero .carsText .myH1").text("Model S");
})


$(".bg-Cars .cliccableCars.modelX").click(function (){

    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(12%)"
    })

    $(".hero .carsText .myH1").text("Model X").addClass("rightTransition");
    
})


$(".bg-Cars .cliccableCars.model3").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    })

    $(".hero .carsText .myH1").text("Model 3");
})

$(".bg-Cars .cliccableCars.modelY").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(-30%)"
    })

    $(".hero .carsText .myH1").text("Model Y");
})

// Transform position horizontaly when a certain ID is clicked
$("#modelS").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(30%)"
    })
})


$("#modelX").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(12%)"
    })

})


$("#model3").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    })
})

$("#modelY").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 700ms",
        "transform": "scale(3) translateY(-6%) translateX(-30%)"
    })
})
