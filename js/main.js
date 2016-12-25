$(document).ready(function() {

	$('.conf-color').css('display', 'none');

	//Появление подменю
	$('.conf-menu_link').on('click', function (e) {
		e.preventDefault();
		$(this).parent().siblings().children('.conf-submenu').removeClass('js-show-conf-submenu');
		$(this).next('.conf-submenu').addClass('js-show-conf-submenu');
		$(this).parent().siblings().children('.conf-menu_link').removeClass('js-show-pointer');
		$(this).addClass('js-show-pointer');
	});


	//Закрытие меню
	$('.conf-submenu_close').on('click', function (e) {
		e.preventDefault();
		$('.conf-menu_link').removeClass('js-show-pointer');
		$('.conf-submenu').removeClass('js-show-conf-submenu');
	});


	//разворачивание/сворачивание детальной информации
	$('.detail-info_btn').on('click', function (e) {
		e.preventDefault();
		$('.detail-info_body').toggleClass('detail-info-show');
	});


	//выбор активного цвета
	function GetColorActive(colorActive) {
		$(colorActive).click(function(e){
			e.preventDefault();
			var $item = $(this);
			$item.addClass('color_is-active').siblings().removeClass('color_is-active');
		});
	};
	GetColorActive('.conf-color_item');
	GetColorActive('.conf-color_item--figur');
	GetColorActive('.conf-color_item--pillar');
	GetColorActive('.conf-color_item--soffits');

	//показ материалов на доме
	//кровля
	$('.conf-submenu--roof .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-roof').css('background-image', 'url("'+ image_path +'")');
		setTimeout(function () {
			$('.conf-roof-old').css('background-image', 'url("'+ image_path +'")');
		}, 200);
	});

	//фасад
	$('.conf-submenu--facade .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-facade').css('background-image', 'url("'+ image_path +'")');
		setTimeout(function () {
			$('.conf-facade-old').css('background-image', 'url("'+ image_path +'")');
		}, 1000);
	});

	//водостоки
	$('.conf-submenu--drains .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-drains').css('background-image', 'url("'+ image_path +'")');
		// setTimeout(function () {
		// 	$('.conf-drains-old').css('background-image', 'url("'+ image_path +'")');
		// }, 300);
	});

	//цоколь
	$('.conf-submenu--plinth .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plinth').css('background-image', 'url("'+ image_path +'")');
		setTimeout(function () {
			$('.conf-plinth-old').css('background-image', 'url("'+ image_path +'")');
		}, 1000);
	});

	//ограждения
	$('.conf-submenu--fence .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-pillars').hide();
		$('.conf-fences').css('background-image', 'url("'+ image_path +'")');
	});

	//столбы
	$('.conf-color_item--pillar').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-pillars').show().css('background-image', 'url("'+ image_path +'")');
	});

	//фигурные ограждения
	$('.conf-color_item--figur').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-pillars').show();
		$('.conf-fences').css('background-image', 'url("'+ image_path +'")');
	});

	//софиты
	$('.conf-color_item--soffits').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-soffits').css('background-image', 'url("'+ image_path +'")');
	});

	//углы
	$('.conf-submenu--angels .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-angles').css('background-image', 'url("'+ image_path +'")');

	});

	//крыльцо
	$('.conf-submenu--porch .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-porch').css('background-image', 'url("'+ image_path +'")');
	});


	//окна
	$('.conf-submenu--plat .conf-color_item').click(function(e){
		e.preventDefault();
		var image_path = $(this).data('color');
		$('.conf-plat').css('background-image', 'url("'+ image_path +'")');
	});



	//выбор материала
	$('.conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('conf-current');
		$(this).parents('.conf-properties').siblings().find('.conf-properties_btn').removeClass('conf-current');
		$(this).addClass('conf-current');

		if($(".conf-properties_btn").hasClass("conf-current")) {
			var $conf_material = $(this).data('properties');
			var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
			$conf_current.show();
			$conf_current.siblings('.conf-color').hide();
		}
	});


	//показ набора цветов по умолчанию

	function ConfDefault(confCurrent) {
		var $conf_material = $(confCurrent).data('properties');
		var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
		$conf_current.show();
		$conf_current.siblings('.conf-color').hide();

	}
	ConfDefault('.conf-submenu--roof .conf-current');
	ConfDefault('.conf-submenu--facade .conf-current');
	ConfDefault('.conf-submenu--drains .conf-current');
	ConfDefault('.conf-submenu--plinth .conf-current');
	ConfDefault('.conf-submenu--fence .conf-current');
	ConfDefault('.conf-submenu--angels .conf-current');
	ConfDefault('.conf-submenu--porch .conf-current');
	ConfDefault('.conf-submenu--plat .conf-current');

	
	//вывод названия цвета
	function ShowColorName(colorItem) {
		$(colorItem).on('click', function (e) {
			e.preventDefault();
			var $this_subtitle = $(this).parents('.conf-properties_body').siblings('.conf-properties_subtitle').children('span');
			var $this_colorName = $(this).data('color-name');
			$this_subtitle.empty();
			$this_subtitle.append($this_colorName);
		});
	};
	ShowColorName('.conf-color_item');
	ShowColorName('.conf-color_item--pillar');
	ShowColorName('.conf-color_item--figur');
	ShowColorName('.conf-color_item--soffits');

	//предзагрузка изображений
	$('.conf-menu_link').on('click', function (e) {
		e.preventDefault();
		console.log('загрузка нового блока');

		var block = $(this).siblings().attr('class').split(' ')[1];//$('.conf-submenu--drains')
		block = '.'+ block;

		function LoadImage(imagePath) {
			$imagePath = imagePath + ' .conf-color_item';

			$($imagePath).each(function(){
				var imageLoad = new Image();
				imageLoad.src = $(this).attr('data-color');
				imageLoad.onload = function() {
					$(this).css('background-image', 'url("'+ imageLoad.src +'")');
				};
			});
		};
		LoadImage(block);
	});
});//end ready

