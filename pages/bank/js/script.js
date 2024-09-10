$(document).ready(function() {

    $(".card.card__bank .card__body .text.text-number span").text(getRandomNumber());
    $(".card.card__bank .card__footer .text.text-card-data").text(getRandomDate());


    $('.accordion').on('click', '.accordion__item', function(){
        const $item = $(this);
        const body = $item.find('.accordion__body');
        if($item.hasClass('accordion__active')){
            body.css({"height": "0px"});
            $item.removeClass('accordion__active');
        }else{
            //body.css({"height": body.outerHeight(true) + "px"});
            const paddingSize = 16;
            const height = $item.find('.accordion__content').outerHeight(true) + paddingSize;
            body.css({"height": height + "px"});
            $item.addClass('accordion__active');
        }

    });

    getItemFromStorage('userPhone')
    .then((res) => {
        if (res) {
            $('.page__departament .employee__box .text[data-field="userPhone"]').text(res)
        }
    });

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(lastName + " " + firstName);
        $('.card.card__bank .text.text-fio').text(lastName + " " + firstName);
    }

    window.Telegram.WebApp.BackButton.show();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
})

function getRandomNumber() {
    return Math.random().toString().slice(2, 6).padStart(4, '0');
  }

  function getRandomDate() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
  
    let randomMonth, randomYear;
  
    do {
      randomMonth = Math.floor(Math.random() * 12) + 1;
      randomYear = randomMonth < currentMonth ? currentYear + 1 : currentYear;
    } while (randomYear * 100 + randomMonth < currentYear * 100 + currentMonth);
  
    return String(randomMonth).padStart(2, '0') + '/' + String(randomYear).slice(-2);
  }