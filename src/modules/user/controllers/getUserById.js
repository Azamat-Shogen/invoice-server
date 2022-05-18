import User from '../userModel';


const getUserById = (req, res) => {
    const userId = req.params.id;
  
    User.findById(userId).exec( (err, user) => {
        if(err || !user ) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
     
        res.status(200).json(user);
    });
};
  
export default getUserById;