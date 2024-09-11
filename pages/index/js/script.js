$(document).ready( async function() {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.BackButton.hide();


        if (window.Telegram?.WebApp?.initDataUnsafe) {
            const initData = window.Telegram?.WebApp?.initData;

            fetch('http://192.168.0.101:3030/api/verify', {
                method: 'POST',
                body: JSON.stringify({
                    initData: initData
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.ok) {
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
                }
            })
        }

    } catch (e) {
        console.log(e)
    }
});