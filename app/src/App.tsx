import React from 'react';
import './App.css';
import { ArticleInfo } from './components/ArticleInfo';
import { Header } from './components/Header';



const App: React.FC = () => {
  return <div>
    <Header title={'Using typescript with React!'} username={'User'}/>
    <ArticleInfo author="rossgr" id={22} staff={true} />
  </div>
}

export default App;
