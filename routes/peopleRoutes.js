const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();

    const peopleSet = new Set();
    expenses.forEach(e => {
      peopleSet.add(e.paid_by);
      e.people?.forEach(p => peopleSet.add(p));
    });

    res.json({ success: true, data: Array.from(peopleSet) });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
