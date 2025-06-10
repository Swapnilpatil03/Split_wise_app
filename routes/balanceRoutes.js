const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();

    const balances = {};

    // Calculate balance for each person
    expenses.forEach((exp) => {
      const splitBetween = exp.people?.length > 0 ? exp.people : [exp.paid_by, ...new Set(expenses.map(e => e.paid_by))];

      const splitAmount = exp.amount / splitBetween.length;

      splitBetween.forEach(person => {
        if (!balances[person]) balances[person] = 0;
        balances[person] -= splitAmount;
      });

      if (!balances[exp.paid_by]) balances[exp.paid_by] = 0;
      balances[exp.paid_by] += exp.amount;
    });

    res.json({ success: true, data: balances });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
