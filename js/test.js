$(document).ready( async function() {
    try {
        window.Telegram.WebApp.shareToStory("https://adamweb.ru/local/templates/adam/img/other/carousel__design/Screen4.png")
    } catch (e) {
        console.log(e)
    }
});