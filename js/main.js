$(document).ready(function() {
	// $(".accordion-desc").fadeOut(0);
	// $(".accordion").click(function() {
	// 	$(".accordion-desc").not($(this).next()).slideUp('fast');
	// 	$(this).next().slideToggle(400);
	// });

	$('.conf-color').css('display', 'none')

	/*submenu*/
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

	/*detail-info*/
	$('.detail-info_btn').on('click', function (e) {
		e.preventDefault();
		$('.detail-info_body').toggleClass('detail-info-show');
	});


	/*палитры цветов*/
	$('.conf-color_item').click(function(e){
		e.preventDefault();
		var $item = $(this);
		$item.addClass('color_is-active').siblings().removeClass('color_is-active');
	});

	$('.conf-submenu--roof .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-roof').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--facade .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-facade').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--drains .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-drain').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--plinth .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plinth').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--fence .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-fences').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--angels .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-angles').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	$('.conf-submenu--porch .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-porch').attr('style', image_path).css('display', 'none').fadeIn(250);
	});

	$('.conf-submenu--plat .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plat').attr('style', image_path).css('display', 'none').fadeIn(350);
	});

	// $('.conf-color_item').click(function(e){
	// 	e.preventDefault();
	// 	$(this).addClass('color_is-active').siblings().removeClass('color_is-active');
	// 	$(this).siblings().removeClass('color_is-active');
    //
	// });
	// if ($('.conf-color_item').hasClass("color_is-active")) {
	// 	var $item = $('.conf-color_item'),
	// 		image_path = $item.data('color');
	// 	$('.conf-roof').attr('style', image_path);
	// 	$item.addClass('color_is-active').siblings().removeClass('color_is-active');
	// }



	/*выбор материала*/

	$('.conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('conf-current');
		$(this).parents('.conf-properties').siblings().find('.conf-properties_btn').removeClass('conf-current');
		$(this).addClass('conf-current');
		// var image_material = $('.conf-color_item').hasClass('color_is-active').data('color');
		// $('.conf-roof').attr('style', image_material);

		// function showBlock() {
		// 	var $image_material = $('.conf-color_item').hasClass('color_is-active'),
		// 		image_data = $image_material.data('color');
		// 	$('.conf-roof').attr('style', image_data);
		// }
		// showBlock();

		if ($('.conf-color_item').hasClass("color_is-active")) {
			var $confColor = $(this).data('color');
			$('.conf-roof').attr('style', $confColor);
			// $('.conf-facade').attr('style', $confColor);
			// $('.conf-drain').attr('style', $confColor);
			// $('.conf-fences').attr('style', $confColor);
			// $('.conf-plinth').attr('style', $confColor);
		}

		if($(".conf-properties_btn").hasClass("conf-current")) {
			var $conf_material = $(this).data('properties');
			var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
			$conf_current.show();
			$conf_current.siblings('.conf-color').hide();
		}
	});


});//end ready
