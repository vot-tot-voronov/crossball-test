import React from 'react'

const Burger = ({active, setActive, items}) => {
    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="menu__blur"></div>
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <ul>
                    {items.map((item, index)=> 
                        <li key={index} className="menu__list">
                            <a className="menu__list--link" href="#/">{item.value}</a>
                        </li>    
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Burger
