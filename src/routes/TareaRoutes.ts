import { Router } from "express";

const route = Router() 

import * as TareaController from "../constrollers/TareaController"

route.get('/getTarea',TareaController.getTarea)
route.post('/guardarTareas',TareaController.PostTarea)
route.get('/oneTarea/:id',TareaController.getOneTarea)
route.put('/updateTarea/:id',TareaController.updateTarea)
route.delete('/deleteTarea/:id',TareaController.deleteTarea) 

export default route