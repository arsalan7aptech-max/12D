import React from 'react'
import Home from "./pages/Home"
import { TooltipProvider } from "@/components/ui/tooltip"
import Dashboard from './pages/dashboard/dashboard'
import { Routes, Route } from "react-router";
import DashboardLayout from './layout/DashboardLayout';
import Counter from './pages/dashboard/Counter';
import Signup from './pages/Signup';
const App = () => {
  return (
    <>
    <TooltipProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>

        <Route path='/Dashboard' element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='counter' element={<Counter/>}/>
        </Route>
      </Routes>
    {/* <Home/> */}
    {/* <Dashboard /> */}
    </TooltipProvider>
    </>
    
  )
}

export default App
