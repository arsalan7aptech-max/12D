import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import api from "../../api/api"
import { Eye, EyeOff } from "lucide-react";


export default function Data() {
    const [users,setUsers]=useState([])
    const [registerFormData,setRegisterFormData]=useState({
        fullname:"",
        email:"",
        password:""
    })
    const [showPassword,setShowPassword]=useState(false)

    const changeshowPassword=()=>{
    showPassword?setShowPassword(false):setShowPassword(true)
    console.log(showPassword);
    
    }
    const handleRegisterChange=(e)=>{
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]:e.target.value
        })
    }
    const getData=async()=>{
        const res=await api.get("/user/get-user")
        setUsers(res.data.allUsers)
    }

    useEffect(()=>{
        getData()
    },[])


    function getconsole(){
        console.log(users);
        console.log(registerFormData);
        
    }
    
    const registerSubmit=(e)=>{
      e.preventDefault()
      const nameRegex=/^[A-Za-z]+(?: [A-Za-z]+)*$/
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{6,}$/
      if(registerFormData.fullname =="" || registerFormData.email =="" || registerFormData.password ==""){
        return toast.error("please fill all fields")
      }
      if(!nameRegex.test(registerFormData.fullname.trim())){
       return toast.error("name should only have alphabets")
      }
      api.post("/user/register",registerFormData)
      .then((res)=>{
        toast.success("register succesfullly",res)
        getData()
        setRegisterFormData({
        fullname:"",
        email:"",
        password:""
        })

      })
      .catch((error)=>toast.error(error))

      

      
      
    }
  return (
    <div className="container mx-auto max-w-4xl py-10 space-y-10 px-4">
        <button onClick={getconsole}>getconsole</button>
      {/* Auth Section: Login & Signup */}
      <div className="flex justify-center">
        <Tabs defaultValue="login" className="w-full max-w-md flex flex-col gap-2">
          <TabsList className="grid w-full grid-cols-2 h-10">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input id="login-email" type="email" placeholder="name@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input id="login-password" type="password" placeholder="••••••••" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup" className="w-full">
            <form onSubmit={registerSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>
                  Fill in your details below to get started.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" type="text" placeholder="John Doe" name="fullname" value={registerFormData.fullname} onChange={handleRegisterChange}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input id="signup-email" type="email" placeholder="name@example.com"  name="email" value={registerFormData.email} onChange={handleRegisterChange} />
                </div>
                <div className="space-y-2">
  <Label htmlFor="signup-password">Password</Label>
  <div className="relative">
    {showPassword?  <Input
      id="signup-password"
      type="text"
      placeholder="••••••••"
      name="text"
      value={registerFormData.password}
      onChange={handleRegisterChange}
      className="pr-10"
    />: <Input
      id="signup-password"
      type="password"
      placeholder="••••••••"
      name="password"
      value={registerFormData.password}
      onChange={handleRegisterChange}
      className="pr-10"
    /> }
   
    {showPassword? <EyeOff className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" onClick={changeshowPassword} />:<Eye className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" onClick={changeshowPassword} />}
   
  </div>
</div>
              </CardContent>
              <CardFooter>
                <button type="submit" className="w-full">Sign Up</button>
              </CardFooter>
            </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>

      {/* Data Table Section */}
      <Card>
        <CardHeader>
          <CardTitle>Registered Users</CardTitle>
          <CardDescription>A list of recent users and their current status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>password</TableHead>
                 
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.password}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}