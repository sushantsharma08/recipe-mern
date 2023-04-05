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
      setSavedRecipes(response.data.savedRecipes);
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
    setSavedRecipes(response.data.savedRecipes)
    console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const isRecipeSaved=(id)=>savedRecipes.includes(id)
  
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe)=>
          <li key={recipe._id}> 
          {savedRecipes.includes(recipe._id)&&<h1>Already saved!</h1>}
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={()=>{saveRecipe(recipe._id)}} disabled={isRecipeSaved(recipe._id)}>{isRecipeSaved(recipe._id)?"Saved":"Save"}</button>
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