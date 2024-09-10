$(document).ready(function() {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();
        debugger
        getItemFromStorage('userContacts')
            .then((data) => {
                if (data) {
                    window.Telegram.WebApp.requestContact((isAccess, res) =>{
                        if(isAccess){
                            setItemToStorage('userContacts', res)
                            .then((data) => {
                                if (data) {
                                    console.log('success')
                                }
                            });
                        }else{
                            // Запросить разрешение на получение контакта
                        }
                    });
                }
            });

    } catch (e) {
        console.log(e)
    }
});