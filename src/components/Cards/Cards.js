import React from 'react';
import big_ava from '../../images/big-ava.png';

const Cards = () => {
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
        </section>
    )
}

export default Cards
