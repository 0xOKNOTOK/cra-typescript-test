import React from 'react';
import './App.css';
import { TextBox } from './components/TextBox';

const App: React.FC = () => {
  return <div>Yo
    <TextBox text='hello' person={{firstName: '', lastName: ''}}/>
  </div>
}

export default App;
