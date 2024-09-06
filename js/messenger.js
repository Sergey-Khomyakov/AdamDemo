$(document).ready(function() {
    // const countItemMessage = $('.page__messenger__body .message__item').length;
    // if (countItemMessage < 7) {
    //     $('.page__messenger__body').addClass('min');
    // } else {
    //     $('.page__messenger__body').removeClass('min');
    // }

    $('.show__menu').on('click', function() {
        let block = $('.page__messenger .page__messenger__block:eq(0)');
        let block2 = $('.page__messenger .page__messenger__block:eq(1)');
        if (!block.hasClass('active')) {
            block.addClass('active');
            block2.addClass('hidden');
        } else {
            block.removeClass('active');
            block2.removeClass('hidden');
        }
    })
});