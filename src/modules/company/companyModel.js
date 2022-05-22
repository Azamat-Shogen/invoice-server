import mongoose from 'mongoose';


const Schema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,

        companyName: {
            type: String,
            required: true,
        },

        address: {
            type: String,
            required: true,
        },

        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: false,
        },

        zipcode: {
            type: String,
            required: false,
        },

        phone: {
            type: Object,
            required: false,
        },

        email: {
            type: Object,
            required: false,
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,  // 
        },
    },
    { timestamps: true }
);

export default mongoose.model('CompanyAccount', Schema);