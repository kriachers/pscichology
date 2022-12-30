import PurpleButton from '../../commons/PurpleButton';
import {ReactComponent as MainIcon} from '../../pictures/icons/main.svg';

function Banner(props) {

    return (

        <div className="AppHeader flex justify-between items-center">
            <div>
                <h1 className="AppHeader__title mb-2.5">Вместе мы справимся!</h1>
                <p className="AppHeader__descr ">Найдите своего психолога онлайн</p>

                <PurpleButton class={'AppHeader__button'} title={'Найти психолога'} ></PurpleButton>

                <p className="AppHeader__small ">2770 руб. за 50 минут сессии</p>
            </div>
            <MainIcon />
        </div>

    )
}

export default Banner;