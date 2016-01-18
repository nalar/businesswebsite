$(document).ready(function() {
    
    $("#productphoto1").children().click(function(){        // Clicked the photo so open the matching info box
        $("#coverdiv").css("display","block");              // Open opacity div
        $("#productbox1").css("display","block")            // Display the infobox
    });

    $("#productbox1").click(function(){                     // Clicked the photo so open the matching info box
        $("#coverdiv").css("display","none");               // Open opacity div
        $("#productbox1").css("display","none")             // Display the infobox
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

$(function() {
    setInterval( "slideSwitch()", 3000 );
});


function showDetails(){
    // This function will open an information window showing
    // the details of the clicked object (product or person)
}

function sendMail(){
    // Pretend we sent a mail with the details as entered in
    // the form on the contact page. Just open a window with
    // confirmation about it.
}
