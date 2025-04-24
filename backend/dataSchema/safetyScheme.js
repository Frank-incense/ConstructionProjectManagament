const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    id: Number, // optional
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  });

const safteySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  questions: [QuestionSchema]
});

module.exports = mongoose.model('workOrders', workOrderSchema);
