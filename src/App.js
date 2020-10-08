import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Quitz from './component/Quitz';

function App() {
  return (
    <div className="App">
      <Header projectname="TekBitS Quitz"></Header>
      <Quitz></Quitz>
      <Footer></Footer>
    </div>
  );
}

export default App;