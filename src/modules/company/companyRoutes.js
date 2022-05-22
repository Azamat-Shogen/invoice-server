import { Router } from 'express';
import requireLogin from '../user/controllers/requireLogin';
import runCompanyValidation from './validators';
import createCompanyAccount from './controllers/createCompany';
import { companyValidation } from './validators/companyValidaton';


const router = Router();

router.post('/', requireLogin, companyValidation, runCompanyValidation, createCompanyAccount);

export default router;