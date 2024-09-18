$(document).ready(function() {

    $('[data-item="addItem"]').on('click', function(){
        const countOptions = $(".survey__item__input[data-item=\"option\"]").length;
        if(countOptions < 10){
            const $item = $(`
                <div class="survey__item">
                    <p class="survey__item__title">Варианты ответа</p>
                    <input class="survey__item__input" type="text" data-item="option" required
                        placeholder="Варианты ответа" maxlength="100">
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

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(lastName + " " + firstName);
        $('.card.card__bank .text.text-fio').text(lastName + " " + firstName);

        fetch('https://adamwebdemo.duckdns.org/api/getUserPhotoBase64?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '', {
          method: 'GET',
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
          $('.widget__lk__info .widget__lk__img img').attr('src', "data:image/png;base64, " + result.photo);
      }).catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
      });
    }

    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.disableVerticalSwipes();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
})