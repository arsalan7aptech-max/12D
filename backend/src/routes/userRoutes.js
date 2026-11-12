import express from "express"
import { getUsers, login, register } from "../controllers/userController.js"

const userRoutes= express.Router()

userRoutes.post("/login", login)
userRoutes.post("/register",register)
userRoutes.get("/get-user", getUsers)

export default userRoutes