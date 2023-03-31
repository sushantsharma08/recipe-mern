import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
// import { UserModel } from "./models/Users";
import {UserRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
  })
app.use("/auth",UserRouter)
app.use("/recipes",recipesRouter)

mongoose.connect("mongodb+srv://sushantsharmadev:Qwerty123@recipe.6i7hjnb.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3001,()=>{console.log('server is up');})