$(document).ready(function() {


    const $items = $(`<div class="cards"> </div>`);

    data.forEach(item => {
        let statusClass = "";
        switch (item.status) {
            case "Выполнен":
                statusClass = "text-green";
                break;
            case "В ожидании":
                statusClass = "text-grey";
                break;
            default:
                break;
        }
        $items.append(`
            <div class="card" data-itemId=${item.id}>
                <div class="card__header">
                    <p class="text text-w1">Заказ №${item.id}</p>
                    <p class="text text-w1 text-status ${statusClass}"> <span>• </span>${item.status}</p>
                </div>
                <div class="card__body">
                    <p class="text text-w1">Клиент: <span style="color: var(--grey-color);">${item.contact.last_name} ${item.contact.first_name}</span></p>
                    <p class="text text-w1">Телефон: <span style="color: var(--grey-color);">${item.contact.phone_number}</span></p>
                    <p class="text text-w1">Почта: <span style="color: var(--grey-color);">${item.contact.email}</span></p>
                    <p class="text text-w1">Адрес: <span style="color: var(--grey-color);">${item.adress}</span></p>
                    <p class="text text-w1">Дата заказа: <span style="color: var(--grey-color);">${item.data}</span></p>
                </div>
                <div class="card__footer">
                    ${item.status === "В ожидании" ? 
                        `<a href="#" data-type="accept" class="btn btn-primary" style="background: var(--green-color); border-color: var(--green-color); box-shadow: unset;">Принять</a>
                         <a href="#" class="btn btn-primary" style="background: var(--red-2-color); border-color: var(--red-2-color); box-shadow: unset;">Отклонить</a>` 
                        : ""}
                </div>
            </div>
        `);
    });

    $('main .container').append($items);

    getItemFromStorage('userPhone')
    .then((res) => {
        if (res) {
            $('.page__departament .employee__box .text[data-field="userPhone"]').text(res)
        }
    });

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(lastName + " " + firstName);

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

        $('.card').one('click', '.btn.btn-primary[data-type="accept"]', function(){
            const $card = $(this).closest(".card")
            const itemId = $card .attr("data-itemId");
            const item = data.find(item => item.id == itemId);
            if(item !== undefined){
                fetch('https://adamwebdemo.duckdns.org/api/getOrderLocation?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '&orderId=' + Number(itemId) + '', {
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
                    if(result.status === true){
                        window.Telegram.WebApp.showPopup({
                            title: 'Заказ принят',
                            message: "В чат отправлена геолокация"
                        });
                        $card.find('.btn.btn-primary').addClass("hidden");
                        $card.find('.text-status').removeClass("text-grey").addClass("text-violet").html("<span>• </span> Принят");
                    }
                }).catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error);
                });
            }
        });
    }

    window.Telegram.WebApp.BackButton.show();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
})