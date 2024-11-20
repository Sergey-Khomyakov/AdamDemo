$(document).ready(function() {

    $('button[data-item="addItem"]').on('click', function(){
        const countOptions = $(".survey__item__input[data-item=\"option\"]").length;
        if(countOptions < 10){
            const $item = $(`
                <div class="survey__item">
                    <p class="survey__item__title">Вариант ответа</p>
                    <input class="survey__item__input" type="text" data-item="option" required
                        placeholder="Вариант ответа" maxlength="100">
                    <button class="btn" type="button" data-item="remove">Удалить вариант</button>
                </div>`)

            $item.find('[data-item="remove"]').on('click', function(){
                $item.remove();
            });

            $(".survey__container .survey__body").append($item);
        }else{
            window.Telegram.WebApp.showPopup({
                title: 'Информация',
                message: "Максимальное количество вариантов ответа - 10"
            });
        }
    });

    $('button[data-action="create"]').on('click', function(){
        const question = $(".survey__item__input[data-item=\"question\"]").val();
        if(!question){
            window.Telegram.WebApp.showPopup({
                title: 'Информация',
                message: "Необходимо заполнить вопрос"
            });
            return false;
        }else{
            const options = [];
            let emptyfield = false;
            $(".survey__item__input[data-item=\"option\"]").each(function(){
                if($(this).val() == ""){
                    emptyfield = true;
                    $(this).addClass("btn-error");
                    return false;
                }
                options.push({
                    text: $(this).val(),
                });
            });
            const anonymous = $('input[type="checkbox"][data-item="anonymous"]').is(':checked');
            if(emptyfield){
                window.Telegram.WebApp.showPopup({
                    title: 'Информация',
                    message: "Необходимо заполнить все варианты ответа"
                });
                return false;
            }else{
                fetch('https://adamwebdemo.duckdns.org/api/sendPollUsers', {
                    method: 'POST',
                    body: JSON.stringify({
                        usersId: [window.Telegram.WebApp.initDataUnsafe?.user?.id] , // заглушка, отправка опроса для пользователя который создавал опрос
                        question: question, 
                        options: options, 
                        isAnonymous: anonymous}),
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
                    if(result){
                        window.Telegram.WebApp.showPopup({
                            title: 'Информация',
                            message: "Опрос создан",
                            buttons: [
                                {
                                    text: 'Ок',
                                }
                            ]
                        }, function(){
                            window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/Survey.html"
                        });
                    }
                }).catch((error) => {
                    console.error('Error: ', error);
                });
            }
        }
    });

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(lastName + " " + firstName);
        $('.card.card__bank .text.text-fio').text(lastName + " " + firstName);
        $('.widget__lk__info .widget__lk__img img').attr('src', userPhoto);
    //     fetch('https://adamwebdemo.duckdns.org/api/getUserPhotoBase64?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '', {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json',
    //       }
    //   }).then((res) => {
    //       if (res.ok) {
    //           return res.json(); // Correctly parse the JSON response
    //       } else {
    //           throw new Error('Network response was not ok');
    //       }
    //   }).then((result) => {
    //       $('.widget__lk__info .widget__lk__img img').attr('src', "data:image/png;base64, " + result.photo);
    //   }).catch((error) => {
    //       console.error('There has been a problem with your fetch operation:', error);
    //   });
    }

    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.disableVerticalSwipes();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
})