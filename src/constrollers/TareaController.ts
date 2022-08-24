import { PrismaClient } from '@prisma/client'
import { TareaPost } from '../schemaZod/ZodValidate';

const prisma = new PrismaClient() 

export const getTarea = async (_req:any,res:any) => {
    try {
       const tareas = await prisma.tarea.findMany();
       res.status(200).json({
         code:200,
         message:"Tareas obtenidas",
         data:tareas
        })

    } catch (error) {
        res.json(error)
    }
} 

export const PostTarea =async (req:any,res:any) => {
      try {

        const data = {
          nombre_tarea:req.body.nombre_tarea,
          descripcion:req.body.descripcion,
          userId:req.user.id,
          status:"1"
        }

        //Validar data
        TareaPost(data)
        
         await prisma.tarea.create({
            data:data
        })

        res.status(200).json({
            code:200,
            message:"Tarea guardada exitosamente !!",
        })

      } catch (error:any) {
        if(error.issues){
          res.status(400).json(error.issues)
          return
        } 
        
        res.status(500).json(error)  
      }
} 

export const getOneTarea = async (req:any,res:any) => {
    
    try {
      
        const oneTarea = await prisma.tarea.findMany({
         where:{
            id:{
               equals:parseInt(req.params.id) 
            }
         }
       })

       res.status(200).json({
        code:200,
        message:"Tarea obtenida",
        data:oneTarea  
      })

    } catch (error) {
      res.json(error)    
    }

}

export const updateTarea = async (req:any,res:any) => {
    try {
        TareaPost(req.body)
        const updateTarea = await prisma.tarea.updateMany({
          where:{
            id:{
                equals:parseInt(req.params.id)
            }
          },
          data:req.body
       })
       
       res.status(200).json({
        code:200,
        message:"Se actualizaron los datos",
        data:updateTarea  
      })

    } catch (error) {
      res.json(error) 
    }
}

export  const deleteTarea = async (req:any,res:any) => {
    try {

        await prisma.tarea.delete({
            where:{
                id:parseInt(req.params.id)
            }
        })

        res.status(200).json({
            code:200,
            message:"Se elimino la tarea"
        })

    } catch (error) {
        res.json(error) 
    }
} 

export const enviadaTarea = async (req:any,res:any) => {
    try {
      const data = {
        status:"2"
      }
      await prisma.tarea.updateMany({
          where:{
            id:{
                equals:parseInt(req.params.id)
            }
          },
          data:data
       })

       res.status(200).json({
        code:200,
        message:"Se actualizo el estado de la tarea a enviado"
       })

    } catch (error) {
      res.status(500).json(error)
    }
}

export const corregirTarea = async (req:any,res:any) => {
  try {
    const data = {
      status:"3"
    }
    await prisma.tarea.updateMany({
        where:{
          id:{
              equals:parseInt(req.params.id)
          }
        },
        data:data
     })

     res.status(200).json({
      code:200,
      message:"Se actualizo el estado de la tarea a corregir"
     })

  } catch (error) {
    res.status(500).json(error)
  }
}

export const aprobarTarea = async (req:any,res:any) => {
  try {
    const data = {
      status:"4"
    }
    await prisma.tarea.updateMany({
        where:{
          id:{
              equals:parseInt(req.params.id)
          }
        },
        data:data
     })

     res.status(200).json({
      code:200,
      message:"Se actualizo el estado de la tarea aprobada"
     })

  } catch (error) {
    res.status(500).json(error)
  }
}