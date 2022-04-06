window.addEventListener('DOMContentLoaded', () => {
  // * ==== Dropdown
  document.addEventListener('click', (e) => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
      return;

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      if (dropdown === currentDropdown) return;
      dropdown.classList.remove('active');
    });
  });

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.team__slider');
    new Swiper(sliderEl, {
      spaceBetween: 30,
      slidesPerView: 'auto',
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        319: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 30,
        },
      },
    });
  })();
  (function sliderCases() {
    const sliderEl = document.querySelector('.cases__slider');
    new Swiper(sliderEl, {
      spaceBetween: 30,
      slidesPerView: 'auto',
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        319: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 30,
        },
      },
    });
  })();
  (function sliderBlog() {
    const sliderEl = document.querySelector('.blog-popular__slider');
    new Swiper(sliderEl, {
      spaceBetween: 30,
      slidesPerView: 'auto',
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      breakpoints: {
        319: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 30,
        },
      },
    });
  })();
  (function sliderReviews() {
    const sliderEl = document.querySelector('.reviews__slider');
    new Swiper(sliderEl, {
      spaceBetween: 20,
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 2,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
    });
  })();

  // (function showMore() {
  //   const btn = document.querySelector('.activity-box__show-more');
  //   const content = document.querySelector('.activity-box__list');
  //   if (content) {
  //     btn.addEventListener('click', () => {
  //       content.classList.toggle('active');

  //       if (content.classList.contains('active')) {
  //         content.style.maxHeight = content.scrollHeight + 'px';
  //         btn.textContent = 'Свернуть';
  //       } else {
  //         content.style.maxHeight = null;
  //         btn.textContent = 'Развернуть';
  //       }
  //     });
  //   }
  // })();
  // * ===== Custom select
  (function customSelect() {
    const selects = document.querySelectorAll('.select');
    selects.forEach((el) => {
      const select = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
      });
    });
  })();

  function showFormForReview() {
    const box = document.querySelector('.lawyer-review');
    const btn = document.querySelector('.tabs-reviews__btn');
    const btnClose = document.querySelector('.lawyer-review__close');

    if (box) {
      btn.addEventListener('click', (e) => {
        box.classList.add('active');
      });
      btnClose.addEventListener('click', (e) => {
        box.classList.remove('active');
      });
    }
  }
  showFormForReview();
  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();
  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      el.addEventListener('click', (e) => {
        const target = e.target.closest(accordion);
        const content = target.querySelector(accordionContent);
        target.classList.toggle('active');
        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  toggleAccordion('.accordion__control', '.accordion__content', '.accordion');
  // // * ===== Mixer
  // (function mixer() {
  //   const mixContent = document.querySelector('.mixer__content');
  //   if (mixContent) {
  //     const mixer = mixitup(mixContent);
  //   }
  // })();
  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.btn-call', '.popup', '.popup__close');
  })();

  (function showMore() {
    const content = document.querySelectorAll('.activity-box');
    const btn = document.querySelectorAll('.activity-box__show-more');
    const list = document.querySelector('.activity-box__list');
    if (content) {
      btn.forEach((el) => {
        el.addEventListener('click', () => {
          list.classList.toggle('active');

          if (list.classList.contains('active')) {
            list.style.maxHeight = list.scrollHeight + 'px';
            btn.textContent = 'Свернуть';
          } else {
            list.style.maxHeight = null;
            btn.textContent = 'Развернуть';
          }
        });
      });
    }
  })();

  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    if (header) {
      hideTabContent();
      showTabContent();
      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }
      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }
      header.forEach((item) => {
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabSelector.replace(/\./, ''))) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
    }
  }
  someTabs(
    '.tabs',
    '.tabs__top-btn',
    '.tabs__content',
    'tabs__top-btn--active'
  );
  someTabs(
    '.inner-tabs',
    '.inner-tabs__top-btn',
    '.inner-tabs__content',
    'inner-tabs__top-btn--active'
  );
});
