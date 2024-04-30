import userModel from '../models/userModel.js'
import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'
import sendMail from '../helpers/mailer.js'

const register = async (req,res) => {
    try{
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json({success:false, msg: 'error', error:error.array()})
        }
        const {name,email,password} = req.body
        const msg = 'This is mail message'
        sendMail(email,'Email varification',msg)
        const isExist = await userModel.findOne({email})
        if(isExist){ return res.status(400).json({success:false, msg: 'Email already registered!!'})}
        const hashPassword = await bcrypt.hash(password,10)
        const data = await new userModel({name,email,password:hashPassword,image:'/image/'+req?.file?.filename}).save()
       
        return res.status(200).json({success:true,msg:'User created!!',data})
    }catch(err){
        return res.status(400).json({success:false, msg: err.message})
    } 
}

export const userController = {
    register
}