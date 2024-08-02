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
/* advice-slider */
const swiper2 = new Swiper('.advice-slider', {
  loop: true,
  navigation: {
    nextEl: '.advice-next',
    prevEl: '.advice-prev',
  },
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
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


/* filter */
$("#filterToggler").click(() => {
  $("#filterToggler").find("img").toggleClass("rotate-180")
  $("#filterList").slideToggle()
})


/* tabs */
$(".tab-main").each(function(index) {
  let $this = $(this);
  let prefix = "tabs-" + index;

  $this.find("ul a").each(function(tabIndex) {
    let $tab = $(this);
    let tabId = prefix + "-tab-" + tabIndex;
    let panelId = prefix + "-panel-" + tabIndex;

    $tab.attr("href", "#" + panelId);
    $tab.closest("li").attr("id", tabId);
  });

  $this.find(".tab-card").each(function(panelIndex) {
    $(this).attr("id", prefix + "-panel-" + panelIndex);
  });

  $this.tabs();
});


/* search */
$("#searchToggler").click(() => {
  $("#search").removeClass("max-lg:-translate-y-[500px]")
  $("#overlay").removeClass("hidden")
})
$("#searchClose").click(() => {
  $("#search").addClass("max-lg:-translate-y-[500px]")
  $("#overlay").addClass("hidden")
})