$(document).ready(function() {

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