import CompanyAccount from '../companyModel';


export default async function companyUpdate(req, res){
    const { companyId } = req.params;
    const data = req.body;

    await CompanyAccount.findByIdAndUpdate(companyId, data, { new: true })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ error: 'failed to update the company information'});
        });
}
