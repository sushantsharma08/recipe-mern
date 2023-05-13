import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import SavedRecipe from './pages/SavedRecipe'
import CreateRecipe from './pages/CreateRecipe'
import Authentication from './pages/Authentication'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/saved-recipes' element={<SavedRecipe />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
