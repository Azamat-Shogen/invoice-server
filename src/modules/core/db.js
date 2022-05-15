import mongoose from 'mongoose';
require('dotenv').config();

export default function dbConnect(){
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error'));
    db.once('open', function(){
        console.log('Connected to the Database');
    });
}