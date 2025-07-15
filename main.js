document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.main-swiper', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.main-next',
      prevEl: '.main-prev',
    },
  });

  new Swiper('.fashion-swiper', {
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.fashion-next',
      prevEl: '.fashion-prev',
    },
  });

  document.querySelectorAll('.favorite').forEach(el => {
    const defaultSrc = el.getAttribute('data-default');
    const filledSrc = el.getAttribute('data-filled');
    el.style.backgroundImage = `url(${defaultSrc})`;

    el.addEventListener('click', () => {
      const isSelected = el.getAttribute('data-selected') === 'true';
      el.style.backgroundImage = `url(${isSelected ? defaultSrc : filledSrc})`;
      el.setAttribute('data-selected', isSelected ? 'false' : 'true');
    });
  });

  const toTopBtn = document.querySelector(".to-top");
  if (toTopBtn) {
    window.addEventListener("scroll", function () {
      toTopBtn.classList.toggle("show", window.scrollY > 300);
    });

    toTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('menuToggle');
  const closeBtn = document.getElementById('closeSidebar');

  if (openBtn && closeBtn && sidebar) {
    openBtn.addEventListener('click', () => {
      sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }
  let productSwiperInstance = null;

  function initProductSwiper() {
    const container = document.querySelector('.product-swiper');

    if (window.innerWidth <= 450 && container) {
      if (!productSwiperInstance) {
        productSwiperInstance = new Swiper('.product-swiper', {
          loop: true,
          speed: 800,
          slidesPerView: 1,
          spaceBetween: 16,
          navigation: {
            nextEl: '.product-next',
            prevEl: '.product-prev',
          },
        });
      }
    } else if (productSwiperInstance) {
      productSwiperInstance.destroy(true, true);
      productSwiperInstance = null;
    }
  }

  window.addEventListener('resize', initProductSwiper);
  initProductSwiper();

const catalogBtn = document.querySelector('.nav-icons img[alt="search"]')?.closest('a');
const catalogPanel = document.getElementById('catalogPanel');
const closeCatalogBtn = document.getElementById('closeCatalog');

if (catalogBtn && catalogPanel && closeCatalogBtn) {
  catalogBtn.addEventListener('click', (e) => {
    e.preventDefault();
    catalogPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeCatalogBtn.addEventListener('click', () => {
    catalogPanel.classList.remove('open');
    document.body.style.overflow = '';
  });
}


});
