
import { useState } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

import App from '../../App';
import TrafficPage from "../../pages/TrafficPage";
import CategoryPage from "../../pages/CategoryPage";


function Header(props) {

    const [size, setSize] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleCloseMenu = () => {
        setSize(false);
        console.log('closed!')
    };

    return (

        <div className="Container Container-bottom">

            <header className="header flex justify-between items-center">

                <img src="./logo.svg" alt="" className="header__logo" />
                <nav className={`header__nav flex ${size ? 'active' : ''}`}>
                    <ul className="header-nav__list flex ">
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/" onClick={() => setSize(false)} className="header-nav__link">Главная</NavLink></li>
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/category" onClick={() => setSize(false)} className="header-nav__link">Материалы</NavLink></li>
                        <li className="header-nav__item"><NavLink activeClassName='active' to="/traffic" onClick={() => setSize(false)} className="header-nav__link">Тарифы</NavLink></li>
                    </ul>
                    <button className="header-nav__button">Личный кабинет</button>
                </nav>
                <img onClick={() => setSize(!size)} className="header__burger cursor-pointer" src="./header/menu.svg" alt="" />

            </header>
        </div>
    );
}

export default Header;
