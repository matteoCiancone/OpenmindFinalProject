var swiper = new Swiper(".swiperSp", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    },
});


var swiper = new Swiper(".swiperService", {
    loop: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        425: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 5,
        }
    },
});