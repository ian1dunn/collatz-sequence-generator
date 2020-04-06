import React from 'react';
import './App.css';

import CollatzSequence from './components/CollatzSequence';

function App() {
  return (
    <div className="App">
      <h1>Collatz Sequence Generator</h1>
      <CollatzSequence />
    </div>
  );
}

export default App;
