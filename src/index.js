'use strict';

import './styles/main.scss';
import logo from './assests/logo.png';
import headerImg from './assets/hero.png';

const logoNavigation = document.querySelector('.navigation__logo');
const headerImage = document.querySelector('.header__image');

logoNavigation.src = logo;
headerImage.src = headerImg;