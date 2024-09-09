$(document).ready(function() {
    const userContacts = window.Telegram.Utils.sessionStorageGet("userContacts");

    if(userContacts !== null){
        $('.widget__lk__info .widget__lk__fio, .page__departament .employee__box .text[data-field="userFIO"]').text(userContacts.responseUnsafe.contact.last_name + " " + userContacts.responseUnsafe.contact.first_name);
        $('.page__departament .employee__box .text[data-field="userPhone"]').text(userContacts.responseUnsafe.contact.phone_number)
    }
})