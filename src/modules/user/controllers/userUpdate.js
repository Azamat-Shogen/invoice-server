import User from '../userModel';
import bcrypt from 'bcryptjs';
import lodash from 'lodash';


const userUpdate = async (req, res) => {
    // console.log(req.auth);
    const data = req.body;
   
    const userId = lodash.get(req.auth, 'id', 'none');

    if(data.password){
        const p = await bcrypt.hash(data.password, 12);
        data.password = p;
    }
   
    await User.findByIdAndUpdate(userId, {...data, _id: userId}, {new: true})
        .then( user => {
            if(!data.password){data.password = user.password;}
            return res.status(200).json(user); 
        })
        .catch(err => res.status(400).json({error: err}));

};


export default userUpdate;