import {Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
import { encryptPassword,validatePassword } from '../config/configPassword'
const prisma = new PrismaClient()

export const signup = async(req:Request,res:Response) => {

      let data = {
        tipo_iden:req.body.tipo_iden,
        num_iden:req.body.num_iden,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        correo:req.body.correo,
        password:await encryptPassword(req.body.password)      
      }


      await prisma.user.create({
        data:data
      })

      res.status(200).json({
         code:200,
         message:"Usuario registrado exitosamente !!"
      })
      
} 

export const signin = async (req:Request,res:Response) => {
   
  try {
    const user = await prisma.user.findFirst({
      where:{
        correo:req.body.correo
      }
    })

    if(!user) {
      res.status(400).json('Correo o contraseña incorrecto');
      return
    }

   const correctPassword =  await validatePassword(req.body.password,user.password);
   
   if(!correctPassword) {
      res.status(400).json('Contraseña invalida');
      return
   }

  const token =  jwt.sign({
    id:user.id,
    nombre:user.nombre,
    apellido:user.apellido,
    tipodoc:user.tipo_iden,
    numdoc:user.num_iden
   },
   process.env.SECRET || 'token', {
    expiresIn: 60*60*24
   })

    res.status(200).json({token});

  } catch (error) {
    res.json(error) 
  }
}

export const profile = (req:any,res:Response) => {

  try {
    res.json(req.user)
  } catch (error) {
    res.json(error)   
  }
    
}