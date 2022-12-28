import {ReactComponent as FooterLogo} from '../../pictures/icons/logo.svg';
import {ReactComponent as VkLogo} from '../../pictures/icons/social/vk.svg';
import {ReactComponent as DzenLogo} from '../../pictures/icons/social/dzen.svg';
import {ReactComponent as TGLogo} from '../../pictures/icons/social/tg.svg';

function Footer() {
    return (

        <footer>
            <div className="Container footer-container">
                <div className="footer__media flex justify-between">
                    <FooterLogo />
                    <div className="flex">
                        <a href="*" className="footer-media-social__item"><VkLogo /></a>
                        <a href="*" className="footer-media-social__item"><DzenLogo /></a>
                        <a href="*" className="footer-media-social__item"><TGLogo /></a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
