import React,{useState,useEffect}from 'react'
import axios from "axios"
import { useGetUserId } from '../hooks/useGetUserId';

const Home = () => {
  const [recipes, setrecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([])
  const userId =useGetUserId();

  useEffect(() => {
    const fetchRecipe = async()=>{
      try {
      const response =  await axios.get("https://recipe-mern-nine.vercel.app/recipes");
      setrecipes(response.data);
      console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    const fetchSavedRecipe = async()=>{
      try {
      const response =  await axios.get(`https://recipe-mern-nine.vercel.app/recipes/savedRecipes/ids/${userId}`);
      console.log(response.data);
      // setSavedRecipes(response.data);
      console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipe();
    fetchSavedRecipe()
  },[])
  const saveRecipe = async (recipeId)=>{
    try{
    const response =  await axios.put("https://recipe-mern-nine.vercel.app/recipes",{recipeId,userId});
    console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe)=>
          <li key={recipe._id}> 
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={()=>{saveRecipe(recipe._id)}}>Save</button>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (in miniutes)</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home