import User from '../userModel';
import bcrypt from 'bcryptjs';


const updateUser = async (req, res) => {
    const { name, password } = req.body;

    await User.findOne({_id: req.user._id}, async function(err, user){
        if(err || user){
            return res.status(400).json({
                error: 'User not found'
            });
        }

        if(!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else { user.name = name; }

        if(password) {
            if(password.length < 6){
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else { 
                const hashedPassword = await bcrypt.hash(password, 12);
                user.password = hashedPassword; 
            }
        }

        // once all conditions match , update the user
        user.save(function(err, updatedUser){
            if(err){
                console.log('user update error, ', err);
                return res.status(400).json({
                    error: 'User udpate failed'
                });
            }
            res.status(200).json(updatedUser);
        });

    });
};

export default updateUser;