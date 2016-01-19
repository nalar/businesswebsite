var activeSlide = 0;
var activeSlideDiv = 1;

$(document).ready(function() {

    sliderImages = [
    "./images/mainslider/1.jpg",
    "./images/mainslider/2.jpg",
    "./images/mainslider/3.jpg"];

// Add a loop here 
    $("#productphoto1").children().click(function(){        
        $("#coverdiv").fadeIn(500);
        $("#productbox1").fadeIn(500);            
    });
    $("#coverdiv, #productbox1").click(function(){                     
        $("#coverdiv").fadeOut(500);
        $("#productbox1").fadeOut(500);             
    });
        $("#productphoto2").children().click(function(){        
            $("#coverdiv").fadeIn(500);
        $("#productbox2").fadeIn(500);            
    });
    $("#coverdiv, #productbox2").click(function(){                     
        $("#coverdiv").fadeOut(500);
        $("#productbox2").fadeOut(500);             
    });
    $("#productphoto3").children().click(function(){        
        $("#coverdiv").fadeIn(500);
        $("#productbox3").fadeIn(500);            
    });
    $("#coverdiv, #productbox3").click(function(){                     
        $("#coverdiv").fadeOut(500);
        $("#productbox3").fadeOut(500);             
    });

    $("#lindsey").children().click(function(){        
        $("#coverdiv").fadeIn(500);
        $("#staffbox1").fadeIn(500);            
    });
    $("#coverdiv, #staffbox1").click(function(){                     
        $("#coverdiv").fadeOut(500);
        $("#staffbox1").fadeOut(500);             
    });
        $("#thijs").children().click(function(){        
            $("#coverdiv").fadeIn(500);
        $("#staffbox2").fadeIn(500);            
    });
    $("#coverdiv, #staffbox2").click(function(){                     
        $("#coverdiv").fadeOut(500);
        $("#staffbox2").fadeOut(500);             
    });

    setInterval( "mainSlide()", 3000 );

});

function mainSlide(){
    if(activeSlide === sliderImages.length-1){
        $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")").css("opacity","1.0");
        $("#mainSlider2").css("opacity","0.0");
        activeSlide = 0;
        $("#mainSlider2").css("background-image","url("+sliderImages[activeSlide]+")").animate({opacity: 1.0}, 1000);
    }
    else{
       $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")").css("opacity","1.0");
       $("#mainSlider2").css("opacity","0.0");
       activeSlide++
       $("#mainSlider2").css("background-image","url("+sliderImages[activeSlide]+")").animate({opacity: 1.0}, 1000);
   };
}

$(document).ready(function(){
    $("form").submit(function(){
        var message = $("#Message").val()
        var name = $("#FirstName").val()
        var email = $("#Email").val()
        alert("Email adress:" + email + " name: " + name + " message: " + message);
    });
});