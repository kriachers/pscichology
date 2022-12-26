import './App.css';
import Header from './commons/Header/Header';
import Footer from './commons/Footer/Footer'

// PAGES
import HomePage from './pages/HomePage';
import TrafficPage from './pages/TrafficPage';
import CategoryPage from './pages/CategoryPage';
import SubCategory from './pages/SubCategory/SubCategory';
import Article from './pages/Article/Article';
import { useApplicationContext } from './ApplicationContext/ApplicationContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useContext } from 'react';

function App() {

  const [contextData, contextHandlers] = useApplicationContext();

  console.log('context in App', contextData.articles);
  return (
    <div>
      <Router>  
        <Header></Header>
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/category' element={< CategoryPage />}></Route>
          <Route exact path='/traffic' element={< TrafficPage />}></Route>
          <Route path='/:article' element={<SubCategory data={contextData.articles} />} />
          <Route path='/:article-page' element={<Article data={contextData.articles} />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
