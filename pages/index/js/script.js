$(document).ready( async function() {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.BackButton.hide();
        window.Telegram.WebApp.disableVerticalSwipes();

        if (window.Telegram?.WebApp?.initDataUnsafe) {
            const initData = window.Telegram?.WebApp?.initData;

            fetch('https://adamwebdemo.duckdns.org/api/verify', {
                method: 'POST',
                body: JSON.stringify({ initData: initData }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.ok) {

                }
            })
        }

    } catch (e) {
        console.log(e)
    }
});