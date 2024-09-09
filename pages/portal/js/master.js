$(document).ready(function() {
    setTimeout(function() {
        let owl = $(".board__facts.owl-carousel");
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
            navText: ["<img src='./img/icon/arrow-left.svg' />", "<img src='./img/icon/arrow-right.svg' />"]
        });
    
        let owlnew = $(".board__news.owl-carousel");
        owlnew.owlCarousel({
            items: 1,
            loop: true,
            center: true,
            nav: true,
            dots: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            autoHeight: false,
            autoHeightClass: 'owl-height',
            navText: ["<img src='./img/icon/arrow-left.svg' />", "<img src='./img/icon/arrow-right.svg' />"]
        });
        owlnew.on('changed.owl.carousel', function(event) {
            let position = (event.item.index) - 2;
            let cards = $('.card.new .card__img__container');
            cards.removeClass('active');
            $('.card.new[data-slide="slide' + position + '"] .card__img__container').addClass('active');
        });
    
    
        let owlMedia = $('.cards.mob');
        owlMedia.owlCarousel({
            items: 1.12,
            loop: true,
            center: false,
            nav: false,
            dots: false,
            margin: 20,
        })
    
        $('.board__news__bottom').on('click', '.card', function() {
            let item = $(this);
            owlnew.trigger('stop.owl.autoplay')
            $('.card .card__img__container').removeClass('active');
            item.find('.card__img__container').addClass('active');
            owlnew.trigger('to.owl.carousel', [item.index(), 300]);
    
        });
    
        $('.widget__calendar__events .tab li').on('click', function() {
            $('.widget__events, .widget__calendar__events .tab li').removeClass('active');
            let index = $(this).index();
            $('.widget__events:eq(' + index + '), .widget__calendar__events .tab li:eq(' + index + ')').addClass('active');
        });
    
        let owlmanagerSays = $(".widget__manager-says .manager-says__items.owl-carousel");
        owlmanagerSays.owlCarousel({
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
            navText: ["<img src='./img/icon/arrow-left.svg' />", "<img src='./img/icon/arrow-right.svg' />"]
        });
        
    }, 10)

    $('.manager-says__item .manager-says__footer .show__more').on('click', function() {
        const $parent = $(this).closest('.manager-says__item');
        if (!$parent.hasClass('manager-says__item_active')) {
            $parent.addClass('manager-says__item_active');
            $parent.find('.manager-says__description').css({'height': 'auto'});
        } else {
            $parent.removeClass('manager-says__item_active');
            $parent.find('.manager-says__description').css({'height': '85px'});
        }
    })
})