import express from 'express'
const router = express.Router() 
router.use(express.json())
import path from 'path'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
            cb(null,path.join(__dirname,'../public/images'))
        }
    },
    filename: function(req,file,cb){
        const name = Date.now()+'-'+file.originalname
        cb(null,name)
    }
})
const fileFilter = (req,file,cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const upload = multer({
    storage,
    fileFilter
})

import {userController} from '../constrollers/userController.js'
import {registerValidator} from '../helpers/validator.js'
router.post('/register',[upload.single('image'),registerValidator],userController.register)

export default router


