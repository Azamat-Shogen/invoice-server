import userRoutes from '../user/userRoutes';
import companyRoutes from '../company/companyRoutes';


export default function routes(app){
    app.use('/api', userRoutes);
    app.use('/api/companyAccount', companyRoutes);
}

