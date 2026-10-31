import React from 'react'
import { NewCards } from '../components/NewCards'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <NewCards/>
    <Link to={"/dashboard"}>
    <Button>dashboard</Button>
    </Link>
    </>
  )
}

export default Home