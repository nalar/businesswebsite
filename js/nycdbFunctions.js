var activeSlide = 0;
var activeSlideDiv = 1;

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

	// This function will slowly fade the images on the 
	// landing page in to each other
// function fadeHome(){
//     var $active = $('#mainSlider IMG.active');
//     var $next = $active.next();    
    
//     $next.addClass('active');
    
//     $active.removeClass('active');
// }

// $(function() {
//     setInterval( "slideSwitch()", 5000 );
// });

// function slideSwitch() {
//     var $active = $('#mainSlider IMG.active');

//     if ( $active.length == 0 ) $active = $('#mainSlider IMG:last');

//     var $next =  $active.next().length ? $active.next()
//         : $('#mainSlider IMG:first');

//     $active.addClass('last-active');
        
//     $next.css({opacity: 0.0})
//         .addClass('active')
//         .animate({opacity: 1.0}, 1000, function() {
//             $active.removeClass('active last-active');
//         });
// }
// $(function() {
//     setInterval( "slideSwitch()", 5000 );
// });


function mainSlide(){
    console.log("Mainslide called");
    if(activeSlideDiv = 1){
        if(activeSlide === sliderImages.length-1){
            activeSlide = 0;
            $("#mainSlider2").css("background-image","url("+sliderImages[activeSlide]+")");
            $("#mainSlider").animate({opacity: 1.0}, 500, function() {$active.removeClass('mainSlider2');});
            return(activeSlideDiv = 2);
        } else{
            activeSlide++
            $("#mainSlider2").css("background-image","url("+sliderImages[activeSlide]+")");
            $("#mainSlider").animate({opacity: 1.0}, 500, function() {$active.removeClass('mainSlider2');});
            return(activeSlideDiv = 2);
        }
    } else{
        if(activeSlide === sliderImages.length-1){
            activeSlide = 0; 
            $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")");
            $("#mainSlider").animate({opacity: 1.0}, 500, function() {$active.removeClass('mainSlider2');});
            return(activeSlideDiv = 1);
        } else{
            activeSlide++
            $("#mainSlider").css("background-image","url("+sliderImages[activeSlide]+")");
            $("#mainSlider").animate({opacity: 1.0}, 500, function() {$active.removeClass('mainSlider2');});
            return(activeSlideDiv = 1);
        }
    }
}


//--------------


function showDetails(){
	// This function will open an information window showing
	// the details of the clicked object (product or person)
}

function sendMail(){
	// Pretend we sent a mail with the details as entered in
	// the form on the contact page. Just open a window with
	// confirmation about it.
}
