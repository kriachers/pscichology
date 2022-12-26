import '../../App.css';
import { Articles } from '../../data/ARTICLES';
import { useLocation } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import { useApplicationContext, defaultAppState } from '../../ApplicationContext/ApplicationContext';
import { useEffect } from 'react';



function SubCategory({ data }) {

    const [, contextHandlers] = useApplicationContext();

    return (
        <div className='Container Container-bottom'>

            <div className="SubCategory__nav">
                <p className="Subcategory-nav__main Subcategory-nav__item">Категории</p>
                <p className="Subcategory-nav__category-name Subcategory-nav__item">{data[0].category}</p>
            </div>

            <>
                {data.map((e) => {
                    return (
                        <Link to="/article-page" >
                            <div className="SubCategory__item" onClick={() => {
                                const filteredArticle = defaultAppState[0].articles.filter(article => article.title === e.title);
                                contextHandlers.setArticles(filteredArticle);
                            }}>
                                <img src={e.picture} alt="icon" className="SubCategory__icon" />
                                <p className="SubCategory__title text-bold">{e.title}</p>
                                <p className="SubCategory__brief-content text-normal">{e.content.slice(0, 200)}</p>
                            </div>
                        </Link>
                    )
                })}
            </>
        </div>
    )
}

export default SubCategory;