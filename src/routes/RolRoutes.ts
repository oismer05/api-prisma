import { Router } from "express"; 
import * as RolController from "../constrollers/RolController";
const route = Router()

route.post('/addRol',RolController.addRol) 

export default route;
