import {Response} from 'express'
import jwt from 'jsonwebtoken';

export const verifyToken = async (req:any,res:Response,next:any) => {
    const token:any = req.headers["x-access-token"];

    if(!token){
        res.status(403).json({message:"Token no enviado"})
        return        
    }

    const decode = jwt.verify(token,process.env.SECRET || 'token')
    req.user = decode;   

    next() 
}