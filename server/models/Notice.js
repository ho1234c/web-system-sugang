const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticeSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Notice', NoticeSchema);
