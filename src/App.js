import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component'
import { Switch , Route } from 'react-router-dom';

const HatsPage = ()=>{
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
  
}

class App extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path = '/hats' component  ={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
