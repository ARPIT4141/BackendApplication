import express from "express";
import mongoose from "mongoose";
import router from './routes/user-routes.js'
import blogRouter from './routes/blog-routes.js';
import cors from "cors";
const app= express();y
app.use(cors());
app.use(express.json());
app.use("/api/user",router)
app.use("/api/blog", blogRouter);
mongoose.connect("mongodb+srv://admin:root@cluster0.zsatlob.mongodb.net/BlogApp?retryWrites=true&w=majority")
.then(()=>app.listen(5000))
.then(()=> console.log("connected"))
.catch((err) => console.log(err)); 

