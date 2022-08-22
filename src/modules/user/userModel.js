import mongoose from 'mongoose';

// user schema
const userSchema  = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        max: 32,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    salt: String, // will define how strong the hashing of the password is going to be

    role: {
        type: String,
        default: 'client'
    },

    status:{
        type: String,
        default: 'Active'
    },

    resetPasswordLink: { // will generate a token and save it in the database
        data: String,
        default: ''
    },

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: false
    }

}, { timestamps: true });

export default mongoose.model('User', userSchema);

