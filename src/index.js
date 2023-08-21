'use strict';

import './styles/main.scss';
import logo from './assets/logo.png';
import headerImg from './assets/hero.png';
import featuresImg1 from './assets/digital.jpg';
import featuresImg2 from './assets/grow.jpg';
import featuresImg3 from './assets/card.jpg';
import userImg1 from './assets/user-1.jpg';
import userImg2 from './assets/user-2.jpg';
import userImg3 from './assets/user-3.jpg';
import footerImg from './assets/icon.png';

const logoNavigation = document.querySelector('.navigation__logo');
const headerImage = document.querySelector('.header__image');
const featuresImage1 = document.querySelector('.features__image--1');
const featuresImage2 = document.querySelector('.features__image--2');
const featuresImage3 = document.querySelector('.features__image--3');
const userImage1 = document.querySelector('.user__image--1');
const userImage2 = document.querySelector('.user__image--2');
const userImage3 = document.querySelector('.user__image--3');
const footerImage = document.querySelector('.footer__logo');

logoNavigation.src = logo;
headerImage.src = headerImg;
featuresImage1.src = featuresImg1;
featuresImage2.src = featuresImg2;
featuresImage3.src = featuresImg3;
userImage1.src = userImg1;
userImage2.src = userImg2;
userImage3.src = userImg3;
footerImage.src = footerImg;

const header = document.querySelector('.header');
const headerNavigation = document.querySelector('.navigation');
const headerNavigationLinks = document.querySelectorAll('.navigation__link');
const headerTitle = document.querySelector('.header__title');
const buttonSignUp = document.querySelectorAll('.btn--sign-up');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const linkScroll = document.querySelector('.link--scroll');
const sectionFeatures = document.querySelector('.section--1');
const featuresImages = document.querySelectorAll('.features__image');
const featuresContent = document.querySelectorAll('.features__feature');
const sections = document.querySelectorAll('.section');
const operationsTabs = document.querySelectorAll('.operations__tab');
const operationsTabsBox = document.querySelector('.operations__tabs');
const operationsContent = document.querySelectorAll('.operations__content');
const slides = document.querySelectorAll('.slider__slide');
const sliderBtnLeft = document.querySelector('.slider__btn--left');
const sliderBtnRight = document.querySelector('.slider__btn--right');
const sliderDotBox = document.querySelector('.slider__dots');
const sliderDots = document.querySelectorAll('.slider__dot');

featuresImage2.style.gridArea = '2 / 2 / 3 / 3';

function showPopup() {
   overlay.classList.remove('hidden');
   popup.classList.remove('hidden');
}

function hidePopup() {
   overlay.classList.add('hidden');
   popup.classList.add('hidden');
}

headerNavigation.addEventListener('mouseover', function (e) {
   const target = e.target;
   const isLink = target.classList.contains('navigation__link');

   if (!isLink) return;

   logoNavigation.classList.add('obscured');

   headerNavigationLinks.forEach(currElement => {
      if (currElement !== target) currElement.classList.add('obscured');
   });
});

headerNavigation.addEventListener('mouseout', function (e) {
   const target = e.target;
   const isLink = target.classList.contains('navigation__link');

   if (!isLink) return;

   logoNavigation.classList.remove('obscured');

   headerNavigationLinks.forEach(currElement => {
      if (currElement !== target) currElement.classList.remove('obscured');
   });
});

buttonSignUp.forEach(button => button.addEventListener('click', function (e) {
   e.preventDefault();

   showPopup();
}));

overlay.addEventListener('click', function (e) {
   hidePopup();
});

popupClose.addEventListener('click', function (e) {
   hidePopup();
});

linkScroll.addEventListener('click', function (e) {
   e.preventDefault();

   sectionFeatures.scrollIntoView({ behavior: 'smooth' });
});

headerNavigation.addEventListener('click', function (e) {
   const target = e.target;

   if (!target.classList.contains('navigation__link') || target.classList.contains('btn')) return;

   e.preventDefault();

   const sectionNum = target.dataset.to;

   const targetSection = document.querySelector(`.section--${sectionNum}`);

   targetSection.scrollIntoView({ behavior: 'smooth' });
});

featuresImages.forEach((image, index) => {
   if (index % 2 !== 0) {
      image.classList.add('move-right');
   } else {
      image.classList.add('move-left');
   }

   image.classList.add('hidden');
});

featuresContent.forEach((feature, index) => {
   if (index % 2 !== 0) {
      feature.classList.add('move-left');
   } else {
      feature.classList.add('move-right');
   }

   feature.classList.add('hidden');
});

const optionsFeatures = {
   threshold: .5,
}

const observerFeatures = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = entry.target;

      if (target.classList.contains('move-right')) target.classList.remove('move-right');

      if (target.classList.contains('move-left')) target.classList.remove('move-left');

      target.classList.remove('hidden');

      observer.unobserve(target);
   });

}, optionsFeatures);

featuresImages.forEach(image => observerFeatures.observe(image));

featuresContent.forEach(feature => observerFeatures.observe(feature));

const observerSections = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const target = entry.target;

      target.classList.remove('hidden');
      target.classList.remove('move-down');

      observer.unobserve(target);
   })
});

sections.forEach((section, index) => {
   if (index !== 0) {
      section.classList.add('move-down');
      section.classList.add('hidden');
      observerSections.observe(section);
   }
});

const navHeightStatic = 45;
const navHeightSticky = 90;

const optionsNavigation = {
   rootMargin: `-${navHeightSticky}px 0px 0px 0px`,
}

const observeNavigation = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         headerNavigation.classList.add('sticky');
         header.style.paddingTop = `${navHeightStatic + 20}px`;
      } else {
         headerNavigation.classList.remove('sticky');
         header.style.paddingTop = `20px`; //20 - top padding of the header
      }
   });
}, optionsNavigation);

observeNavigation.observe(header);

operationsTabsBox.addEventListener('click', function (e) {
   const target = e.target.closest('.operations__tab');

   if (!target) return;

   operationsTabs.forEach(tab => tab.classList.remove('operations__tab--active'));

   operationsContent.forEach(content => content.classList.remove('operations__content--active'));

   target.classList.add('operations__tab--active');

   const tabNumber = target.dataset.tab;

   const targetContent = document.querySelector(`.operations__content--${tabNumber}`);

   targetContent.classList.add('operations__content--active');
});

let currentSlide = 0;

function moveSlide() {
   if (this === 'left') {
      currentSlide = (currentSlide === 0) ? 2 : currentSlide - 1;
   }

   if (this === 'right') {
      currentSlide = (currentSlide === 2) ? 0 : currentSlide + 1;
   }

   slides.forEach((slide, index) => slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`);
}

moveSlide();

sliderBtnLeft.addEventListener('click', moveSlide.bind('left'));
sliderBtnRight.addEventListener('click', moveSlide.bind('right'));

sliderDotBox.addEventListener('click', function (e) {
   const target = e.target;

   if (!target.classList.contains('slider__dot')) return;

   sliderDots.forEach(dot => dot.classList.remove('slider__dot--active'));

   target.classList.add('slider__dot--active');

   const dotNumber = +target.dataset.dot;

   currentSlide = dotNumber - 1;

   moveSlide();
})