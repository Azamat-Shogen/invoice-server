import mongoose from 'mongoose';
import CompanyAccount from '../companyModel.js';
import User from '../../user/userModel.js';
import jwt from 'jsonwebtoken';


export default function createCompanyAccount(req, res){
    const companyId = new mongoose.Types.ObjectId();
    const { companyName, address, city, state, zipcode, phone, email } = req.body;

    try {
        const token = req.headers.authorization.split(' ')[1];

        if( token ){
            jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
                if(err) return res.status(401).json({ error: 'token not verified' });

                console.log('decoded data: ', decoded);
                const  ownerId = decoded.id;


                CompanyAccount.findOne({ owner: ownerId })
                    .exec( (err, companyData ) => {
                        if(companyData){
                            return res.status(400).json({ error: 'This user has already created a company'});
                        }

                        const company = new CompanyAccount({
                            _id: companyId,
                            companyName,
                            address,
                            city,
                            state,
                            zipcode,
                            phone,
                            email,
                            owner: ownerId
                        });


                        company.save( (err, newCompany ) => {
                            if(err){
                                console.log(err);
                                return res.status(401).json({ error: 'Error while saving the company in the DB'});
                            }

                            return res.status(200).json(newCompany);
                        });

                        //Todo: update current user with the new companyAccount
                        User.findByIdAndUpdate(ownerId, { company: companyId }, {new: true})
                            .exec()
                            .then(result => { console.log('user added a new company success, ', result);})
                            .catch(err => { console.log('user was not able to add a company ', err);});

                    });
            });
        }

    } catch (err) {
        console.log(err);
        res.status(401).json({error: 'not authorized'});
    }
}


