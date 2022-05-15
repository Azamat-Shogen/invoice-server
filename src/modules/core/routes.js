import userRoutes from '../user/userRoutes';


export default function routes(app){
    app.use('/api', userRoutes);
}