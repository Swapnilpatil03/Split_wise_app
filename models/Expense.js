const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  paid_by: { type: String, required: true },
  people: [String], // Optional if splitting between specific people
  split_type: { type: String, enum: ['equal', 'percentage', 'exact'], default: 'equal' },
  split_values: [Number] // For percentage or exact split
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
