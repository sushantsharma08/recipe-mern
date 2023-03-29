import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="./">Home</Link>
        <Link to="./create-recipe">Create Recipe</Link>
        <Link to="./saved-recipes">Saved Recipes</Link>
        <Link to="./auth">Login</Link>
        {/* <Link to="./">Home</Link> */}
    </div>
  )
}

export default Navbar