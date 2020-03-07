import React from 'react';
import './App.css';
import Image from './components/Image';
import Form from './components/Form';

import logo from './petr.png';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='parent'>
          <div className='leftBlock'>
            <Form />
          </div>
          <div className='rightBlock'>
            <Image img={logo} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
