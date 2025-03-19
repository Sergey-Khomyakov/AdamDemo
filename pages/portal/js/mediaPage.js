$(document).ready(function() {
    let owl = $(".carousel__top.owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        nav: true,
        dots: false,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash',
        autoHeight: false,
        autoHeightClass: 'owl-height',
        navText: ["<img src='./img/icon/ArrowPrev.svg' />", "<img src='./img/icon/ArrowNext.svg' />"]
    });

    let owlMob = $(".carousel__box");
    owlMob.owlCarousel({
        items: 1.18,
        loop: true,
        center: false,
        nav: false,
        dots: false,
        margin: 20,
    });


    $('.gallery__image__items.desktop').masonry({
        itemSelector: '.gallery__image__item',
        columnWidth: '.gallery__image__item',
        gutter: 30,
    });
    let $modalHeader = $('.modal-header');
    let $imgs = $modalHeader.find('.img');

    $modalHeader.on('click', '.modal-nav__btn.next', function() {
        $imgs.each(function(i, elem) {
            let $this = $(this);
            if ($this.hasClass('active')) {
                let $nextElem = $this.next('.img:not(.modal-close)');
                if ($nextElem.length !== 0) {
                    $this.removeClass('active');
                    $nextElem.addClass('active');
                }
                return false;
            }
        });
    });

    $('.modal-nav__btn.prev').on('click', function() {
        let imgs = $('.modal-header .img');
        imgs.each(function(i, elem) {
            if ($(this).hasClass("active")) {
                var $nextElem = $(this).prev();
                if ($nextElem.length !== 0 && !$nextElem.hasClass('modal-close')) {
                    $nextElem.addClass("active");
                    $(this).removeClass("active");
                }
                return false;
            }
        });
    });
})