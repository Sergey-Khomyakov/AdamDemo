$(document).ready(function() {

    $('.manager-says__item .manager-says__footer .show__more').on('click', function() {
        const $parent = $(this).closest('.manager-says__item');
        if (!$parent.hasClass('manager-says__item_active')) {
            $parent.addClass('manager-says__item_active');
            $parent.find('.manager-says__description').css({'height': 'auto'});
        } else {
            $parent.removeClass('manager-says__item_active');
            $parent.find('.manager-says__description').css({'height': '85px'});
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
        
    }

    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.disableVerticalSwipes();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        if(window.location.pathname === "/AdamDemo/PortalIndex.html"){
            window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/"
        }else{
            window.location.href= document.referrer;
        }
    });

    const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
    $('.widget__lk__info .widget__lk__img img, .page__departament .card.employee .card__img').attr('src', userPhoto);
    // fetch('https://adamwebdemo.duckdns.org/api/getUserPhotoBase64?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // }).then((res) => {
    //     // if (res.ok) {
    //     //     const result = JSON.parse(res.body);
    //     //     $('.widget__lk__info .widget__lk__img img, .page__departament .card.employee .card__img').attr('src', "data:image/png;base64, " + result.photo);
    //     // }
    //     if (res.ok) {
    //         return res.json(); // Correctly parse the JSON response
    //     } else {
    //         throw new Error('Network response was not ok');
    //     }
    // }).then((result) => {
    //     $('.widget__lk__info .widget__lk__img img, .page__departament .card.employee .card__img').attr('src', "data:image/png;base64, " + result.photo);
    // }).catch((error) => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });
})