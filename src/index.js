'use strict';

import './styles/main.scss';
import logo from './assets/logo.png';
import headerImg from './assets/hero.png';
import featuresImg1 from './assets/digital.jpg';
import featuresImg2 from './assets/grow.jpg';
import featuresImg3 from './assets/card.jpg';

const logoNavigation = document.querySelector('.navigation__logo');
const headerImage = document.querySelector('.header__image');
const featuresImage1 = document.querySelector('.features__image--1');
const featuresImage2 = document.querySelector('.features__image--2');
const featuresImage3 = document.querySelector('.features__image--3');

logoNavigation.src = logo;
headerImage.src = headerImg;
featuresImage1.src = featuresImg1;
featuresImage2.src = featuresImg2;
featuresImage3.src = featuresImg3;