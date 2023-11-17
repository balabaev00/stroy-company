console.log('Im here')
/**Инициализируем свайпер*/
new Swiper('.documents__slide-content', {
    // Автоматическая высота
    // autoHeight: true,

    // Кол-во слайдов на экране
    slidesPerView: 3,

    // Растояние между слайдами
    spaceBetween: 15,

    // По центру распологать слайды
    centeredSlides: 'true',

    fade: 'true',
    grabCursor: 'true',

    // Стартовый слайд
    initialSlide: 0,

    // Бесконечный прокрут
    loop: true,


    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: 'true',
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});
