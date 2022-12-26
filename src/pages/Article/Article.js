
import { appData } from '../../data/DATA'

import { useState } from "react";

import Slider from "../Elements/Popular/Slider/Slider"
import Popular from '../Elements/Popular/Popular'


function Article({ data }) {

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

        <div>

            <div className="Container">

                <div className="SubCategory__nav">
                    <p className="Subcategory-nav__main Subcategory-nav__item">Категории</p>
                    <p className="Subcategory-nav__category-name Subcategory-nav__item">{data[0].category}</p>
                    <p className="Subcategory-nav__article-name Subcategory-nav__item">{data[0].title}</p>
                </div>
                <div className="Container">
                    <h2 className="Article__title">{data[0].title}</h2>
                    <p className="Article__descr text-default">{data[0].content}</p>

                    { //Check if there are a picture 
                        (data[0].picture)
                            ? <img className="Article__img" src={`${data[0].picture}`} alt="" />
                            : <div></div>
                    }
                </div>

            </div >
            <Popular></Popular>
        </div>

    );
}

export default Article;
