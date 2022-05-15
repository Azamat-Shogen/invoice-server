import User from '../userModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({error: 'User with this email does not exist'});
        }

        const correctPassword = await bcrypt.compare(password, user.password);
        
        if(!correctPassword){
            return res.status(400).json({error: 'Invalid credentials'});
        }

        // if both email and password exist get the success result
        const token = jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        
        console.log('token is: ', token);
 
        res.status(200).json({user, token});

    } catch(err){
        res.status(500).json({error: 'Login user failed'});
    }
};

export default userLogin;