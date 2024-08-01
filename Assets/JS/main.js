/* nav-slider */
const swiper = new Swiper('.nav-slider', {
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
    spaceBetween: 10,
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1280: {
          slidesPerView: 6,
        }
    }
});


/* back to top */
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    $("#to-top-button").removeClass("hidden");
  } else {
    $("#to-top-button").addClass("hidden");
  }
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}