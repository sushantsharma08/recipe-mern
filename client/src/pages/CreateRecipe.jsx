import React,{useState} from 'react'

const CreateRecipe = () => {
  const [recipe, setrecipe] = useState({
    name:"",
    ingredients:[],
    instructions:"",
    imageUrl:"",
    cookingTime:0,
    userOwner:0,
  });

  const handleChange = (event)=>{
    const {name,value}= event.target;
    setrecipe({...recipe,[name]:value});
    console.log(recipe);
  }

  const addIngredient = ()=>{
    setrecipe({
      ...recipe,ingredients:[...recipe.ingredients,""]
    })
  }
  return (
    <div className='create-recipe'>
      <h2>Create Recipe</h2>
      <form >
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name="name" onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange}></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        <button onClick={addIngredient}>Add Ingredient</button>

        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" onChange={handleChange} cols="30" rows="10"></textarea>
        <label htmlFor="imageUrl">ImageUrl</label>
        <input type="text" id='imageUrl' name="imageUrl" onChange={handleChange} />
        <label htmlFor="cookingTime"> Cooking Time (minutes)</label>
        <input type="number" id='cookingTime' name="cookingTime" onChange={handleChange} />

      </form>
      
    </div>
    
  )
}

export default CreateRecipe