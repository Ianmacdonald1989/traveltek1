import './App.css';
import MainContainer from './containers/MainContainer';
import React from 'react';

function App() {
  return (
    <>
      <div id="background-wrap">
      <div class="x1">
          <div class="cloud"></div>
      </div>
  
      <div class="x2">
          <div class="cloud"></div>
      </div>
  
      <div class="x3">
          <div class="cloud"></div>
      </div>
  
      <div class="x4">
          <div class="cloud"></div>
      </div>
  
      <div class="x5">
          <div class="cloud"></div>
      </div>
  </div>
    <MainContainer/>
    </>
  );
}

export default App;
