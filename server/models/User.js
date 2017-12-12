const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Subject = require('./Subject');

const UserSchema = new Schema({
  email: { type: String, required: [true, 'email is require'] },
  password: { type: String, required: [true, 'password is require'] },
  displayName: String,
  major: { type: String, default: '소프트웨어'},
  grade: { type: String, default: 4},
  created_at: { type: Date, default: Date.now() },
  maximum_credit: { type: Number, default: 19 },
  subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});

module.exports = mongoose.model('User', UserSchema);
