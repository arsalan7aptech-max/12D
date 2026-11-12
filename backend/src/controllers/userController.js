import Users from '../models/userModel.js'

const login = (req,res)=>{
    return res.status(200).json({msg:"login working properly"})
}

const register = async (req,res)=>{

try{
   const {fullname,email,password}= req.body
   if(!fullname || !email || !password){
    return res.status(404).json({error:"Please fill all fields"})
   }
   const oldUser=await Users.find({email})
   if(oldUser){
    return res.status(400).json({error:"user already exists"})
   }
   
    const addUser= await Users.create({fullname,email,password})

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
     
    return res.status(200).json(allUsers)
  } 
  
  catch (e) {
    return res.status(500).json({ error: e.message })
  }
}

export {login,register,getUsers}