$(document).ready(function() {
	// $(".accordion-desc").fadeOut(0);
	// $(".accordion").click(function() {
	// 	$(".accordion-desc").not($(this).next()).slideUp('fast');
	// 	$(this).next().slideToggle(400);
	// });

	$('.conf-menu_item').on('click', function (e) {
		e.preventDefault();
		$(this).children('#conf-submenu').addClass('js-show-conf-submenu');
	});

	$('.conf-submenu_close').on('click', function (e) {
		e.preventDefault();
		// $('.conf-submenu').removeClass('js-show-conf-submenu');
		$('#conf-submenu').removeClass('js-show-conf-submenu');
	});

	// $('.slider-gallery-item__thumbs a').click(function(e){
	// 	e.preventDefault();
	// 	var $item = $(this).closest('li'),
	// 		image_path = $item.data('big-image');
	// 	$('.slider-gallery-item__big-image img').attr('src', image_path);
	// 	$item.addClass('is-active').siblings().removeClass('is-active');
	// });

	// var	style = $('.conf-metal').css('background-image');
	$('.conf-color_item').click(function(e){
		e.preventDefault();
		var $item = $(this),
			image_path = $item.data('color');
		$('.conf-metal').attr('style', image_path);
		$item.addClass('conf-is-active').siblings().removeClass('conf-is-active');
	});

});
//
// var link = document.querySelector(".conf-menu_item");
// var menu = document.querySelector(".conf-submenu");
// var close = document.querySelector(".conf-submenu_close");
//
//
// link.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	menu.classList.add("js-show-conf-submenu");
// });
//
// close.addEventListener("click", function (event) {
// 	event.preventDefault();
// 	menu.classList.remove("js-show-conf-submenu");
// });