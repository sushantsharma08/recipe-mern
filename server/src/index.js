import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
// import { UserModel } from "./models/Users";
import {UserRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",UserRouter)

mongoose.connect("mongodb+srv://sushantsharmadev:Qwerty123@recipe.6i7hjnb.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3001,()=>{console.log('server is up');})