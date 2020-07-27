import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>{

  const APP_ID ="5c60cadf";
  const APP_KEY ="5752fb69889751438ed0cce0aa1a445f";

  const example_req = "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";


  return(

    <div className ="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type ="submit">search</button>
      </form>

    </div>

  );


};

export default App;
