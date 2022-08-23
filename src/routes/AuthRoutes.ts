import { Router } from "express";

import * as AuthController from "../constrollers/AuthController"
import { verifyToken } from "../middlewares/authJwt";

const route = Router()

route.post('/signup',AuthController.signup) 
route.post('/signin',AuthController.signin)
route.get('/profile',verifyToken,AuthController.profile)

export default route