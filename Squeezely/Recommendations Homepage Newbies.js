setTimeout( function(){
	$('.product-slider--container--squeezely').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<span class="product--properties__nav product--properties__nav--prev"><i data-icon="T"></i></span>',
		nextArrow: '<span class="product--properties__nav product--properties__nav--next"><i data-icon="b"></i></span>',
		cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
		speed: 650,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
}, 500 );