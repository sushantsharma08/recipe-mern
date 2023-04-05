import React,{useState,useEffect}from 'react'
import axios from "axios"
import { useGetUserId } from '../hooks/useGetUserId';

const SavedRecipe = () => {
  const [SavedRecipes, setSavedRecipes] = useState([]);
  const userId =useGetUserId();

  useEffect(() => {
    const fetchSavedRecipe = async()=>{
      try {
      const response =  await axios.get(`https://recipe-mern-nine.vercel.app/recipes/savedRecipes/${userId}`);
      setSavedRecipes(response.data.savedRecipes);
      console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSavedRecipe()
  },[])
  
  return (
    <div>
      <h1>Saved Recipes</h1>
      <ul>
        {SavedRecipes.map((recipe)=>
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
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

export default SavedRecipe












 