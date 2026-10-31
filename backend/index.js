import express from "express"

const app=express()

const port = 3000

app.get("/health",(req,res)=>{
res.status(200).json({msg:"Api working properly"})
})

app.listen(port,()=>{
console.log(`http://localhost:${port}`);
})
