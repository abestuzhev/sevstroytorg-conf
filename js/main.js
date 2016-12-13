$(document).ready(function() {
	// $(".accordion-desc").fadeOut(0);
	// $(".accordion").click(function() {
	// 	$(".accordion-desc").not($(this).next()).slideUp('fast');
	// 	$(this).next().slideToggle(400);
	// });

	$('.conf-color').css('display', 'none')


	$('.conf-menu_link').on('click', function (e) {
		e.preventDefault();
		$(this).parent().siblings().children('.conf-submenu').removeClass('js-show-conf-submenu');
		$(this).next('.conf-submenu').addClass('js-show-conf-submenu');
		$(this).parent().siblings().children('.conf-menu_link').removeClass('js-show-pointer');
		$(this).addClass('js-show-pointer');
	});


	$('.conf-submenu_close').on('click', function (e) {
		e.preventDefault();
		$('.conf-menu_link').removeClass('js-show-pointer');
		$('.conf-submenu').removeClass('js-show-conf-submenu');
	});



	$('.detail-info_btn').on('click', function (e) {
		e.preventDefault();
		$('.detail-info_body').toggleClass('detail-info-show');
	});

	$('.conf-color_item').click(function(e){
		e.preventDefault();
		var $item = $(this),
			image_path = $item.data('color');
		$('.conf-roof').attr('style', image_path);
		$item.addClass('color_is-active').siblings().removeClass('color_is-active');
	});

	/*current*/
	$('.conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('conf-current');
		$(this).parents('.conf-properties').siblings().find('.conf-properties_btn').removeClass('conf-current');
		$(this).addClass('conf-current');

		if($(".conf-properties_btn").hasClass("conf-current")) {
			var $conf_material = $(this).data('properties');
			var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
			$conf_current.show();
			$conf_current.show();
		}
	});



});
