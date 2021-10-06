import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props{
  style?: {};
  className?: string;
  shape?: string;
}

function Box ({style, className = '', shape = '', ...rest}: Props){
  const shapeCls = shape && `box__${shape}`;
  return (
    <div
      className={`box ${className} ${shapeCls}`.trim()} 
      style={{border: '3px solid tomato', ...style}}
      {...rest}
    >
      Box
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Box className='box__green' style={{border: '3px dashed black'}}/>
      <Box/>
      <Box/>
    </div>
  );
}

export default App;
