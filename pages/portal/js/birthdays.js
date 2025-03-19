$(function() {
    let birthdaysTab = $('.widget__birthdays .tab');
    let birthdaysTabItems = birthdaysTab.find('li');
    let birthdaysTabsInfo = $('.widget__birthdays__tab');

    // Обработчик клика на вкладке дня рождения
    birthdaysTabItems.on('click', function() {
        birthdaysTabItems.add(birthdaysTabsInfo).removeClass('active');
        let index = $(this).index();
        birthdaysTabsInfo.eq(index).add($(this)).addClass('active');
    });

    // Обработчики кнопок
    $('.card__footer .link, .notification__form .btn').on('click', function() {
        $('#popUp').modal('toggle');
    });

    $('.modal-comment__form .btn').on('click', function() {
        $('.modal-body .img, .modal-comment__form').hide();
        $('.notification__form').removeClass('disable__block');
    });

});