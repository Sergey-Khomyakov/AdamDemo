$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	/* при адаптиве навигация переходит в дропдайун "Еще" */
	function rerender() {
	  var nav = document.getElementById('nav'),
	    // преобразование коллекции в массив
	    li = [].slice.call(document.querySelectorAll('#nav > li:not(#drop)')),
	    drop = document.getElementById('drop');
	  var count = 0,
	    arrWidth = li.map(function(elem) {
	      elem.style.display = "";
	      count += elem.offsetWidth;
	      return elem.offsetWidth;
	    });
	  drop.innerHTML = "Ещё<ul></ul>";
	  if (count >= (nav.offsetWidth - 3)) {
	    drop.style.display = "inline-block";
	    count -= drop.offsetWidth;
	    var navWidth = nav.offsetWidth - drop.offsetWidth;
	    console.log(navWidth);
	    while (count >= navWidth) {

	      var i = arrWidth.pop();
	      console.log(i);
	      count -= i;
	    };
	    console.log("", arrWidth, count, "end", "\n", li, nav.offsetWidth);
	    var toHide = li.slice(arrWidth.length - 1);
	    toHide.forEach(function(el) {
	      var s = el.cloneNode(true);
	      drop.firstElementChild.appendChild(s);
	      el.style.display = "none";
	    });
	  } else
	    drop.style.display = "none";
	}
	rerender();
	onresize = rerender;
	/* дропдайун "Еще" !КОНЕЦ! */

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

	$('.enter-box .name a').on('click', function(){
		$('.drop-links').show();
		$(this).addClass('act');
		return false;
	})

	$('.drop-links .cl').on('click', function(){
		$('.drop-links').hide();
		$(this).removeClass('act');
	})

	
});
