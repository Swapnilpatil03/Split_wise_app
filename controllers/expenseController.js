const Expense = require('../models/Expense');

exports.getAllExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json({ success: true, data: expenses });
};

exports.addExpense = async (req, res) => {
  try {
    const { amount, description, paid_by } = req.body;
    if (!amount || !description || !paid_by) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const expense = await Expense.create(req.body);
    res.status(201).json({ success: true, data: expense, message: 'Expense added successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateExpense = async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!expense) return res.status(404).json({ success: false, message: 'Expense not found' });
  res.json({ success: true, data: expense });
};

exports.deleteExpense = async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id);
  if (!expense) return res.status(404).json({ success: false, message: 'Expense not found' });
  res.json({ success: true, message: 'Expense deleted successfully' });
};
