import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import City from "./component/city-component/city.component";
import HomePage from "./pages/home-page-component/home-page.component"
import cityFood from "./component/City-food/city-food.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>WELCOME TO FOOD DISCOVERY</h1>
      </header>
      <Route exact path="/" component={City}/>
      <Route exact path="/:id" component={cityFood}/>
    </div>
  );
}

export default App;
