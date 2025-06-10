const BASE_URL = "http://localhost:5000";

window.onload = async () => {
  const expenses = await fetch(`${BASE_URL}/expenses`).then(res => res.json());
  const balances = await fetch(`${BASE_URL}/balances`).then(res => res.json());
  const settlements = await fetch(`${BASE_URL}/settlements`).then(res => res.json());

  const expenseList = document.getElementById("expenseList");
  expenses.data.forEach(exp => {
    const li = document.createElement("li");
    li.textContent = `${exp.description} - ₹${exp.amount} (paid by ${exp.paid_by})`;
    expenseList.appendChild(li);
  });

  const balanceList = document.getElementById("balanceList");
  for (const person in balances.data) {
    const li = document.createElement("li");
    li.textContent = `${person}: ₹${balances.data[person].toFixed(2)}`;
    balanceList.appendChild(li);
  }

  const settlementList = document.getElementById("settlementList");
  settlements.data.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.from} pays ₹${s.amount} to ${s.to}`;
    settlementList.appendChild(li);
  });
};
