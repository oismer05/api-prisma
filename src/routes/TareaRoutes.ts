import { Router } from "express";

const route = Router() 

import * as TareaController from "../constrollers/TareaController"
import { verifyToken } from "../middlewares/authJwt";

route.get('/getTarea',verifyToken,TareaController.getTarea)
route.post('/guardarTareas',verifyToken,TareaController.PostTarea)
route.get('/oneTarea/:id',verifyToken,TareaController.getOneTarea)
route.put('/updateTarea/:id',verifyToken,TareaController.updateTarea)
route.delete('/deleteTarea/:id',verifyToken,TareaController.deleteTarea) 

export default route