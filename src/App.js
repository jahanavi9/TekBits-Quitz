import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Quitz from './component/Quitz';

function App() {
  return (

    <div className="ux">
     <div className="App"> 
      <Header projectname="React Quitz"></Header>
      <Quitz></Quitz>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;