import React from 'react';
import logo_big from '../../images/Logo_big.png';
import logoText_big from '../../images/CROSSBaLL_big.png';
import short_arrow from '../../images/short-arrow.png';
const Header = () => {
    return (
        <section className="header">
            <div className="header__container">
                <div className="header__logo">
                    <div className="header__logo--logo-img">
                        <img src={logo_big} alt="Logo" />
                    </div>
                    <div className="header__logo--logo-text">
                        <img src={logoText_big} alt="Crossball" />
                    </div>
                </div>
                <div className="header__nav">
                    <nav>
                        <ul className="header__ul">
                            <li className="header__li"><button className="header__li--btn">Расписание</button></li>
                            <li className="header__li"><button className="header__li--btn">Игровые отчёты</button></li>
                            <li className="header__li"><button className="header__li--btn">Статистика</button></li>
                            <li className="header__li header__li-arrow">
                                <button className="header__li--btn">Ещё</button>
                                <button className="header__li-arrow--img"></button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__ball">
                    <div className="header__ball--img"></div>
                    <button className="header__ball--arrow"></button>
                </div>
                <div className="header__user">
                    <button className="header__user--btn">
                        <div className="header__user--circle">
                            <div className="header__user--img"></div>
                        </div>
                    </button>
                </div>
                <div className="header__cart">
                    <button className="header__cart-logo">
                        <span className="header__cart-logo--counter">1</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Header
