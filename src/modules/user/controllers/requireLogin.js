import { expressjwt } from 'express-jwt';

const requireLogin = expressjwt({ // req.user
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'], 
});

export default requireLogin;