import React from 'react';
import { createContext } from 'react';
import { appData } from '../data/DATA.js';

export const defaultAppState = [{
    articles: appData.articlesList
}, {
    setArticles: () => void 0,
}];

export const ApplicationContext = React.createContext(defaultAppState);


export const ApplicationProvider = ({ children }) => {

    const [articles, setArticles] = React.useState(() => {
        return appData.articlesList;
    });

    return (
        <ApplicationContext.Provider value={[{ articles }, { setArticles }]}>
            {children}
        </ApplicationContext.Provider >
    );
}

export const useApplicationContext = () => React.useContext(ApplicationContext);