import express from 'express';
import getAllUsers from './controllers/getAllUsers';
import registerUser from './controllers/userRegister';
import { userRegisterValidator, userLoginValidator, userUpdateValidator } from './validators/auth';
import runValidation from './validators';
import userLogin from './controllers/userLogin';
import getUserById from './controllers/getUserById';
import userDeleteById from './controllers/userDeleteById';
import requireLogin from './controllers/requireLogin';
import adminMiddleware from './controllers/adminMiddlewar';
import userUpdate from './controllers/userUpdate';


const router = express.Router();

router.post('/register', userRegisterValidator, runValidation, registerUser);
router.post('/login', userLoginValidator, runValidation, userLogin);
router.get('/users', requireLogin, adminMiddleware, getAllUsers);

router.get('/user/:id', requireLogin, getUserById);
router.delete('/user/:id', adminMiddleware, requireLogin, userDeleteById);
router.put('/user/update', requireLogin, userUpdateValidator, runValidation,  userUpdate);

export default router;