$(document).ready(function() {
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/";
    });
});