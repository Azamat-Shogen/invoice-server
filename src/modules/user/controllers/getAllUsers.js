import User from '../userModel.js';

export default async function getAllUsers(req, res){
    try {
        const users = await User.find();
        console.log('users:  ', users);
        res.status(200).json(users);
    } catch (error) {
        console.log('error');
        res.status(400).json({
            message: 'was not able to retrieve users data'
        });
    }
}

