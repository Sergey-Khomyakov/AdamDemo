
$(document).ready( async function() {
    try {
        window.Telegram.WebApp.SettingsButton.show();
        const dialog = document.getElementById('popupSettings');

        if(window.Telegram.WebApp.platform === 'tdesktop'){
            dialog.querySelector('.list').appendChild(`
                <div class="list__item">
                    <a href="#" id="getAppShortcut" class="link">Создать ярлык</a>
                </div>
                `);
            dialog.querySelector('#getAppShortcut').addEventListener('click', (event) => {
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
            dialog.showModal();
        })
        // Закрытие диалога по клику вне его
        window.addEventListener('click', (event) => {
            if (event.target === dialog) {
                dialog.close(); // Закрытие, если кликнули на фон
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