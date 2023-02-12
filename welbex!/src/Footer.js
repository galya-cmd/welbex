import './Footer.css';
import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';

function Footer (){
    return(
        <div className='footer__container'>
            
            <div className='three'>
            <ul className='three__ul'>
        <h4 className='Footer__tittle'>О компании</h4>
        <li className='footer__item'><Link to='#!' className='footer__link' >Партнёрская программа</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Вакансии</Link></li>
        </ul>
        
        <ul>
        <h4 className='Footer__tittle'>Меню</h4>  
        <div className='footer__container-li'> 
            <div className='footer__container-margin'>
        <li className='footer__item'><Link to='#!' className='footer__link'>Расчёт стоимости</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Услуги</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Виджеты</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Интеграции</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Наши клиенты</Link></li>
        </div>
        <div className='footer__container-margin'>
        <li className='footer__item'><Link to='#!' className='footer__link'>Кейсы</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Благодарственные письма</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Сертификаты</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Блог на Youtube</Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link'>Вопрос / Ответ</Link></li>
        </div>
        </div> 
        </ul>    
            </div>
            <div className='four'>
            <ul className='four__ul'> 
                <h4 className='Footer__tittle'>Контакты</h4>
        <li className='footer__item'><Link to="tel:+7 555 555-55-55" className='footer__link'>+7 555 555-55-55</Link>
        </li>
        <div className='footer__icon-list'>
        <li className='footer__item'><Link to='#!' className='footer__link icon-list'><FontAwesomeIcon icon={faTelegram} /></Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link icon-list'><FontAwesomeIcon icon={faHome} /></Link></li>
        <li className='footer__item'><Link to='#!' className='footer__link icon-list'><FontAwesomeIcon icon={faWhatsapp} /></Link></li>
        </div>
        <li className='footer__item'><p>Москва, Путевой проезд 3с1, к 902</p></li>
            </ul>
        <div className='footer__end'>
    <div className='footer__color'>©WELBEX 2022. Все права защищены.</div>
    <div className='footer__color'>Политика конфиденциальности</div>
        </div>
            </div>
        </div>
    )
}

export default Footer;