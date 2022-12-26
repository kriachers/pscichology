import React, { useState } from 'react';
import '../App.css';
import { Articles } from '../data/ARTICLES';
import { CategoryData } from '../data/CATEGORIES'
import SubCategory from './SubCategory/SubCategory'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { useApplicationContext, defaultAppState } from '../ApplicationContext/ApplicationContext';
import { useEffect } from 'react';


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
