$(document).ready(function() {
    const calendar = {
        $calendarBody: $('div[calendarBody]'),
        Orders: [],
        today: new Date(),
        indentation: 3,
        init() {
            const weeksCount = 4; // Количество недель для получения
            const weekDates = calendar.getWeeksDates(weeksCount);
            calendar.Orders = dataTable; // получение списка заказов пользователя
            weekDates.forEach(date => {
                const isToday = date.toISOString().split('T')[0] === calendar.today.toISOString().split('T')[0];
                const isSetDayOff = calendar.isSetDayOff(date);
                const items = calendar.getOrders(date);
                const $calendarDay = $(`
                    <div data-active="false" data-calendarDay="${date.toISOString().split('T')[0]}" class="flex flex-col gap-2 p-2 border-2 border-[#f8f8fa] ${isToday ? 'bg-[#f8f8fa]' : 'bg-white'} w-full h-full min-h-16 ${ isSetDayOff ? 'cursor-pointer' : ' cursor-not-allowed'} min-h-32">
                     <p class="font-montserrat font-semibold text-xs text-black">${date.getDate()}</p>
                     <div class="flex flex-col gap-2">
                     ${items.html}
                    </div>
                    </div>`)
                if(isSetDayOff) {
                    $calendarDay.on('click', () => {
                        if(!$calendarDay.hasClass('bg-green-300')){
                            $calendarDay.addClass('bg-green-300');
                            $calendarDay.removeClass('bg-white');
                            $calendarDay.attr('data-active', 'true');
                        }else{
                            $calendarDay.addClass('bg-white');
                            $calendarDay.removeClass('bg-green-300');
                            $calendarDay.attr('data-active', 'false');
                        }
                    });
                }
                calendar.$calendarBody.append($calendarDay);
            });
        },
        getWeeksDates(weeksCount) {
            const dayOfWeek = calendar.today.getDay(); // Получаем номер текущего дня недели (0 - воскресенье, 1 - понедельник, и т.д.)
            
            // Вычисляем смещение для получения понедельника
            const mondayOffset = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // Если воскресенье, смещение будет -6, иначе - (номер дня - 1)
            
            const dates = [];
            
            // Получаем даты с понедельника по воскресенье для заданного количества недель
            for (let week = 0; week < weeksCount; week++) {
                for (let i = 0; i < 7; i++) {
                    const date = new Date(); // Создаем новый объект даты
                    date.setDate(calendar.today.getDate() + mondayOffset + (week * 7) + i); // Устанавливаем дату
                    dates.push(date); // Добавляем дату в массив
                }
            }
            
            return dates;
        },
        getOrders(date) { 
            let items = ``;
            const ordersCurrentDay = calendar.Orders.filter(item => item.order.date.split('T')[0] === date.toISOString().split('T')[0]);
            ordersCurrentDay.forEach(item => {
                items += `
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <a href="#">
                                <p class="font-montserrat font-semibold text-sm text-black hover:text-[#7a5bca]">Заказ ${item.order.name}</p>
                            </a>
                        </div>
                    </div>
                `;
            });
            return {
                count: ordersCurrentDay.length,
                html: items
            }
        },
        isSetDayOff(date) {
            const currentDay = calendar.today.getDate(); // Текущий день месяца
            const currentMonth = calendar.today.getMonth(); // Текущий месяц
            const currentYear = calendar.today.getFullYear(); // Текущий год

            if (date.getDate() > currentDay + calendar.indentation) {
                return true;
            }

            if (date.getMonth() > currentMonth || date.getFullYear() > currentYear) {
                return true;
            }

            return false;
        }
    }

    calendar.init();

    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/furnitureAssemMain.html";
    });
});
