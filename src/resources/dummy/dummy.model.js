const mongoose = require('mongoose');

const dummySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  }
});

dummySchema.index({ key: 1 }, { unique: true });
module.exports = mongoose.model('dummy', dummySchema);
