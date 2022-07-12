import User from '../userModel';

export default async function userChangeStatus(req, res){
    const { status, userId } = req.body;
    const allowedStatuses = ['pending', 'restricted', 'active'];

    try {
        const validStatus = allowedStatuses.includes(status.toLowerCase());
        if(!validStatus) {
            return res.status(400).json({ error: 'Invalid status'});
        }
        
        if(!userId){
            return res.status(400).json({ error: 'Id is missing'});
        }

        await User.findByIdAndUpdate(userId, { status }, { new: true });

        res.status(200).json({ message: 'User\'s status has been updated successfully'});
        
    } catch (err) {
        res.status(400).json({ error: 'Failed to update the status'});
    }

}


// export default async function userChangeStatus(req, res){
//     const { status } = req.body;
//     const allowedStatuses = ['pending', 'restricted', 'granted'];

//     const userId = req.params.id;

//     try {
//         const validStatus = allowedStatuses.includes(status.toLowerCase());
//         if(!validStatus) {
//             return res.status(400).json({ error: 'Invalid status'});
//         }


//         await User.findByIdAndUpdate(userId, { status }, { new: true });

//         res.status(200).json({ message: 'User\'s status has been updated successfully'});
        
//     } catch (err) {
//         res.status(400).json({ error: 'Failed to update the status'});
//     }

// }
