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
        window.Telegram.WebApp.CloudStorage.removeItem(
            (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
    }).catch()
}