$(document).ready(function() {
    let datepicker = $('input[name="datepicker"]');

    datepicker.daterangepicker({
        autoUpdateInput: false,
        locale: {
            format: 'DD.MM.YYYY',
            applyLabel: 'Применить',
            cancelLabel: 'Отменить',
            separator: " - ",
            daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
            firstDay: 1
        }
    });

    datepicker.on('apply.daterangepicker', function(ev, picker) {
        const opt = { month: 'long' };
        let dateEnd = new Date(picker.endDate);
        $(this).val('C ' + picker.startDate.format('DD') + ' по ' + picker.endDate.format('DD') + ' ' + dateEnd.toLocaleDateString('ru-RU', opt));
    });

    datepicker.on('cancel.daterangepicker', function(ev, picker) {
        datepicker.val('');
    });
});