import { Router } from 'express';
import requireLogin from '../user/controllers/requireLogin';
import runCompanyValidation from './validators';
import createCompanyAccount from './controllers/createCompany';
import { companyValidation, companyUpdateValidation } from './validators/companyValidaton';
import companyAccountGetById from './controllers/getCompanyById';
import companyUpdate from './controllers/updateCompany';


const router = Router();

router.post('/', requireLogin, companyValidation, runCompanyValidation, createCompanyAccount);
router.get('/:companyId', requireLogin, companyAccountGetById);
router.patch('/:companyId', requireLogin, companyUpdateValidation, runCompanyValidation, companyUpdate);


export default router;