import Users from '../models/userModel.js'
import bcrypt from "bcrypt"

const login = async (req,res)=>{
  try {
    const {email,password}=req.body
    if(!email || !password){
       return res.status(404).json({error:"Please fill all fields"})
    }
const checkUser=await Users.findOne({email})
if(checkUser){
  const checkpass=await bcrypt.compare(password,checkUser.password)
  if(checkpass){
    return res.status(200).json({msg:"Login Successfully",checkpass,checkUser})
  }else{
    return res.status(400).json({msg:"Email or password incorrect"})
  }
}else{
  return res.status(400).json({msg:"Email or password incorrect"})
}
  } catch (error) {
    return res.status(500).json({error:e})
  }
}

const register = async (req,res)=>{

try{
   const {fullname,email,password}= req.body
   if(!fullname || !email || !password){
    return res.status(404).json({error:"Please fill all fields"})
   }
   const oldUser=await Users.findOne({email})
   if(oldUser){
    return res.status(400).json({error:"user already exists",oldUser})
   }
   const hashpassword=await bcrypt.hash(password,10)
    const addUser= await Users.create({fullname,email,password:hashpassword})

    if(addUser){
    return res.status(201).json({msg:"User created successfully",addUser})
    }

    else{
        return res.status(400).json({error:"something went wrong"})
    }
}

catch(e){
return res.status(500).json({error:e})
}
    
}

const getUsers = async (req,res)=>{
try {
    const allUsers = await Users.find({})
     
    return res.status(200).json({allUsers})
  } 
  
  catch (e) {
    return res.status(500).json({ error: e.message })
  }
}

export {login,register,getUsers}