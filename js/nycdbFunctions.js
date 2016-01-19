$(document).ready(function() {
    setInterval( "slideSwitch()", 3000 );

    $("#productphoto1").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").fadeIn(500);
        $("#productbox1").fadeIn(500);            // Display the infobox
    });
    $("#coverdiv, #productbox1").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#productbox1").fadeOut(500);             // Display the infobox
    });
        $("#productphoto2").children().click(function(){        // Clicked the photo so open the matching info box
            $("#coverdiv").fadeIn(500);
        $("#productbox2").fadeIn(500);            // Display the infobox
    });
    $("#coverdiv, #productbox2").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#productbox2").fadeOut(500);             // Display the infobox
    });
    $("#productphoto3").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").fadeIn(500);
        $("#productbox3").fadeIn(500);            // Display the infobox
    });
    $("#coverdiv, #productbox3").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#productbox3").fadeOut(500);             // Display the infobox
    });

    $("#lindsey").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").fadeIn(500);
        $("#staffbox1").fadeIn(500);            // Display the infobox
    });
    $("#coverdiv, #staffbox1").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#staffbox1").fadeOut(500);             // Display the infobox
    });
        $("#thijs").children().click(function(){        // Clicked the photo so open the matching info box
            $("#coverdiv").fadeIn(500);
        $("#staffbox2").fadeIn(500);            // Display the infobox
    });
    $("#coverdiv, #staffbox2").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").fadeOut(500);
        $("#staffbox2").fadeOut(500);             // Display the infobox
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

$(document).ready(function(){
    $("form").submit(function(){
        var message = $("#Message").val()
        var name = $("#FirstName").val()
        var email = $("#Email").val()
        alert("Email adress:" + email + " name: " + name + " message: " + message);
    });
});

f