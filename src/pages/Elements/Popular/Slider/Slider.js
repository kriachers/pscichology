
import { appData } from '../../../../data/DATA'

import { useState } from "react";

import {
    Link
} from 'react-router-dom';
import { useApplicationContext, defaultAppState } from '../../../../ApplicationContext/ApplicationContext';


function Slider() {

    const [, contextHandlers] = useApplicationContext();

    let sliderData = appData;

    const num = 1;

    const [slides, setSlides] = useState(0);

    let SliderArr = [sliderData.articlesList[slides]]

    const [isAnimated, setAnimated] = useState('');

    function turnActionLeft() {
        if (slides <= 0) {
            setSlides(sliderData.articlesList.length - 1)

        } else {
            setSlides(slides - 1)

        }
        setAnimated('appearance')
    }

    function turnLeft() {
        setAnimated('disappearance')
        setTimeout(turnActionLeft, 500);
    }

    function turnActionRight() {
        if (slides >= (sliderData.articlesList.length - num)) {
            setSlides(0)
        } else {
            setSlides(slides + 1)
        }
        setAnimated('appearance')
    }

    function turnRight() {
        setAnimated('disappearance')
        setTimeout(turnActionRight, 500);
    }


    return (
        <div className="Slider flex">
            <div className='Slider-arrow__wrapper'>
                <svg onClick={() => turnLeft()} className="Slider__arrow cursor-pointer" width="60" height="60" viewBox="0 0 60 60" >
                    <g>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.3038 4.65777C41.0247 5.89286 41.2721 7.39621 40.6738 8.69515C38.1571 14.1592 28.1112 21.4669 22.4935 30.8466C22.2953 31.1775 22.315 31.5962 22.5377 31.9111C29.0345 41.0981 36.2363 45.5016 38.8832 50.8098C39.6168 52.2811 39.4468 54.0577 38.5591 55.4414C30.8988 67.3831 15.1014 43.9865 8.51849 33.0079C7.89497 31.968 7.91142 30.654 8.56135 29.6305C24.3585 4.75174 35.0315 -4.37505 40.3038 4.65777Z" />
                    </g>
                </svg>
            </div>

            <div className="Slider__list flex">
                {SliderArr.map((item) => {
                    return (
                        <Link to="/article-page" >
                            <div className='Slider__item' onClick={() => {
                                const filteredArticle = defaultAppState[0].articles.filter(article => article.title === item.title);
                                contextHandlers.setArticles(filteredArticle);
                            }}>
                                <div className={`Slider__inner ${isAnimated}`}>
                                    <p className='Slider__title'>{item.title}</p>
                                    <img src={item.picture ? ` ${item.picture}` : `./articles/noimg.jpg`} alt="" className="Slider__img" />
                                </div>
                            </div>
                        </Link>
                    )

                })}
            </div>
            <div className='Slider-arrow__wrapper'>
                <svg onClick={() => turnRight()} className="Slider__arrow cursor-pointer" width="60" height="60" viewBox="0 0 60 60" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6962 55.3422C18.9753 54.1071 18.7279 52.6038 19.3262 51.3049C21.8429 45.8408 31.8888 38.5331 37.5065 29.1534C37.7047 28.8225 37.685 28.4038 37.4623 28.0889C30.9655 18.9019 23.7637 14.4984 21.1168 9.19016C20.3832 7.71892 20.5532 5.94233 21.4409 4.55856C29.1012 -7.38314 44.8986 16.0135 51.4815 26.9921C52.105 28.032 52.0886 29.346 51.4387 30.3695C35.6415 55.2483 24.9685 64.375 19.6962 55.3422Z" />
                </svg>
            </div>

        </div>

    )

}

export default Slider;

