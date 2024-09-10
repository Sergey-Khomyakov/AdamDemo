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

    const userContacts = window.Telegram.Utils.sessionStorageGet("userContacts");
    
    if(userContacts !== null){
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text((userContacts.responseUnsafe.contact.last_name !== undefined ? userContacts.responseUnsafe.contact.last_name : "") + " " + (userContacts.responseUnsafe.contact.last_name !== undefined ? userContacts.responseUnsafe.contact.first_name : ""));
        $('.page__departament .employee__box .text[data-field="userPhone"]').text(userContacts.responseUnsafe.contact.phone_number)
    }

    window.Telegram.WebApp.BackButton.show();

    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.history.back()
    });
})