import userRoutes from '../user/userRoutes.js';
import companyRoutes from '../company/companyRoutes.js';


export default function routes(app){
    app.use('/api', userRoutes);
    app.use('/api/companyAccount', companyRoutes);
}

