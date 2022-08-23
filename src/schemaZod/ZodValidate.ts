import {string, z} from'zod' 

export const UserSchemaF = (obj:object) => {

    const UserSchema = z.object({
        tipo_iden:z.string().min(1),
        num_iden:z.string().min(1),
        nombre:z.string().min(1),
        apellido:z.string().min(1),
        correo:z.string().min(1),
        rolId:z.number().min(1),
        password:z.string().min(1)
    }) 

    UserSchema.parse(obj)
}

export const UserLoginF = (obj:any) => {
     
    const loginSchema = z.object({
        correo:z.string().min(1).email(),
        password:string().min(1)
    })

    loginSchema.parse(obj)
}

 