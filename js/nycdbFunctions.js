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
    setInterval( "slideSwitch()", 5000 );
});

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
