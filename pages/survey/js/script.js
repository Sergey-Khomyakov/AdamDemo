$(document).ready(function() {

    if(data.length > 0){
        let html = '';
        data.forEach((item) => {
            const totalVotes = item.answers.reduce((sum, answer) => sum + answer.count, 0); // Суммируем все голоса
            html += 
                `<div class="survey__item">
                    <div class="survey__question">${item.question}</div>
                    <div class="survey__answers">
                        ${item.answers.map((answer) => {
                            const percentage = totalVotes > 0 ? (answer.count / totalVotes * 100).toFixed(2) : 0; // Рассчитываем процент
                            return `<div class="survey__answer">
                                <div class="survey__answer__text">${answer.text}</div>
                                <div class="survey__answer__count">${answer.count}</div>
                                <div class="survey__answer__bar">
                                    <div class="survey__answer__fill" style="width: ${percentage}%;"></div> <!-- Заполнение шкалы -->
                                </div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>`;
        });
        $('.survey__items').html(html);
    }

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
        window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/"
    });
})