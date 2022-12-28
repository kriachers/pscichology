import {ReactComponent as HeaderLogo} from '../../pictures/icons/logo.svg';
import {ReactComponent as MenuLogo} from '../../pictures/icons/menu.svg';
import { useState } from "react";

import {
    NavLink
} from 'react-router-dom';


function Header(props) {

    const [size, setSize] = useState(false);

    return (
        <div className="Container Container-bottom">

            <header className="header flex justify-between items-center">

                <HeaderLogo />
                <nav className={`header__nav flex ${size ? 'active' : ''}`}>
                    <ul className="header-nav__list flex ">
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/" onClick={() => setSize(false)} className="header-nav__link">Главная</NavLink></li>
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/category" onClick={() => setSize(false)} className="header-nav__link">Материалы</NavLink></li>
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/traffic" onClick={() => setSize(false)} className="header-nav__link">Тарифы</NavLink></li>
                    </ul>
                    <button className="header-nav__button">Личный кабинет</button>
                </nav>
                <MenuLogo onClick={() => setSize(!size)} className="header__burger cursor-pointer" />

            </header>
        </div>
    );
}

export default Header;
