var swiper = new Swiper('.swiper-university .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay:2000,
    },
    pagination: {
      el: '.swiper-university .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        325: {
            slidesPerView:1,
        },
        425: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      
      }
  });
  var swiper2 = new Swiper('.event .swiper-container', {
    spaceBetween:30,
    slidesPerView: 2,
    // autoplay:{
    //     delay:2000,
    // },
    pagination: {
      el: '.event .swiper-pagination',
    },
    breakpoints:{
      300:{
        slidesPerView: 1,
      },
      830:{
        slidesPerView: 2,
      }
    }
  });

  var swiper3 = new Swiper('.country .swiper-container', {
    spaceBetween:30,
    pagination: {
      el: '.country .swiper-pagination',
    },
    
    breakpoints:{
      992:{
        slidesPerView: 3,
      },
      767:{
        spaceBetween: 20,
        slidesPerView: 2,
      },
      300:{
        slidesPerView: 1,
      }
    }
  });
  var swiper4 = new Swiper('.testimonials .swiper-container', {
    slidesPerView: 2.3,
    // centerInsufficientSlides: true,
    // slidesPerGroup: 2,
    spaceBetween: 25,
    pagination: {
      el: '.testimonials .swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      992:{
        slidesPerView: 2.3,
      },
      767:{
        slidesPerView: 1.3,
      },
      475:{
        slidesPerView: 1.3,
      },
      100:{
        slidesPerView: 1,
      }
    }
  });

const menu = document.querySelector('.burger-menu');
const btn = document.querySelector('.burger-menu-btn');
const content =document.querySelector('.burger-menu-nav');
const overlay = document.querySelector('.burger-menu-overlay');

btn.addEventListener('click',()=>{
  menu.classList.toggle('active');
});
overlay.addEventListener('click',()=>{
  menu.classList.toggle('active');
})
