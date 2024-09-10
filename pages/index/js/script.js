$(document).ready(function() {

    window.Telegram.WebApp.ready();
    debugger

    window.Telegram.WebApp.CloudStorage.getItem("userContacts", (data) => {
        if(data === null){
            window.Telegram.WebApp.requestContact((isAccess, res) =>{
                if(isAccess){
                    window.Telegram.WebApp.CloudStorage.setItem("userContacts", res);
                }else{
                    // Запросить разрешение на получение контакта
                }
            });
        }
        console.log("Полученные данные:", data);
    }, (error) => {
        console.error("Ошибка при получении данных:", error);
    });

    // window.Telegram.WebApp.CloudStorage.getItem('userContacts')
    // .then((data) => {
    //     if(data === null){
    //         window.Telegram.WebApp.requestContact((isAccess, res) =>{
    //             if(isAccess){
    //                 window.Telegram.WebApp.CloudStorage.setItem("userContacts", res);
    //             }else{
    //                 // Запросить разрешение на получение контакта
    //             }
    //         });
    //     }
    //     console.log('Retrieved data:', data);
    // })
    // .catch((error) => {
    //     console.error('Error retrieving data:', error)
    // });
    // const userContacts = window.Telegram.WebApp.CloudStorage.getItem("userContacts", (data) =>{
    //     if(data === null){
    //         window.Telegram.WebApp.requestContact((isAccess, res) =>{
    //             if(isAccess){
    //                 window.Telegram.WebApp.CloudStorage.setItem("userContacts", res);
    //             }else{
    //                 // Запросить разрешение на получение контакта
    //             }
    //         });
    //     }
    //     window.Telegram.WebApp.BackButton.hide();
    // });
});