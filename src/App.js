import React from 'react';
import './App.css';
import Arrow from'./images/arrow.svg'
import LeftArrow from './images/arrow-left.svg'

class App extends React.Component {
  render() {
  return (
    <body>
      <header>
        <div className="logo">SENTREM</div> 
        <div className="nav">
        <ul>
                <li><a href="#/">home</a></li>
                <li><a href="#/">shop</a></li>
                <li><a href="#/">contact</a></li>
        </ul>
        </div>
      </header>
      <div className="content">
        <img src={LeftArrow} className="arrow-2" alt="arrow-right"/>
        <img src={Arrow} className="arrow-1" alt="arrow-left"/>
      </div>
      <div className="shop">
        <div className="title">SHOP</div>
        <div className=""></div>
      </div>
    </body>
  );
  }
}

export default App;
