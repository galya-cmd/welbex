import './Header.css';
import React from 'react';
import logo from './assets/img/logo_welbex.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';


 function Header() {
    return(
        
        <div className="wrapper">
            <div className='header__wrapper'>

                <div className='header__logo'>
                <a href='#' className="header__logo-link header__item">
                    <img src={logo} alt="logo"></img>
                </a>
                </div>



            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__item'>
                        <a href='#' className='header__link'>Услуги</a>
                    </li>
                    <li className='header__item'>
                        <a href='#' className='header__link'>Виджеты</a>
                    </li>
                    <li className='header__item'>
                        <a href='#' className='header__link'>Интеграции</a>
                    </li>
                    <li className='header__item'>
                        <a href='#' className='header__link'>Кейсы</a>
                    </li>
                    <li className='header__item'>
                        <a href='#' className='header__link'>Сертификаты</a>
                    </li>
                </ul>
            </nav>


            <div className='header__list-right'>
                <ul className='header__list'>
                <li className='header__item'><a href="tel:+7 555 555-55-55" className='footer__link header__link'>+7 555-55-55</a>
                </li>
                    <li className='header__item-contacts'><a href="#"><FontAwesomeIcon icon={faTelegram} className='header__link icon'/></a></li>
                    <li className='header__item-contacts'> <a className='header__link icon' href='#'><FontAwesomeIcon icon={faHome} /></a></li>
                    <li className='header__item-contacts'> <a className='header__link icon' href='#'><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                </ul>
                </div>
            </div>            
        </div>
        
    )
 }
 export default Header;