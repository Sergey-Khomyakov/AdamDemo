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

    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/furnitureAssemMain.html";
    });
});
