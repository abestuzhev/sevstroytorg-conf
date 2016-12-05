$(document).ready(function() {
	$(".accordion-desc").fadeOut(0);
	$(".accordion").click(function() {
		$(".accordion-desc").not($(this).next()).slideUp('fast');
		$(this).next().slideToggle(400);
	});

	$('.conf-menu_link').on('click', function (e) {
		e.preventDefault();
		$(this).find('.conf-submenu').show();
	})
});