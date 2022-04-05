```javascript
Describe Account()

Test: "Creates a new bank account"
const account = new Account("bob", 500)


Describe Account.prototype.deposit()
Test: "Will add deposit amount to total"
Code: const account = new Account("bob", 500)
      account.deposit(250)
      console.log(account.balance)
Output: 750

Describe Account.prototype.withdraw()
Test: "Will withdraw amount from total"
Code: const account = new Account("bob", 500)
      account.withdraw(250)
      console.log(account.balance)
Output: 250

Test: "Will not allow withdrawl bigger than account balance"
Code: const account = new Account("bob", 500)
      account.withdraw(900)
Output: "Insufficient Funds"
```
