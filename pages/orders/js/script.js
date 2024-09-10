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
            <div class="card">
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
                        `<a href="#" class="btn btn-primary" style="background: var(--green-color); border-color: var(--green-color); box-shadow: unset;">Принять</a>
                         <a href="#" class="btn btn-primary" style="background: var(--red-2-color); border-color: var(--red-2-color); box-shadow: unset;">Отклонить</a>` 
                        : ""}
                </div>
            </div>
        `)
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
    }

    window.Telegram.WebApp.BackButton.show();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.history.go(-1);
    });
})