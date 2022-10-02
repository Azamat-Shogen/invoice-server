import User from '../userModel.js';
import lodash from 'lodash';


const adminMiddleware = (req, res, next) => {

    const userId = lodash.get(req.auth, 'id', '');
    
    User.findById(userId).exec( (err, user ) => {
       
        if(err || !user){
            return res.status(400).json({
                error: 'User not found'
            });
        }

        // check if the user's role is: admin
        if(user.role !== 'admin'){
            return res.status(400).json({
                error: 'Admin resource. Access denied'
            });
        }

        // if role is admin 
        req.profile = user;
        next();
    });
};

export default adminMiddleware;