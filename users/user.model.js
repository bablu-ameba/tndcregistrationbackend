const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, required: true }, // email
    userName: { type: String, required: true },
    phone: { type: String, required: true },
    gender: {type : String, required: true},
    bdate: { type: Date, required: true},
    adate: { type: Date, required: true},
    hash: { type: String, required: false },

    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);





/*  

 name
 email
 phone
 gender
 bdate
*/