import React,{useEffect,useState}from 'react';

import './App.css';
import Recipe from './recipe';


const App = () =>{

  const APP_ID ="418721ce";
  const APP_KEY ="1732b93e9f3d03102e681acfd5a391b0";

  const [recipes,setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() =>{
    getRecipe();
  },[query]);

  const getRecipe = async () =>{

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipe(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
   console.log(search);

  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
   
    setSearch("");
  }



  return(

    <div className ="App">
      <form  onSubmit = {getSearch} className="search-form">
        <input type="text" className="search-bar" value = {search} onChange = {updateSearch}/>
        <button className="search-button" type ="submit" >Search</button>
      </form>
      <div className="recipies">
      {recipes.map(recipe => (
        <Recipe 
          key = {recipe.recipe.label}
          title={recipe.recipe.label} 
          calories = {recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}/>
      ))}
  </div>
    </div>

  );


};

export default App;
