import express from "express";
import path from "path";
import { ENV } from "../env.js";

const app = express();

const __dirname = path.resolve();



app.get("/health",(req,res)=>{
    res.status(200).send("Server is up and running");
});
app.get("/books",(req,res)=>{
    res.status(200).send("This is the book endpoint");
});


// Make our app ready for development
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    });
}
const PORT = process.env.PORT || 3000;
app.listen(ENV.PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})