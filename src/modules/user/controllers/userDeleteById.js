import User from '../userModel.js';
import CompanyAccount from '../../company/companyModel.js';
import mongoose from 'mongoose';



const userDeleteById = async (req, res) => {

    console.table(req.body);
   
    const { userId } = req.body;
    console.log(typeof userId);


    if(!mongoose.Types.ObjectId.isValid(userId)){
        res.status(404).json({ error: 'not a valid user Id' });
    
    }


    if (!userId){
        res.status(400).json({ error: 'user Id is missing'});
    }

    try {
        const user = await User.findById(userId);
        const company = user.company;
        if(company){
            console.log('company: ... ', company);
            await CompanyAccount.findOneAndRemove({_id: company});
        }

        await User.findOneAndRemove({_id: userId});

        res.status(200).json({ message: `User: ${user.name} has been deleted`} );
        
    } catch (error) {
        res.status(200).json({ error: error.message } );
    } 

};


export default userDeleteById;
