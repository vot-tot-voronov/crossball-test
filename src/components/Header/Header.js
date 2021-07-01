import React, {useState} from 'react';
import small_ava from '../../images/small-ava.png';
import Burger from '../BurgerMenu/Burger';
const Header = () => {
    const [menuActive, setMenuActive] = useState(false)
    const menuItems = [
        {value: "Расписание"},
        {value: "Игровые отчёты"},
        {value: "Статистика"}
    ];
    return (
        <>
            <section className="header">
                <div className="header__container">
                    <div className="header__logo">
                        <div className="header__logo--logo-img"></div>
                        <div className="header__logo--logo-text"></div>
                    </div>
                    <div className="header__nav">
                        <nav>
                            <ul className="header__ul">
                                <li className="header__li"><a href="#/" className="header__li--btn">Расписание</a></li>
                                <li className="header__li"><a href="#/" className="header__li--btn">Игровые отчёты</a></li>
                                <li className="header__li"><a href="#/" className="header__li--btn">Статистика</a></li>
                                <li className="header__li header__li-arrow">
                                    <a href="#/" className="header__li--btn">Ещё</a>
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
                                <div className="header__user--img">
                                    <img src={small_ava} alt="User" />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="header__cart">
                        <button className="header__cart-logo">
                            <span className="header__cart-logo--counter">1</span>
                        </button>
                        <nav className="header__nav-burger" onClick={() => setMenuActive(!menuActive)}>
                            <div className={menuActive ? "header__burger-btn active" : "header__burger-btn"}>
                                <span></span>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <Burger active={menuActive} setActive={setMenuActive} items={menuItems}/>
        </>
    )
}

export default Header
