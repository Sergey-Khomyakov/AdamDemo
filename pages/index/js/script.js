$(document).ready( async function() {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.BackButton.hide();
        window.Telegram.WebApp.disableVerticalSwipes();

    } catch (e) {
        console.log(e)
    }
});