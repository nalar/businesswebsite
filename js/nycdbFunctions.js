var activeSlide = 0;

$(document).ready(function() {

    sliderImages = [
    "./images/mainslider/1.jpg",
    "./images/mainslider/2.jpg",
    "./images/mainslider/3.jpg"];
    
    $("#productphoto1").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").css("display","block");              // Open opacity div
        $("#productbox1").css("display","block")            // Display the infobox
    });

    $("#productbox1").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").css("display","none");               // Open opacity div
        $("#productbox1").css("display","none")             // Display the infobox
    });

    setInterval( "mainSlide()", 5000 );

});

function mainSlide(){
    console.log("Mainslide called");
    if(activeSlide === sliderImages.length-1){
        console.log("Last slide so reset to first");
        activeSlide = 0; 
        $("#mainSlider").animate({opacity: 0.25}, 1000, function() {
            $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")");
            return($("#mainSlider").animate({opacity: 1.0}, 1000, function() {}));
        });

    } else{
        console.log("time for the next slide");
        activeSlide++
        $("#mainSlider").animate({opacity: 0.25}, 1000, function() {
            $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")");
            return($("#mainSlider").animate({opacity: 1.0}, 1000, function() {}));
        });

    }
}


function showDetails(){
    // This function will open an information window showing
    // the details of the clicked object (product or person)
}

function sendMail(){
    // Pretend we sent a mail with the details as entered in
    // the form on the contact page. Just open a window with
    // confirmation about it.
}
