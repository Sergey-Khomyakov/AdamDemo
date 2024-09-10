$(document).ready( async function() {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.BackButton.hide();

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
        window.Telegram.WebApp.showAlert(window.Telegram.WebApp.BiometricManager.isBiometricAvailable);
        if(window.Telegram.WebApp.BiometricManager.isInited !== true && window.Telegram.WebApp.BiometricManager.isBiometricAvailable === true){
            window.Telegram.WebApp.BiometricManager.init((data) => {
                window.Telegram.WebApp.showAlert(data);
            });
        }
    } catch (e) {
        console.log(e)
    }
});