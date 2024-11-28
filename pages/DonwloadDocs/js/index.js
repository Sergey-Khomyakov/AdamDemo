$(document).ready(function() {
    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('a[userCardTitle]').text(lastName + " " + firstName);
        $('img[userCardImg]').attr('src', userPhoto);


        $('a[downloaddoc]').on('click', function(){
            window.Telegram.WebApp.downloadFile({
                url: "https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg",
                file_name: 'file.jpg'
            }, (item) => {
                $('div[Info]').append(`donwload file : ${item}`);
            })
        })
    }
    
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });

});