function openNav(){
    document.getElementById("mySidenav").style.width = "auto";
    $(".hero").css({
        "opacity": "0.5"
    });
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $(".hero").css({
        "opacity": "1"
    });
}

$(window).on('load', function () {
    // Transform the Div that contains the image
    $(".bg-Cars").css({
        "transition" : "ease-in-out 1.2s",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    });

    $(".carsText").css({
        "transition" : "ease-in-out 450ms",
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
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(30%)"
    })

    $(".hero .carsText .myH1").text("Model S").attr("id","left2");
})


$(".bg-Cars .cliccableCars.modelX").click(function (){

    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(10%)"
    })

    $(".hero .carsText .myH1").text("Model X").attr("id","left");
    
})


$(".bg-Cars .cliccableCars.model3").click(function (){
    
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    })

    $(".hero .carsText .myH1").text("Model 3").attr("id","right2");
})

$(".bg-Cars .cliccableCars.modelY").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(-30%)"
    })

    $(".hero .carsText .myH1").text("Model Y").attr("id","right");
})



// Transform position horizontaly when a certain ID is clicked
$("#modelS").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(30%)"
    })

    $(".hero .carsText .myH1").text("Model S").attr("id","left2");
})


$("#modelX").click(function (){

    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(10%)"
    })

    $(".hero .carsText .myH1").text("Model X").attr("id","left");
    
})


$("#model3").click(function (){
    
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(-12%)"
    })

    $(".hero .carsText .myH1").text("Model 3").attr("id","right2");
})

$("#modelY").click(function (){
    
    $(".bg-Cars ").css({
        "transition" : "ease-in-out 450ms",
        "transform": "scale(3) translateY(-6%) translateX(-30%)"
    })

    $(".hero .carsText .myH1").text("Model Y").attr("id","right");
})