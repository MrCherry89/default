$(document).ready(function () {

	$(".drop-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").addClass("open");
		$("body, html").addClass("overflow");
	})

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$(".menu-wrap").removeClass("open");
		$("body, html").removeClass("overflow");
	})

	$(".drop-menu-2").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".main-wrapper-2").find(".sidebar-wrap").addClass("open");
		$("body, html").addClass("overflow");
	})

	$(".close-menu").on("click", function (e) {
		e.preventDefault();
		$(this).closest(".main-wrapper-2").find(".sidebar-wrap").removeClass("open");
		$("body, html").removeClass("overflow");
	})

	$('.links-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		variableWidth: true,
		prevArrow: $('.links-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.links-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
    },

  ]
	});

	$('.links-slider4').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		variableWidth: true,
		prevArrow: $('.links-slider-wrap4 .slider-navigation .slick-prev'),
		nextArrow: $('.links-slider-wrap4 .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					variableWidth: false,
				}
    },

  ]
	});

	$('.links-slider2').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.links-slider-wrap2 .slider-navigation .slick-prev'),
		nextArrow: $('.links-slider-wrap2 .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1701,
				settings: {
					slidesToShow: 1,
				}
    },

  ]
	});

	$('.links-slider3').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.links-slider-wrap3 .slider-navigation .slick-prev'),
		nextArrow: $('.links-slider-wrap3 .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1701,
				settings: {
					slidesToShow: 1,
				}
    },

  ]
	});

	$('.review-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.review-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.review-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1861,
				settings: {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 3000,
				}
    },

  ]
	});

	$('.service1-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow: $('.service1-slider-wrap .slider-navigation .slick-prev'),
		nextArrow: $('.service1-slider-wrap .slider-navigation .slick-next'),
		responsive: [
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 2,
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
    },

  ]
	});


	$('.service2-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		fade: true,
	});


	$('.interesting-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2,
					dots: true,
				}
    },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
    },

  ]
	});


	function renderAccountInformation(data, container) {
		if (data.id === '') {
			return 'Select account';
		}
		const el = data.element;
		const img = $(el).attr('data-img');
		const title = $(el).attr('data-title');
		return $(`<div class='option-wrap'><img src=${img} /><span>${title}</span></div>`);
	}

	$('#accountSelector').select2({
		allowClear: false,
		minimumResultsForSearch: -1,
		templateResult: renderAccountInformation,
		templateSelection: renderAccountInformation
	});

	$('.select-wrap select').select2({
		minimumResultsForSearch: 6,
	});

	$(".main-button").on("click", function (e) {
		e.stopPropagation();
		$(this).closest(".filter-hide-wrap").find(".filter-content").addClass("open");
	});

	$(document).on("click", function () {
		$(".filter-content").removeClass("open");
	});

	$(".filter-content").on("click", function (e) {
		e.stopPropagation();
	});

	$(function () {
		$("#slider-range-max").slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function (event, ui) {
				$("#amount").val(ui.value);
			}
		});
		$("#amount").val($("#slider-range-max").slider("value"));
	});

	$('#img-upload').on('change', function (e) {
		return readURL(this);
	});

	var readURL = function (input) {
		var reader;
		if (input.files && input.files[0]) {
			reader = new FileReader();
			reader.onload = function (e) {
				$('.img-upload-wrap .img').css('background-image', 'url(' + e.target.result + ')');
				$('.img-upload-wrap').addClass('uploaded');
				$('.img-upload-wrap .icon-change-wrap').removeClass("shown");

			};
			return reader.readAsDataURL(input.files[0]);
		}
	};

	$(document).on("mouseenter", '.img-upload-wrap.uploaded label', function () {
		console.log(1);
		$('.img-upload-wrap .icon-change-wrap').addClass("shown");
	});

	$(document).on("mouseleave", '.img-upload-wrap.uploaded label', function () {
		console.log(2);
		$('.img-upload-wrap .icon-change-wrap').removeClass("shown");
	});


	$(".steps-inputs li input").on("focus", function (e) {
		e.stopPropagation();
		$(this).closest("li").find("img").addClass("shown");
	})







});
