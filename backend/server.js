import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./routes/transaction.js"

//ling .env file to server.js
import dotenv from 'dotenv'    
dotenv.config();


//create an express app 
const app = express();

//extracting port number from the env file
const port = process.env.PORT;

//middlewares
app.use(express.json())
app.use(cors())


// connect to DB
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    app.listen(port, ()=>{
        console.log(`Connected to DB and listening on ${port}`);
    });
 })
 .catch((error)=>{ 
    console.log(error);
 })
  

//routes
app.use('/api/node/', router);


