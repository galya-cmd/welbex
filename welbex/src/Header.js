import './Header.css';
import React from 'react';
import logo from './assets/img/logo_welbex.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


 function Header() {
    return(
        
        <div className="wrapper">
            <div className='header__wrapper'>

                <div className='header__logo'>
                    <Link to='/' className="header__logo-link header__item"><img src={logo} alt="logo"></img></Link>
                </div>



            <nav className='header__nav'>
                <ul className='header__list'>
                <li className='header__item'>
                        <Link to='/'  className='header__link'>Главная</Link>
                    </li>
                    <li className='header__item'>
                        <Link to='/services'  className='header__link'>Услуги</Link>
                    </li>
                    <li className='header__item'>
                        <Link to='/widgets'className='header__link'>Виджеты</Link>
                        
                    </li>
                    <li className='header__item'>
                        <Link to='/integration' className='header__link'>Интеграции</Link>                        
                    </li>
                    <li className='header__item'>
                        <Link to='/cases' className='header__link'>Кейсы</Link>                    
                    </li>
                    <li className='header__item'>
                        <Link to='/certificates'  className='header__link'>Сертификаты</Link>
                        <a href='#' ></a>
                    </li>
                </ul>
            </nav>


            <div className='header__list-right'>
                <ul className='header__list'>
                <li className='header__item'><Link to="tel:+7 555 555-55-55" className='footer__link header__link'>+7 555-55-55</Link>
                </li>
                <li className='header__item-contacts'><Link to='#!'><FontAwesomeIcon icon={faTelegram} className='header__link icon'/></Link></li>
                <li className='header__item-contacts'><Link to='#!'><FontAwesomeIcon icon={faHome} className='header__link icon'/></Link></li>
                <li className='header__item-contacts'> <Link to='#!' className='header__link icon'><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
                </ul>
                </div>
            </div>            
        </div>
        
    )
 }
 export default Header;