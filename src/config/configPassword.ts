import bcrypt from 'bcryptjs'

export const encryptPassword = async (password:string) => {
   const salt =  await bcrypt.genSalt(10) 
   return bcrypt.hash(password,salt)  
}

export const validatePassword = async (password:string, getpassword:string) => {
    return await bcrypt.compare(password,getpassword)
}