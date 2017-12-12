const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  name: { type: String, required: true },
  major: { type: String, required: true },
  courseNumber: { type: String, required: true },
  credit: { type: Number, default: 3 },
  time: { type: Number, default: 3 },
  professor: String,
  lectureTime: String,
  lectureRoom: String,
  isCyber: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() },
  seats: { type: Number, required: true }
});

module.exports = mongoose.model('Subject', SubjectSchema);
