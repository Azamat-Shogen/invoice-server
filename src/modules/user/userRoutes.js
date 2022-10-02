import express from 'express';
import getAllUsers from './controllers/getAllUsers.js';
import registerUser from './controllers/userRegister.js';
import { userRegisterValidator, userLoginValidator, userUpdateValidator } from './validators/auth.js';

import runValidation from './validators/index.js';
import userLogin from './controllers/userLogin.js';
import getUserById from './controllers/getUserById.js';
import userDeleteById from './controllers/userDeleteById.js';
import requireLogin from './controllers/requireLogin.js';
import adminMiddleware from './controllers/adminMiddlewar.js';
import userUpdate from './controllers/userUpdate.js';
import userChangeStatus from './controllers/userChangeStatus.js';



const router = express.Router();

router.post('/register', userRegisterValidator, runValidation, registerUser);
router.post('/login', userLoginValidator, runValidation, userLogin);
router.get('/users', requireLogin, adminMiddleware, getAllUsers);

router.get('/user/:id', requireLogin, getUserById);
router.delete('/users', requireLogin,adminMiddleware, userDeleteById);
router.patch('/users', requireLogin, adminMiddleware, userChangeStatus);

router.put('/user/update', requireLogin, userUpdateValidator, runValidation,  userUpdate);

export default router;




// router.delete('/admin/user/:id', requireLogin,adminMiddleware, userDeleteById);
// router.patch('/admin/user/:id', requireLogin, adminMiddleware, userChangeStatus);
