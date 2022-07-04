// import cors from 'cors';
// require('dotenv').config();

export default function applyCors(app){
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        );
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        next();
    });
}
