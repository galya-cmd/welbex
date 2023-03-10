import './Main.css';
import React from "react";
import welbex from './assets/img/welbex1.svg'
import text from './assets/img/text.svg';


function Main(){
    return(
        <div className="main">
            <div className="intro">

                <div className='main__container'>
                    <div className='main__container-one'>
                    <div className='intro__tittle'>
                    Зарабатывайте больше
                    </div>                    
                    <img  className='intro__logo' src={welbex}></img>                    
                    <p className='intro__text'>Развиваем и контролируем <br/> продажи за вас</p>
                    </div>
                    
                    <div className='main__container-two'>
                        <div className='main__container-logo'>
                        <img  className='intro__logo' src={text}></img>
                        </div>
                    
                    <div className='intro__right'>

                    <div className='intro__box'>
                    <h3>Виджеты</h3>
                    <p className='intro__box-text'>
                        30 готовых решений</p>
                    <div className='intro__box'>
                    <h3>Skype Аудит</h3>
                    <p className='intro__box-skype'>отдела продажи CRM системы</p>
                    </div>
                    </div>

                    <div className='intro__box'>
                    <h3>Dashboard</h3>
                    <p className='intro__box-dashboard'>с показателями вашего бизнеса</p>
                    <div className='intro__box'>
                    <h3>35 дней</h3>
                    <p className='intro__box-date'>использования CRM</p>
                </div>
                </div>
                </div>
                
                    <button className='intro__button'>Получить консультацию</button>
                </div>                
                </div>                
            </div>
        </div>
    )
}
export default Main;