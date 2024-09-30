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

	
});
