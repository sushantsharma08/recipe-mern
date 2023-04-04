import React,{useState} from 'react'
import axios from "axios";
import { useGetUserId } from '../hooks/useGetUserId';
import {useNavigate} from "react-router-dom"


const CreateRecipe = () => {

  const userID = useGetUserId();

  const [recipe, setrecipe] = useState({
    name:"",
    ingredients:[],
    instructions:"",
    imageUrl:"",
    cookingTime:0,
    userOwner:userID
  });
  const navigate =  useNavigate();


  const handleChange = (event)=>{
    const {name,value}= event.target;
    setrecipe({...recipe,[name]:value});
  }

  const handleIngredientChange = (event,index)=>{
    const {value}= event.target;
    const ingredients=recipe.ingredients;
    ingredients[index]=value;
    setrecipe({...recipe,ingredients});
  }

  const addIngredient = ()=>{
    setrecipe({
      ...recipe,ingredients:[...recipe.ingredients,""]
    })
  }

  const onSubmit= async (event)=>{
    event.preventDefault();
    try {
      await axios.post("https://recipe-mern-nine.vercel.app/recipes",recipe);
      navigate("/");
      alert("recipe saved")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='create-recipe'>
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name="name" onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange}></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient,index)=>
          (<input 
            type='text' 
            key={index} 
            name="ingredients" 
            value={ingredient} 
            onChange={(event)=>handleIngredientChange(event,index)}
            />)
        )}
        <button type="button" onClick={addIngredient}>Add Ingredient</button>

        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" onChange={handleChange} cols="30" rows="10"></textarea>
        <label htmlFor="imageUrl">ImageUrl</label>
        <input type="text" id='imageUrl' name="imageUrl" onChange={handleChange} />
        <label htmlFor="cookingTime"> Cooking Time (minutes)</label>
        <input type="number" id='cookingTime' name="cookingTime" onChange={handleChange} />

        <button type="submit">Submit Recipe</button>
      </form>
      
    </div>
    
  )
}

export default CreateRecipe