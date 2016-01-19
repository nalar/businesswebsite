$(document).ready(function() {
    setInterval( "slideSwitch()", 3000 );

    $("#productphoto1").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").fadeIn(500);
        $("#productbox1").fadeIn(500);            // Display the infobox
    });

    $("#coverdiv").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#productbox1").fadeOut(500);             // Display the infobox
    });

    $("#productbox1").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#productbox1").fadeOut(500);             // Display the infobox
    });

});

function slideSwitch() {
    var $active = $('#mainSlider IMG.active');

    if ( $active.length == 0 ) $active = $('#mainSlider IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#mainSlider IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}