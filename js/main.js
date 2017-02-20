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
		}, 500);
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

	function getActiveBlock(element) {
		element.siblings().removeClass('conf-current');
		element.parents('.conf-properties').siblings().find('a').removeClass('conf-current');
		element.addClass('conf-current');

		if(element.hasClass("conf-current")) {
			var $conf_material = element.data('properties');
			var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
			$conf_current.show();
			$conf_current.siblings('.conf-color').hide();
			var $firstChildActive = $conf_current.children('.conf-properties_body').find('a:first-child');
			$firstChildActive.addClass('color_is-active').siblings().removeClass('color_is-active');
			var image_pathActive = $firstChildActive.data('color');
			console.log(image_pathActive);


			var $this_subtitle = $firstChildActive.parents('.conf-properties_body').siblings('.conf-properties_subtitle').children('span');
			var $this_colorName = $firstChildActive.data('color-name');
			$this_subtitle.empty();
			$this_subtitle.append($this_colorName);
		}
		return image_pathActive;
	};

	//кровля
	$('.conf-submenu--roof .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-roof').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//фасад
	$('.conf-submenu--facade .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-facade').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//водосток
	$('.conf-submenu--drains .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-drains').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//цоколь
	$('.conf-submenu--plinth .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);

		$('.conf-plinth').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//ограждение
	$('.conf-submenu--fence .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-pillars').hide();
		$('.conf-fences').css('background-image', 'url("'+ image_pathCurrent +'")');
	});


	//фигурные ограждения

	$('.conf-properties_btn--figur').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrentFigur = getActiveBlock($this);
		$('.conf-pillars').show();
		$('.conf-fences').css('background-image', 'url("'+ image_pathCurrentFigur +'")');
	});


	//столбы
	$('.conf-properties_btn--pillar').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		var image_pathFigur =  $('.conf-color_item--figur').data('color');
		$('.conf-fences').css('background-image', 'url("'+ image_pathFigur +'")');
		$('.conf-pillars').show().css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//софиты
	$('.conf-properties_btn--soffits').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-soffits').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//углы
	$('.conf-submenu--angels .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-angels').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//крыльцо
	$('.conf-submenu--porch .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-porch').css('background-image', 'url("'+ image_pathCurrent +'")');
	});

	//наличники
	$('.conf-submenu--plat .conf-properties_btn').on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		var image_pathCurrent = getActiveBlock($this);
		$('.conf-plat').css('background-image', 'url("'+ image_pathCurrent +'")');
	});


	//показ набора цветов по умолчанию

	function ConfDefault(confCurrent, confPlace) {
		var $conf_material = $(confCurrent).data('properties');
		var $conf_current = $('.conf-color[data-properties="color-' + $conf_material + '"]');
		$conf_current.show();
		$conf_current.siblings('.conf-color').hide();
		// var $firstChildActive = $conf_current.children('.conf-properties_body').find('a:first-child');
		// $firstChildActive.addClass('color_is-active').siblings().removeClass('color_is-active');
	}

	ConfDefault('.conf-submenu--roof .conf-current, .conf-roof');
	ConfDefault('.conf-submenu--facade .conf-current, .conf-facade');
	ConfDefault('.conf-submenu--drains .conf-current, .conf-drains');
	ConfDefault('.conf-submenu--plinth .conf-current, .conf-plinth');
	ConfDefault('.conf-submenu--fence .conf-current, .conf-fences');
	ConfDefault('.conf-submenu--angels .conf-current, .conf-angels');
	ConfDefault('.conf-submenu--porch .conf-current, .conf-porch');
	ConfDefault('.conf-submenu--plat .conf-current, .conf-plat');
	ConfDefault('.conf-color_item--soffits .conf-current, .conf-soffits');


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
	ShowColorName('.conf-properties_additional .conf-color_item');

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


	//tooltip



	$("a[data-color-name]").hover(function(){
		$('.tooltip').remove();
		$(this).css('position','relative');
		var $toolTiptext = $(this).attr('data-color-name');
		$(this).append("<div class='tooltip'>"+$toolTiptext +"</div>");
	}, function(){
		$(this).css('position','');
		$('.tooltip').remove();
	});

});//end ready
