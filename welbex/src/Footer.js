import './Footer.css';
import React from "react";
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
        <li className='footer__item'><a href='#' className='footer__link' >Партнёрская программа</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Вакансии</a></li>
        </ul>
        
        <ul>
        <h4 className='Footer__tittle'>Меню</h4>  
        <div className='footer__container-li'> 
            <div className='footer__container-margin'>
        <li className='footer__item'><a href='#' className='footer__link'>Расчёт стоимости</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Услуги</a></li>
        <li className='footer__item' ><a href='#' className='footer__link'>Виджеты</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Интеграции</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Наши клиенты</a></li>
        </div>
        <div className='footer__container-margin'>
        <li className='footer__item'><a href='#' className='footer__link'>Кейсы</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Благодарственные письма</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Сертификаты</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Блог на Youtube</a></li>
        <li className='footer__item'><a href='#' className='footer__link'>Вопрос / Ответ</a></li>
        </div>
        </div> 
        </ul>    
            </div>
            <div className='four'>
            <ul className='four__ul'> 
                <h4 className='Footer__tittle'>Контакты</h4>
        <li className='footer__item'><a href="tel:+7 555 555-55-55" className='footer__link'>+7 555 555-55-55</a>
</li>
<div className='footer__icon-list'>
        <li className='footer__item'><a href='#' className='footer__link icon-list'><FontAwesomeIcon icon={faTelegram} /></a></li>
        <li className='footer__item'><a href='#' className='footer__link icon-list'><FontAwesomeIcon icon={faHome} /></a></li>
        <li className='footer__item'><a href='#' className='footer__link icon-list'><FontAwesomeIcon icon={faWhatsapp} /></a></li>
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