import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

const UserData = () => {
    const [products,setProducts]=useState([])
   const getuser= async ()=>{
//     fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));
const res=await axios.get("http://localhost:3000/user/get-user")
setProducts(res.data.allUsers)
    }
    useEffect(()=>{
        getuser()
    },[])

    function getconsole(){
        console.log(products);
        
    }
  return (
    <>
    <button onClick={getconsole}>get</button>
    {products.map((item)=>(
        <h1>{item.email}</h1>
    ))}
    </>
  )
}

export default UserData