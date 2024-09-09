$(document).ready(function() {
    // var app = document.getElementsByTagName('body');
    // app.style.zoom = 1;
    if (window.devicePixelRatio <= 1.75) {
        let scaleValue = (0.8 / window.devicePixelRatio);
        console.log(window.devicePixelRatio, scaleValue);
        //$('meta[name="viewport"]').prop('content', 'width=device-width, initial-scale=0.9');
        $('body').css('zoom', scaleValue);
        const winWidth = window.innerWidth;
        const d = document.querySelector('.container').clientWidth;
        // if (winWidth > d) {
        //     $('meta[name="viewport"]').prop('content', 'width=device-width, initial-scale=0.9');
        // }
    }

    let $btns = $('.header__group_btn a');
    let $menus = $('.menu');

    $btns.on('click', function() {
        let $btn = $(this);
        let index = 0;

        if ($btn.hasClass('active')) {
            $btn.removeClass('active');
            $menus.eq(index).removeClass('active');
            $('body').css({
                height: 'auto',
                overflow: 'unset'
            });
        } else {
            $menus.removeClass('active');
            $btns.removeClass('active');
            $btn.addClass('active');
            $menus.eq(index).addClass('active');
            $('body').css({
                height: '100vh',
                overflow: 'hidden'
            });
        }
    });
    $('.searchbox__btn').on('click', function() {
        let $btn = $(this);
        let index = $btn.index();
        let parent = $btn.parent().parent();
        let $input = parent.find('.searchbox__input input').eq(index);

        parent.find('.searchbox__input input, .searchbox__btn').removeClass('active');
        $btn.add($input).addClass('active');
    });
    $('.header__group__menu .nav__link img').on('click', function() {
        $(this).parent().parent().find('.dropdown').toggleClass('active');
        $(this).toggleClass('active');
        return false;
    });
    let owlfooter = $('.footer__sliders.owl-carousel');

    owlfooter.owlCarousel({
        items: 1,
        loop: true,
        center: true,
        nav: false,
        dots: false,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
    });

    $('.choice__block .checkmark').on('click', function() {
        $(this).parent().children('input').prop('checked', true);
    });
    $('.nav li').on('click', function() {
        let item = $(this);
        let drop = item.find('.dropdown');
        if (drop !== undefined) {
            drop.toggleClass('active');
            if (drop.hasClass('active')) {
                let items = drop.find('li');
                let heightItems = 0;
                items.each(function() {
                    let dropItems = $(this).find('.dropdown__item');
                    dropItems.each(function() {
                        heightItems += $(this).outerHeight(true);
                    })
                });
                drop.css('height', heightItems + 30);
            } else {
                drop.css('height', 0);
            }
        }

    })

    window.Telegram.WebApp.ready();

    if(window.Telegram.WebApp.initData !== "") {
        let userPhoneTG = localStorage.getItem("userPhoneTG");

        let user = window.Telegram.WebApp.initDataUnsafe.user;
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(user.last_name + " " + user.first_name);
        if(userPhoneTG === null){
            window.Telegram.WebApp.requestContact((isAccess, res) =>{
                debugger
                if(isAccess){
                    localStorage.setItem("userPhoneTG", res.responseUnsafe.contact.phone_number);
                    $('.page__departament .employee__box .text[data-field="userPhone"]').text(res.responseUnsafe.contact.phone_number)
                }else{
                    // Запросить разрешение на получение контакта
                }
            });
        }else{
            $('.page__departament .employee__box .text[data-field="userPhone"]').text(userPhoneTG)
        }
    }
    
});