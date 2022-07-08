import { PrismaClient } from '@prisma/client'

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
        
        const tarea = await prisma.tarea.create({
            data:req.body
        })

        res.status(200).json({
            code:200,
            message:"Tarea guadada",
            data:tarea
        })

      } catch (error) {
        res.json(error)
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
       }
       )

       res.status(200).json({
        code:200,
        message:"Una Tarea obtenida",
        data:oneTarea  
      })

    } catch (error) {
      res.json(error)    
    }

}

export const updateTarea = async (req:any,res:any) => {
    try {
      
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