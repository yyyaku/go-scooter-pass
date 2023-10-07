const sliderExclusive = document.querySelector('.exclusive__swiper');
const sliderExclusiveList = document.querySelector('.exclusive__list');
const sliderExclusiveCard = document.querySelector('.exclusive__item');
const buttons = document.querySelector('.exclusive__buttons');
const buttonPrev = document.querySelector('.exclusive__button--prev');
const buttonNext = document.querySelector('.exclusive__button--next');

const initSliderExclusive = () => {
  if (window.innerWidth < 768) {
    if (sliderExclusive) {
      // eslint-disable-next-line
      new Swiper(sliderExclusive, {

        navigation: {
          nextEl: buttonNext,
          prevEl: buttonPrev,
        },

        slidesPerView: 1,
        spaceBetween: 30,
      });
    }
  } else {
    sliderExclusive.classList.remove('swiper');
    sliderExclusiveList.classList.remove('swiper-wrapper');
    sliderExclusiveCard.classList.remove('swiper-slide');
    buttons.classList.remove('swiper-buttons');
  }
};

export {initSliderExclusive};
