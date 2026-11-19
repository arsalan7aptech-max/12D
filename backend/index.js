import express from "express"
import userRoutes from "./src/routes/userRoutes.js"
import database from "./src/config/db.js"
import 'dotenv/config'
import cors from "cors"
const app=express()

const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/user',userRoutes)


app.get("/health",(req,res)=>{
res.status(200).json({msg:"Api working properly"})
})


database()
app.listen(port,()=>{
console.log(`http://localhost:${port}`);
})
