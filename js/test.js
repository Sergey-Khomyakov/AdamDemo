$(document).ready( async function() {
    try {
        window.Telegram.WebApp.BackButton.show();
        window.Telegram.WebApp.MainButton.show();
        window.Telegram.WebApp.SecondaryButton.show();
        window.Telegram.WebApp.SettingsButton.show();
    } catch (e) {
        console.log(e)
    }
});