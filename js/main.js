
// Config
// ================================================
var $root          = $('html'),
    $home          = $('#home'),
    homeHeight     = $home .height(),
    $number        = $('.Number'),
    eventType      = ((document.ontouchstart !== null) ? 'click' : 'touchstart');

// Methods
// =================================================

function navSlide() {
    var scroll_top = $(window).scrollTop();

    if (scroll_top >= homeHeight) {
        $number.addClass('is-sticky');
    } else {
        $number.removeClass('is-sticky');
    }
}

function menuToggle() {
    if($nav_header.hasClass('is-open')) {
        $root.removeClass('pinned');
        $nav_header.removeClass('is-open');
        $navicon.removeClass('is--closed');
    } else {
        $root.addClass('pinned');
        $nav_header.addClass('is-open');
        $navicon.addClass('is--closed')
    }
}

function anchorScroll(event) {
    var id     = $(this).attr("href"),
        target = $(id).offset().top;

    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
    if(history.pushState) {
        history.pushState(null, null, id);
    }
    else {
        location.hash = id;
    }
}

// Handlers
// =================================================

$('.scrollto').on(eventType, function() {
    anchorScroll.call(this, event);
});

$(window).scroll(navSlide);

// Banner Slide
// =================================================
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
    navSlide();
});