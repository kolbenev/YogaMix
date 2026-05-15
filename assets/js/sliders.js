
function initSliders() {
	document.querySelectorAll('.certificates__body').forEach(body => {

		const slider = body.querySelector('.certificates__slider');
		const prev = body.querySelector('.certificates__prev');
		const next = body.querySelector('.certificates__next');

		new Swiper(slider, {
			observer: true,
			observeParents: true,

			speed: 500,
			slidesPerView: 1,
			spaceBetween: 100,

			navigation: {
				prevEl: prev,
				nextEl: next,
			},
		});

	});

	if (document.querySelector('.gallery__slider')) {
		new Swiper('.gallery__slider', {
			observer: true,
			observeParents: true,
			speed: 500,
			slidesPerView: 1,
			spaceBetween: 100,
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

		});
	}

	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			observer: true,
			observeParents: true,
			centeredSlides: false,
			speed: 500,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.reviews__prev',
				nextEl: '.reviews__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
					slidesPerGroup: 2,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
					slidesPerGroup: 3,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 70,
					slidesPerGroup: 3,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 144,
					slidesPerGroup: 3,
				},
			},

		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
});