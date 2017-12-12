const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const UserSchema = new Schema({
  email: { type: String, required: [true, 'email is require'] },
  password: { type: String, required: [true, 'password is require'] },
  displayName: String,
  //joinSubjectId: array,
  created_at: { type: Date, default: Date.now() }
});

UserSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', UserSchema);
