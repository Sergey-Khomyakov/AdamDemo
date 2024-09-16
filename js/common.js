
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
                fetch('https://adamwebdemo.duckdns.org/api/getApplicationShortcut', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((res) => {
                    if (res.ok) {
                        return res.blob(); // Parse the response as a blob
                    } else {
                        throw new Error('Network response was not ok');
                    }
                }).then((blob) => {
                    // Create a temporary URL for the blob
                    const url = URL.createObjectURL(blob);
                    
                    // Create a temporary link element
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'AdamWebTG.url');
                    
                    // Append the link to the document body
                    document.body.appendChild(link);
                    
                    // Click the link to initiate the download
                    link.click();
                    
                    // Clean up by removing the link and revoking the object URL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }).catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
            });
        }

        const initData = window.Telegram?.WebApp?.initData;
        if(initData !== ""){

            fetch('https://adamwebdemo.duckdns.org/api/verify', {
                method: 'POST',
                body: JSON.stringify({ initData: initData }),
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                if (res.ok) {
                    return res.json(); // Correctly parse the JSON response
                } else {
                    throw new Error('Network response was not ok');
                }
            }).then((result) => {
                if(result === false){
                    window.location.href = "https://www.google.com";
                }
            }).catch((error) => {
                console.error('Error: ', error);
            });
        }else{
            window.location.href = "https://www.google.com";
        }

        Telegram.WebApp.onEvent('settingsButtonClicked', () => {
            window.popupSettings.showModal()
        })
        // Закрытие диалога по клику вне его
        $(document).on('click', function(event) {
            if (event.target === $dialog[0]) {
                window.popupSettings.close()
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