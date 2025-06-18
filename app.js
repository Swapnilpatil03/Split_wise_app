const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use('/expenses', require('./routes/expenseRoutes'));
app.use('/settlements', require('./routes/settlementRoutes'));
app.use('/balances', require('./routes/balanceRoutes'));
app.use('/people', require('./routes/peopleRoutes'));


module.exports = app;
