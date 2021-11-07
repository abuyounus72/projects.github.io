$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

jQuery(document).ready(function() {
    var offset = 300;
    var duration = 400;
    jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
    jQuery('#backTotop').fadeIn(duration);
    } else {
    jQuery('#backTotop').fadeOut(duration);
    }
    });
    jQuery('#backTotop').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
    })
});
