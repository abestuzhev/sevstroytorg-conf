$(document).ready(function() {


	$('.conf-color').css('display', 'none');

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
		$('.conf-roof').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-roof-old').css('background-image', image_path);
		}, 500);


	});

	$('.conf-submenu--facade .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-facade').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-facade-old').css('background-image', image_path);
		}, 1000); 
	});

	$('.conf-submenu--drains .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-drains').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-drains-old').css('background-image', image_path);
		}, 300);
	});

	$('.conf-submenu--plinth .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plinth').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-plinth-old').css('background-image', image_path);
		}, 1000);
	});

	$('.conf-submenu--fence .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-fences').css('background-image', image_path);
		
	});

	$('.conf-submenu--angels .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-angles').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-angels-old').css('background-image', image_path);
		}, 1000);
	});

	$('.conf-submenu--porch .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-porch').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-porch-old').css('background-image', image_path);
		}, 400);
	});

	$('.conf-submenu--plat .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plat').css('background-image', image_path);
		setTimeout(function () {
			$('.conf-plat-old').css('background-image', image_path);
		}, 1000);
	});


	/*выбор материала*/

	$('.conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('conf-current');
		$(this).parents('.conf-properties').siblings().find('.conf-properties_btn').removeClass('conf-current');
		$(this).addClass('conf-current');


		// if ($('.conf-color_item').hasClass("color_is-active")) {
		// 	var $confColor = $(this).data('color');
		// 	$('.conf-roof').attr('style', $confColor);
		// }

		if($(".conf-properties_btn").hasClass("conf-current")) {
			var $conf_material = $(this).data('properties');
			var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
			$conf_current.show();
			$conf_current.siblings('.conf-color').hide();
		}
	});

});//end ready


//
// var linkFacade = document.querySelector(".conf-submenu--facade .conf-color_item");
// var blockFacade = document.querySelector(".conf-facade");
// var blockFacadeOld = document.querySelector(".conf-facade-old");
//
// linkFacade.addEventListener("click", function (e) {
// 	e.preventDefault();
// 	var image_path = this.getAttribute('data-color');
// 	blockFacade.setAttribute('style', image_path);
// 	setTimeout(function () {
// 		blockFacadeOld.setAttribute('style', image_path);
// 	}, 1000);
// });
