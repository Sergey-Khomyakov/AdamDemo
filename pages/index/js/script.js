$(document).ready(function() {

    window.Telegram.WebApp.ready();

    const userContacts = window.Telegram.Utils.sessionStorageGet("userContacts");

    if(userContacts === null){
        window.Telegram.WebApp.requestContact((isAccess, res) =>{
            if(isAccess){
                window.Telegram.Utils.sessionStorageSet("userContacts", res);
            }else{
                // Запросить разрешение на получение контакта
            }
        });
    }
});