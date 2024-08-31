
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 2500, // Delay between transitions (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
  });
