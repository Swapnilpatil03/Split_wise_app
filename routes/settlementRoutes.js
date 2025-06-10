const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();

    const balances = {};

    expenses.forEach(exp => {
      const splitBetween = exp.people?.length > 0 ? exp.people : [exp.paid_by, ...new Set(expenses.map(e => e.paid_by))];
      const splitAmount = exp.amount / splitBetween.length;

      splitBetween.forEach(person => {
        if (!balances[person]) balances[person] = 0;
        balances[person] -= splitAmount;
      });

      if (!balances[exp.paid_by]) balances[exp.paid_by] = 0;
      balances[exp.paid_by] += exp.amount;
    });

    const creditors = [], debtors = [];

    Object.keys(balances).forEach(person => {
      const amount = +balances[person].toFixed(2);
      if (amount > 0) creditors.push({ person, amount });
      else if (amount < 0) debtors.push({ person, amount: -amount });
    });

    const settlements = [];

    // Simple Greedy Settlement
    while (creditors.length && debtors.length) {
      const creditor = creditors[0];
      const debtor = debtors[0];

      const settledAmount = Math.min(creditor.amount, debtor.amount);
      settlements.push({ from: debtor.person, to: creditor.person, amount: +settledAmount.toFixed(2) });

      creditor.amount -= settledAmount;
      debtor.amount -= settledAmount;

      if (creditor.amount === 0) creditors.shift();
      if (debtor.amount === 0) debtors.shift();
    }

    res.json({ success: true, data: settlements });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
