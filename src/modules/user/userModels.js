import mongoose from 'mongoose';
import crypto from 'crypto';

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
        default: 'pending'
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


// // user schema
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         trim: true,
//         required: true,
//         max: 32,
//     },
//     email: {
//         type: String,
//         trim: true,
//         required: true,
//         unique: true,
//         lowercase: true,
//         max: 32,
//     },
//     hashed_password: {
//         type: String,
//         trim: true,
//         required: true,
//         max: 32
//     },
//     salt: String, // will define how strong the hashing of the password is going to be

//     role: {
//         type: String,
//         default: 'client'
//     },

//     status:{
//         type: String,
//         default: 'pending'
//     },

//     resetPasswordLink: { // will generate a token and save it in the database
//         data: String,
//         default: ''
//     },

//     company: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Company',
//         required: false
//     }
// }, { timestamps: true });

// // virtual - will take passsword input value hash it and save it as a hashed password
// userSchema.virtual('password')
//     .set(function(password){ // very important to use "function" instead of () => {} // will be using "this" keyword to referens the current schema
//         this._password = password; // "_" means use this variable inside this function only (temporary variable)
//         this.salt = this.makeSalt();
//         this.hashed_password = this.encryptPassword(password);
//     })
//     .get(function(){
//         return this._password;
//     });

// // Methods

// userSchema.methods = {

//     // create the compare password method
//     authenticate: function(plainText){ 
//         return this.encryptPassword(plainText) === this.hashed_password; // if true ( passwords match ), we can authenticate that user (return true or false)
//     },

//     encryptPassword: function(password){ // hashing the password
//         if(!password) return '';

//         try {
//             return crypto.createHmac('sha1', this.salt)
//                 .update(password)
//                 .digest('hex');
//         } catch (error) {
//             return '';
//         }
//     },

//     makeSalt: function(){
//         return Math.round(new Date().valueOf() * Math.random()) + '';
//     }
// };

// export default mongoose.model('User', userSchema);