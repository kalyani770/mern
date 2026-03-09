let customers = [
  {
    id: 1,
    name: "John",
    balance: 5000,
    transactions: [],
  },
  {
    id: 2,
    name: "Amy",
    balance: 5000,
    transactions: [],
  },
];

// deposit(id, amount)
// -Add amount to balance
// -Add transaction record

// withdraw(id, amount)
// -Check if sufficient balance
// -Deduct amount
// -Add transaction

// checkBalance(id)
// -Return current balance

// showTransactions(id)
// -Print Transaction history
function deposit(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
      return {
        ...customer,
        balance:customer.balance + amount,
        transactions: [
          ...customer.transactions,
          {
            type: "credit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    } else {
      return customer;
    }
  });
}
function withDraw(id, amount) {
  customers = customers.map((customer) => {
    if (customer.id === id) {
        if(amount>customer.balance) console.log("Insufficient Fund");
        else{
      return {
        ...customer,
        balance:customer.balance - amount,
        transactions: [
          ...customer.transactions,
          {
            type: "debit",
            amount: amount,
            date: Date.now(),
          },
        ],
      };
    }
}
  });
}
function checkBalance(id) {
  const customer = customers.find((customer) => customer.id === id);
  console.log(customer);
}

function showTransactions(id){
    const transhistory=customers.find((customer)=> customer.id===id);
        if(transhistory){
            console.log(transhistory.transactions)
        }
        else{
            console.log("Inavlid Id")
        }
    }

    




deposit(1, 1500);
checkBalance(1)
withDraw(1, 5500);
checkBalance(1)
showTransactions(1)
