import { check } from 'express-validator'

export const registerValidator = [
    check('name','Name is required.').not().isEmpty(),
    check('email','Please add valid email.').isEmail(),
]