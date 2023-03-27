import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
// import { UserModel } from "./models/Users";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sushantsharmadev:MERNpassword@recipes.nkwdj8p.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001,()=>{console.log('server is up');})