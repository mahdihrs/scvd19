import React from 'react';
import './App.css';

import AllCountries from './components/AllCountries';
import IndoCurrentInfo from './components/IndoCurrentInfo';

function App() {
  return (
    <div className="App">
      <IndoCurrentInfo />
      <AllCountries />
    </div>
  );
}

export default App;
