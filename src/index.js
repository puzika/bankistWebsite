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

const headerNavigation = document.querySelector('.navigation');
const headerNavigationLinks = document.querySelectorAll('.navigation__link');
const buttonSignUp = document.querySelectorAll('.btn--sign-up');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

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
})