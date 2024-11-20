$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		$(".mobile-menu").toggleClass("act");
		$('.menu-slide-wrap').toggleClass("move");
	});

	$('.more-docs-btn').click(function() {
		$(this).hide().parent().children('.more-docs').show();
		return false;
	});
	$('.comment-open').click(function() {
		$(this).toggleClass('act').parent().children('.comm-hide').toggle();
		return false;
	});

	$('.enter-form .pass .show').click(function() {
		$('.enter-form .pass input').attr('type', 'text');
	});

	$('.open-hidden-rows').click(function() {
		$('.bonus-table tr').css({'display':'table-row'});
		$(this).hide();
		return false;
	});

	$('.enter-box .name a').on('click', function(e){
		e.preventDefault();
		$('.drop-links').show();
		$(this).addClass('act');
		return false;
	})

	$('.drop-links .cl').on('click', function(){
		$('.drop-links').hide();
		$(this).removeClass('act');
	})

	if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('.enter-box .tt .name .fio').text(lastName + " " + firstName);
        $('.enter-box .img img').attr('src', userPhoto);

        // fetch('https://adamwebdemo.duckdns.org/api/getUserPhotoBase64?userId=' + window.Telegram.WebApp.initDataUnsafe?.user?.id + '', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((res) => {
        //     if (res.ok) {
        //         return res.json(); // Correctly parse the JSON response
        //     } else {
        //         throw new Error('Network response was not ok');
        //     }
        // }).then((result) => {
        //     $('.enter-box .img img').attr('src', "data:image/png;base64, " + result.photo);
        // }).catch((error) => {
        //     console.error('There has been a problem with your fetch operation:', error);
        // });

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
	
});
