
import { useState } from "react";
function Header(props) {


    const [size, setSize] = useState(false);


    return (
        <header className="header flex justify-between items-center">
            <img src="./logo.svg" alt="" className="header__logo" />
            <nav className={`header__nav flex ${size ? 'active' : ''}`}>
                <ul className="header-nav__list flex ">
                    <li className="header-nav__item"><a href="" className="header-nav__link">О нас</a></li>
                    <li className="header-nav__item"><a href="" className="header-nav__link">Тарифы</a></li>
                    <li className="header-nav__item"><a href="" className="header-nav__link">Психологам</a></li>
                    <li className="header-nav__item"><a href="" className="header-nav__link">Материалы</a></li>
                </ul>
                <button className="header-nav__button">Личный кабинет</button>
            </nav>
            <img onClick={() => setSize(!size)} className="header__burger cursor-pointer" src="./header/menu.svg" alt="" />

        </header>
    );
}

export default Header;
