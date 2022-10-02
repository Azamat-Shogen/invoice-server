import { Router } from 'express';
import requireLogin from '../user/controllers/requireLogin.js';
import runCompanyValidation from './validators/index.js';
import createCompanyAccount from './controllers/createCompany.js';
import { companyValidation, companyUpdateValidation } from './validators/companyValidaton.js';
import companyAccountGetById from './controllers/getCompanyById.js';
import companyUpdate from './controllers/updateCompany.js';


const router = Router();

router.post('/', requireLogin, companyValidation, runCompanyValidation, createCompanyAccount);
router.get('/:companyId', requireLogin, companyAccountGetById);
router.patch('/:companyId', requireLogin, companyUpdateValidation, runCompanyValidation, companyUpdate);


export default router;
