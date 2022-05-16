import express from 'express';
import getAllUsers from './controllers/getAllUsers';
import registerUser from './controllers/userRegister';
import { userRegisterValidator, userLoginValidator } from './validators/auth';
import runValidation from './validators';
import userLogin from './controllers/userLogin';
import getUserById from './controllers/getUserById';
import userDeleteById from './controllers/userDeleteById';


const router = express.Router();

router.get('/users', getAllUsers);
router.post('/register', userRegisterValidator, runValidation, registerUser);
router.post('/login', userLoginValidator, runValidation, userLogin);
router.get('/user/:id', getUserById);
router.delete('/user/:id', userDeleteById);



export default router;