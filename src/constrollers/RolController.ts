import {Request,Response} from 'express'
import { PrismaClient } from '@prisma/client' 
const prisma = new PrismaClient()

export const addRol = async(req:Request,res:Response) => {
    try {
      const data = {
         nombre_rol : req.body.nombre_rol
      }
      await prisma.roles.create({
        data
      })

      res.status(200).json({
        code:200,
        message:"Rol agregado exitosamente !!"
     })    
    } catch (error) {
        res.json(error) 
    }
}