import express from 'express';
import getAllUsers from './controllers/getAllUsers';
import registerUser from './controllers/userRegister';
import { userRegisterValidator } from './validators/auth';
import runValidation from './validators';


const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', userRegisterValidator, runValidation, registerUser);


export default router;