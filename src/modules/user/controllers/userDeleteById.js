
import User from '../userModel';


const userDeleteById = async (req, res) => {
    const userId = req.params.id;

    await User.findOneAndRemove({_id: userId })
        .then(result => {
            res.status(200).json({ message: `User: ${result.name} - deleted successfully`} );
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ error: err.message});
        });
};

export default userDeleteById;

