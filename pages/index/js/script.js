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
    // if(window.Telegram.WebApp.initData !== "") {
    //     let userPhoneTG = localStorage.getItem("userPhoneTG");

    //     let user = window.Telegram.WebApp.initDataUnsafe.user;
    //     $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(user.last_name + " " + user.first_name);
    //     if(userPhoneTG === null){
    //     }else{
    //         $('.page__departament .employee__box .text[data-field="userPhone"]').text(userPhoneTG)
    //     }
    // }

});