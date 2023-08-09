$(document).ready(function() {
    $(".slider1").owlCarousel({
        items: 5,
        margin: 5,
        autoplay: true,
        loop: true,
    });
    $(".slider2").owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        center: false,
        mouseDrag: true,
        startPosition: 0,
        nav: true,
        smartSpeed: 3500,

    });
    $(".slider-img").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        slideBy: 3,
        smartSpeed: 2500,


    });
});