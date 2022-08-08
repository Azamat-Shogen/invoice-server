import User from '../userModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const registerUser = async (req, res) => {
    const {name, email, password } = req.body;

    try{ 
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(500).json({ error: 'user with this email already exists' });
 
        const hashedPassword = await bcrypt.hash(password, 12); // "12" - is called 'salt' - the level of difficulty ;
 
        const user = await User.create({name, email, password: hashedPassword});
 
        const token = jwt.sign({ email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
 
        res.status(200).json({ user, token });
 
    } catch (err){
        console.log(err);
        res.status(500).json({ message: 'Failed to register a user'});
    }
   
};


export default registerUser;

// import sgMail from '@sendgrid/mail';


// const registerUser = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {

//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status('400').json({
//                 error: 'A user with this email already exists'
//             });
//         }
        
//         const token = jwt.sign(
//             { name, email, password },
//             'test',
//             {expiresIn: '30m'});

//         console.log(token);

//         const user = await User.create({name, email, password});

//         res.status(200).json({ user, token });

//     } catch (error) {
//         console.log(error);
//         console.log('failure while registering a new user');
//         res.status(400).json({
//             error: 'Failed to register a new user'
//         });
//     }
// };


