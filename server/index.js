import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
// import { UserModel } from "./models/Users";
import {UserRouter} from './src/routes/users.js'
import {recipesRouter} from './src/routes/recipes.js'
import * as dotenv from "dotenv";


const app = express();
dotenv.config({path:"./config.env"});

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use("/auth",UserRouter)
app.use("/recipes",recipesRouter)
const port = process.env.PORT

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@recipe.6i7hjnb.mongodb.net/recipe?retryWrites=true&w=majority`)

app.listen(port,()=>{console.log("Server up!!!");})