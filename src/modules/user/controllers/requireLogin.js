import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';

// const requireLogin = expressjwt({ // req.user
//     secret: process.env.JWT_SECRET,
//     algorithms: ['HS256'], 
// });

// export default requireLogin;


// second solution / auth:

const requireLogin = async ( req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error: 'Access denied'});

    try {
       
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.auth = verified;
        next();

    } catch (error){
        console.log(error);
        return res.status(400).json({error});
    }
};

export default requireLogin;
