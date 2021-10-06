import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const el = React.createElement('div', {style:{color: 'red'}}, 'Element: div')
  const el1 = React.createElement('p', {id: 2,}, 'Element: p')
  return (
    <div className="App">
      <h1>Hello</h1>
      {el}
      {el1}
    </div>
  );
}

export default App;
