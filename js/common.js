$(function() {

	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	})
	.after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu")
	.parent().mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню"
		}
	});

	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
	});

	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});


	$(".home__slider").owlCarousel({
        loop: true,
        items: 1,
        itemClass: "slide-wrap",
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 600
	});
	
	$(".team__section-items").owlCarousel({
        loop: true,
        itemClass: "slide-wrap",
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		smartSpeed: 600,
		responsive: {
			1300: {
				items: 2
			},
			1200: {
				items: 2
			},
			992: {
				items: 2
			},
			768: {
				items: 1
			},
			480: {
				items: 1
			},
			320: {
				items: 1
			}
		},
		margin: 30,
		dots: true
    });


});