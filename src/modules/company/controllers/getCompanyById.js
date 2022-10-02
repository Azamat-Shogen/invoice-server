import _ from 'lodash';
import ComapnyAccount from '../companyModel.js';


export default async function companyAccountGetById(req, res){
    const companyId = _.get(req, 'params.companyId');

    await ComapnyAccount.findOne({_id: companyId})
        .exec()
        .then( result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                error: 'was not able to get company info.'
            });
        });
}