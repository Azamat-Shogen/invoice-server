import express from 'express';
import getAllUsers from './controllers/getAllUsers';
import registerUser from './controllers/userRegister';
import { userRegisterValidator, userLoginValidator } from './validators/auth';
import runValidation from './validators';
import userLogin from './controllers/userLogin';


const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', userRegisterValidator, runValidation, registerUser);
router.post('/login', userLoginValidator, runValidation, userLogin);



export default router;