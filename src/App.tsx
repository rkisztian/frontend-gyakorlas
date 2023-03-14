import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Fooldal from './Pages/fooldal';
import Kapcsolat from './Pages/kapcsolat';
import Bemutatkozas from './Pages/bemutatkozas';

class App extends Component<{}>{
  
  render(){

    return <div>
      <Routes>
        <Route path='/' element={<Fooldal></Fooldal>} />
        <Route path='/bemutatkozas' element={<Bemutatkozas></Bemutatkozas>} />
        <Route path='/kapcsolat' element={<Kapcsolat></Kapcsolat>} /> 
      </Routes>
    </div>
  }


}

export default App;
