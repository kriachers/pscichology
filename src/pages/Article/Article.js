

import Popular from '../Elements/Popular/Popular'


function Article({ data }) {

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

                    {
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
