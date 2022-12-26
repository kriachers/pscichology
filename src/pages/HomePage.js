import '../App.css';

import Header from '../commons/Header/Header';
import Banner from '../mainpage/Banner/Banner';
import Benefits from '../mainpage/Benefits/Benefits'
import Workers from '../mainpage/Workers/Workers'
import Steps from '../mainpage/Steps/Steps';
import Questions from '../mainpage/Questions/Questions';
import Together from '../mainpage/Together/Together'

function HomePage() {
    return (

        <div>

            <div className="Container Container-bottom blue-bg">
                <Banner></Banner>
            </div>

            <div className="Container Container-bottom">
                <Benefits></Benefits>
            </div>

            <Together></Together>

            <div className="Container Container-bottom">
                <Workers></Workers>
            </div>

            <div className="Conatiner-blue ">
                <Steps></Steps>
            </div>

            <div className="Container">
                <Questions></Questions>
            </div>

        </div>
    );
}

export default HomePage;