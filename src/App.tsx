import React from 'react';
import {Generator} from "./Components/Generator/generator";
import './App.css';
import { Header } from './Components/Header/header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Generator/>
    </div>
  );
}

export default App;
