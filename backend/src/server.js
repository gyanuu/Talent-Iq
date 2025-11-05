import express from "express";
import { ENV } from "../env.js";

const app = express();

console.log(ENV.DB_URL);
console.log(ENV.PORT);

app.get("/",(req,res)=>{
    res.status(200).send("Server is up and running123");
})
const PORT = process.env.PORT || 3000;
app.listen(ENV.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})