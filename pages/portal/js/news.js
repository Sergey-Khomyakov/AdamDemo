$(document).ready(function() {

    let owlnew = $(".board__news.owl-carousel");
    owlnew.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ["<img src='./img/icon/arrow-left.svg' />", "<img src='./img/icon/arrow-right.svg' />"]
    });
})