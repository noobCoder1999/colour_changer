import React,{useEffect,useState}from 'react';

import './App.css';


const App = () =>{

  const APP_ID ="418721ce";
  const APP_KEY ="1732b93e9f3d03102e681acfd5a391b0";

  useEffect(() =>{
    getRecipe();
  },[]);

  const getRecipe = async () =>{

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  }



  return(

    <div className ="App">
      <form action="" className="search-form">
        <input type="text" className="search-bar"/>
        <button className="search-button" type ="submit">Search</button>
      </form>

    </div>

  );


};

export default App;
