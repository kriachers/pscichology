import React from 'react';
import { CategoryData } from '../data/CATEGORIES'

import {
    Link
} from 'react-router-dom';
import { useApplicationContext, defaultAppState } from '../ApplicationContext/ApplicationContext';

function CategoryPage() {

    const [, contextHandlers] = useApplicationContext();

    return (

        <div className="Container">
            <p className="mb-10 text-bold">Категории</p>

            <div className="Category__tile flex flex-wrap">
                {CategoryData.map((item) => {
                    return (
                        <Link to="/article" >
                            <div className="Category-tile__item" onClick={() => {
                                const filtered = defaultAppState[0].articles.filter(article => article.category === item.category);
                                contextHandlers.setArticles(filtered);
                            }} >
                                <p className="text-default">{item.category}</p>
                                <img className="Category-tile-item__img" src={item.icon} alt="" />
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    );
}

export default CategoryPage;
