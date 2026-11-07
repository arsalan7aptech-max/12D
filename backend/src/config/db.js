import mongoose from "mongoose";
import 'dotenv/config'

const database=()=>mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log('Database connected'))
.catch((e)=>console.log(`database did not connect error: ${e}`))

export default database