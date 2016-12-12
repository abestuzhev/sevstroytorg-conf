$(document).ready(function() {
    // $(".accordion-desc").fadeOut(0);
    // $(".accordion").click(function() {
    // 	$(".accordion-desc").not($(this).next()).slideUp('fast');
    // 	$(this).next().slideToggle(400);
    // });

    $('.conf-menu_item').on('click', function (e) {
        e.preventDefault();
        $(this).siblings().children('.conf-submenu').removeClass('js-show-conf-submenu');
        // $(this).siblings().removeClass('js-show-conf-submenu');
        $(this).children('.conf-submenu').addClass('js-show-conf-submenu');
        // $(this).addClass('js-show-conf-submenu');
        $(this).siblings().children('.conf-menu_link').removeClass('js-show-pointer');
        $(this).children('.conf-menu_link').addClass('js-show-pointer');
    });

    $('.conf-submenu_close').on('click', function (e) {
        e.preventDefault();
        $('.conf-menu_link').removeClass('js-show-pointer');
        $('.conf-menu_item').removeClass('js-show-conf-submenu');
    });

    // var	style = $('.conf-metal').css('background-image');
    $('.conf-color_item').click(function(e){
        e.preventDefault();
        var $item = $(this),
            image_path = $item.data('color');
        $('.conf-roof').attr('style', image_path);
        $item.addClass('color_is-active').siblings().removeClass('color_is-active');
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
