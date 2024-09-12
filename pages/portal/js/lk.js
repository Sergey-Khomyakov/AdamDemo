$(document).ready(function() {
    getItemFromStorage('userPhone')
    .then((data) => {
        if (!data) {
            window.Telegram.WebApp.requestContact((isAccess, res) =>{
                if(isAccess){
                    const phone = res.responseUnsafe?.contact?.phone_number;
                    if(phone !== null && phone !== undefined){

                        setItemToStorage('userPhone', phone)
                        .then((data) => {
                            if (data) {
                                console.log('success')
                            }
                        });
                    }
                }else{
                    // Запросить разрешение на получение контакта
                }
            });
        }
    });
});