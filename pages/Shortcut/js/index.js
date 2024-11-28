$(document).ready(function() {

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('a[userCardTitle]').text(lastName + " " + firstName);
        $('img[userCardImg]').attr('src', userPhoto);
        if(  window.Telegram.WebApp.platform !== "tdesktop"){
            $('a[label]').on('click', function(){
                window.Telegram.WebApp.addToHomeScreen();
            })
        }else{
            $('a[label]').remove();
            $('.container > div').append(`
                <p class="font-monserrat text-center text-base text-black">Функционал доступен только в Telegran Mobile</p>
                `)
        }
    }
    
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });

});