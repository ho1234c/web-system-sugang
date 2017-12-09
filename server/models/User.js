const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
const Subject = require('./Subject');

const UserSchema = new Schema({
  email: { type: String, required: [true, 'email is require'] },
  password: { type: String, required: [true, 'password is require'] },
  displayName: String,
  created_at: { type: Date, default: Date.now() },
  maximum_credit: { type: Number, default: 19 },
  subjects: [Subject]
});

UserSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', UserSchema);