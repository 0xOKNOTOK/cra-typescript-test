import React from 'react';
import './App.css';
import { ArticleInfo } from './components/ArticleInfo';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Article } from './components/Article';



const App: React.FC = () => {
  return (
  <Wrapper classDefinition="container">
    <Header title={'Using typescript with React!'} username={'User'}/>
    <ArticleInfo author="rossgr" id={22} staff={true} />
    <Article title={"TailwindCSS + React.js"} description={"How to use Tailwind in React, the complete tutorial! Learn more here..."} author="David McOwski"/>
  </Wrapper>)
}

export default App;
