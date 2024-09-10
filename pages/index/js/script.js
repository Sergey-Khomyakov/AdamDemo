$(document).ready(function() {

    window.Telegram.WebApp.ready();

    debugger
    const userContacts = window.Telegram.WebApp.CloudStorage.getItem("userContacts", (data) =>{
        if(data === null){
            window.Telegram.WebApp.requestContact((isAccess, res) =>{
                if(isAccess){
                    window.Telegram.WebApp.CloudStorage.setItem("userContacts", res);
                }else{
                    // Запросить разрешение на получение контакта
                }
            });
        }
        window.Telegram.WebApp.BackButton.hide();
    });
});