import React, {useState} from 'react';
import big_ava from '../../images/big-ava.png';

const Cards = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <section className="cards">
            <div className="cards__user">
                <div className="cards__bio">
                    <div className="cards__img">
                        <img className="cards__img--circle" src={big_ava} alt="Ava" />
                        <svg width="80px" height="80px" viewBox="0 0 82 82">
                            <defs>
                                <circle id="circle" cx="41" cy="41" r="40" strokeWidth="2" fill="transparent" />
                            </defs>
                            <use xlinkHref="#circle" stroke="#C4C4C4" />
                            <use xlinkHref="#circle" stroke="#FF795B" strokeDasharray="150px, 38px"/>
                        </svg>
                    </div>
                    <div className="cards__data">
                        <div className="cards__data--box">
                            <p className="cards__data--text">89.40</p>
                            <span className="cards__data--counter">999</span>
                        </div>
                        <p className="cards__data--name">Елишакашвили Михо</p>
                    </div>
                </div>
                <div className="cards__edit">
                    <button className="cards__edit--btn">Редактировать</button>
                </div>
            </div>
            <div className="cards__statistics">
                <div className="cards__lightnings">
                    <div className="cards__lightnings-line cards__lightnings-line--first">
                        <button className="cards__lightning">
                            <span className="cards__lightning--number">5</span>
                        </button>
                        <button className="cards__lightning">
                            <span className="cards__lightning--number">5</span>
                        </button>
                        <button className="cards__lightning cards__lightning--margin">
                            <span className="cards__lightning--number">99</span>
                        </button>
                        <div className="cards__lightning cards__lightning--bgcolor"></div>
                        <div className="cards__lightning cards__lightning--bgcolor"></div>
                    </div>
                    <div className="cards__lightnings-line cards__lightnings-line--second">
                        <div className="cards__lightning cards__lightning--bottom"></div>
                        <div className="cards__lightning cards__lightning--bottom"></div>
                        <div className="cards__lightning cards__lightning--bottom"></div>
                        <div className="cards__lightning cards__lightning--bottom"></div>
                        <div className="cards__lightning cards__lightning--bottom"></div>
                    </div>
                </div>
                <div className="cards__box-statistics">
                    <div className="cards__toggle">
                        <button onClick={() => setToggle((toggle) => !toggle)} className={toggle ? "cards__button cards__button--active" : "cards__button"}>Все сезоны</button>
                        <button onClick={() => setToggle((toggle) => !toggle)} className={toggle ? "cards__button" : "cards__button cards__button--active"}>Сезон 2020/21</button>
                    </div>
                    <div className="cards__games">
                        <div className="cards__game">
                            <p className="cards__game--title">Игры</p>
                            <p className="cards__game--number">36</p>
                        </div>
                        <div className="cards__game">
                            <p className="cards__game--title">Гол</p>
                            <p className="cards__game--number">67</p>
                        </div>
                        <div className="cards__game">
                            <p className="cards__game--title">Пас</p>
                            <p className="cards__game--number">136</p>
                        </div>
                        <div className="cards__game">
                            <p className="cards__game--title">Гол + пас</p>
                            <p className="cards__game--number">203</p>
                        </div>
                    </div>
                </div>
                <div className="cards__share-box">
                    <div className="cards__share">
                        <p className="cards__share--title">Поделиться</p>
                        <div className="cards__buttons">
                            <button className="cards__share-btn cards__share-btn--facebook"></button>
                            <button className="cards__share-btn cards__share-btn--vk"></button>
                            <button className="cards__share-btn cards__share-btn--attach"></button>
                            <div className="cards__cross cards__cross--alone cards__cross--big"></div>
                        </div>
                        
                        
                    </div>
                    <div className="cards__crosses">
                        <div className="cards__cross"></div>
                        <div className="cards__cross cards__cross--middle"></div>
                        <div className="cards__cross cards__cross--big"></div>
                    </div>
                    <div className="cards__crosses">
                        <div className="cards__cross cards__cross--small"></div>
                        <div className="cards__cross cards__cross--middle"></div>
                        <div className="cards__cross cards__cross--big"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards
