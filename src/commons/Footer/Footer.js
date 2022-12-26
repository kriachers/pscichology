

import { useState } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


function Footer() {
    return (

        <footer>
            <div className="Container footer-container">
                <div className="footer__media flex justify-between">
                    <img src="./logo.svg" alt="" className="footer-media__logo" />
                    <div className="flex">
                        <a href="" className="footer-media-social__item"><img src="./icons/social/vk.svg" alt="" /></a>
                        <a href="" className="footer-media-social__item"><img src="./icons/social/dzen.svg" alt="" /></a>
                        <a href="" className="footer-media-social__item"><img src="./icons/social/tg.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
