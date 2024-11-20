$(document).ready(function() {
    $('label[data-dropzone]').each(function() {
        const $dropzone = $(this);
        $dropzone.on('drop', function(event) {
            event.preventDefault();
            $(this).removeClass('bg-gray-100'); // Возвращаем цвет фона
    
            const files = event.originalEvent.dataTransfer.files; // Получаем файлы из события
            if (files.length > 0) {
                handleFiles(files, $dropzone); // Обрабатываем файлы
            }
        });

        $dropzone.on('change', function(event) {
            event.preventDefault();
            $(this).removeClass('bg-gray-100'); // Возвращаем цвет фона
            console.dir(event.target.files);
            const files = event.target.files; // Получаем файлы из события
            if (files.length > 0) {
                handleFiles(files, $dropzone); // Обрабатываем файлы
            }
        });
    })

    function handleFiles(files, $dropzone) {
        const $body = $dropzone.closest("div[dropzonebox]"); // Изменяем цвет фона при перетаскивании
        const $parent = $dropzone.closest("div[accordion2__body]");

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function() {
                const arrayBuffer = reader.result;
                const base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
                $body.prepend(`
                    <div class="flex justify-between items-center border-b border-gray-200 py-2">
                        <img class="w-60 h-44 object-contain" src="data:image/png;base64, ${base64String}" alt="Картинка">
                    </div>
                `)
                $parent.css('max-height', $parent.prop('scrollHeight') + 'px');
            };
            
            // Здесь можно добавить логику для загрузки файла на сервер
        }
    }
    $('div[data-tab_block]:not(div[data-tab_block="1"]) div[data-orderid]').addClass('!hidden');
    // алгоритм скрывает загрузку
    $('div[data-tabs]').on('click', 'div[data-tab_item]', function(){
        var $parent = $(this).closest('div[data-tabs]');
        var $btn = $(this);
        var btnNumber = $(this).attr('data-tab_item');

        $parent.find('div[data-tab_block] div[loadingItem]').removeClass('!hidden');
        $parent.find('div[data-tab_block]:not(div[data-tab_block="1"]) div[data-orderid]').addClass('!hidden');

        setTimeout(function(){
            $parent.find('div[data-tab_block="' + btnNumber + '"] div[loadingItem]').addClass('!hidden');
            $parent.find('div[data-tab_block="' + btnNumber + '"] div[data-orderid]').removeClass('!hidden');
        }, 1000)
    })


    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('a[userCardTitle]').text(lastName + " " + firstName);
        $('img[userCardImg]').attr('src', userPhoto);

        // fetch('https://adamwebdemo.duckdns.org/api/getUserPhotoBase64?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((res) => {
        //     if (res.ok) {
        //         return res.json(); // Correctly parse the JSON response
        //     } else {
        //         throw new Error('Network response was not ok');
        //     }
        // }).then((result) => {
        //     $('img[userCardImg]').attr('src', "data:image/png;base64, " + result.photo);
        // }).catch((error) => {
        //     console.error('There has been a problem with your fetch operation:', error);
        // });
    }
    
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
    window.Telegram.WebApp.LocationManager.init(() => {

        window.Telegram.WebApp.LocationManager.getLocation(
            (location) => {
                console.log(location);
                $('div[Info]').append(`${location}`)
                if(location !== undefined){

                    //$('p[location]').text('широта: ' + location.latitude + 'долгота: ' + location.longitude);
                    const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`;
    
                    fetch(url)
                        .then(response => {
                            if (response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log('Address:', data.display_name);
                            $('p[location]').text('Address:', data.display_name);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }
            }
        );
    });

});