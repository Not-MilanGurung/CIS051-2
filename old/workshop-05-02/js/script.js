// Get the metirc values
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

function addTransaction() {
    // Get the values from the form
    const title = document.forms["transactionForm"]["title"].value;
    const desc = document.forms["transactionForm"]["desc"].value;
    const type = document.forms["transactionForm"]["type"].value;
    const category = document.forms["transactionForm"]["category"].value;
    const date = document.forms["transactionForm"]["date"].value;
    const time = document.forms["transactionForm"]["time"].value;
    let amount = document.forms["transactionForm"]["amount"].value;
    amount = parseFloat(amount);

    // Remove the no transactions text if present
    const table = document.getElementById("transactionTable");
    const text = table.innerText;
    if (text.includes("No transactions")){
        table.innerHTML = "";
    }

    // Logic for expense and income
    let typeClass = '';
    if (type ==="expense"){
        typeClass = "amount-expense";
        balance.innerText = parseFloat(balance.innerText) - amount;
        expense.innerText = parseFloat(expense.innerText) + amount;
    } else {
        typeClass = "amount-income";
        balance.innerText = parseFloat(balance.innerText) + amount;
        income.innerText = parseFloat(income.innerText) + amount;
    }

    // Update the table
    const row = 
        `
        <tr>
            <td>${title}</td>
            <td>${category}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td class="${typeClass}">${amount}</td>
        </tr>
        `;

    table.innerHTML += row;
}