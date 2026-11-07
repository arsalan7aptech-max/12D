import Users from '../models/userModel.js'

const login = (req,res)=>{
    return res.status(200).json({msg:"login working properly"})
}
const register = async (req,res)=>{
    try{
    const {fullname,email,password}=req.body
    const addUser=await Users.create({fullname,email,password})
    if(addUser){
return res.status(201).json({msg:"register working properly",addUser})
    }else{
        return res.status(400).json({error:"something went wrong"})
    }
}catch(e){
return res.status(500).json({error:e})
}
    
}


export {login,register}