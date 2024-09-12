
$(document).ready( async function() {
    try {
        window.Telegram.WebApp.SettingsButton.show();
        const $dialog = $('#popupSettings');

        if(window.Telegram.WebApp.platform === 'tdesktop'){
            $dialog.find('.list').append(`
                <div class="list__item">
                    <a href="#" id="getAppShortcut" class="link">Создать ярлык</a>
                </div>
                `);

            $('#popupSettings').find('#getAppShortcut').on('click', function(){
                fetch('https://192.168.0.101:3030/api/getApplicationShortcut', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((res) => {
                    if (res.ok) {
                    }
                })
            });
        }


        Telegram.WebApp.onEvent('settingsButtonClicked', () => {
            $dialog.dialog('open');
        })
        // Закрытие диалога по клику вне его
        $(document).on('click', function(event) {
            if (event.target === $dialog[0]) {
              $dialog.hide();
            }
          });
    } catch (e) {
        console.log(e)
    }
});

function getItemFromStorage(key) {
    return new Promise((resolve, reject) => {
        window.Telegram.WebApp.CloudStorage.getItem(
            key,
            (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    }).catch()
}

function setItemToStorage(key, value) {
    return new Promise((resolve, reject) => {
        window.Telegram.WebApp.CloudStorage.setItem(key, value, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    }).catch()
}

function removeItemFromStorage(key) {
    return new Promise((resolve, reject) => {
        window.Telegram.WebApp.CloudStorage.removeItem(
            key,
            (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    }).catch()
}

function getKeysFromStorage() {
    return new Promise((resolve, reject) => {
        window.Telegram.WebApp.CloudStorage.getKeys(
            (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    }).catch()
}

function showScanQrPopup(text) {
    return new Promise((resolve, reject) => {
        window.Telegram.WebApp.showScanQrPopup(
            text,
            (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    }).catch()
}