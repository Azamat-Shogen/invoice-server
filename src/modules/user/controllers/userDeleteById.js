import User from '../userModel';
import CompanyAccount from '../../company/companyModel';


const userDeleteById = async (req, res) => {
    const userId = req.params.id;

    await User.findOneAndRemove({_id: userId })
        .then(result => {

            // remove company account first
            if('company' in result) {
                CompanyAccount.findOneAndRemove({ _id: result.company })
                    .then(companyResult => {
                        console.log('company deleted successfully: ', companyResult.companyName);
                    })
                    .catch(companyError => {
                        console.log(companyError);
                        res.status(400).json({ error: 'failed to delete the company prior the user'});
                    });
            }

            console.log('result is: ', result);
            res.status(200).json({ message: `User: ${result.name} - deleted successfully`} );
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ error: err.message});
        });
};

export default userDeleteById;