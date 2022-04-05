function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    alert("Insufficient Funds");
  } else {
    this.balance -= amount;
  }
};

// UI
let isDeposit = false;
let account;
$(document).ready(function () {
  $("#register").submit(function (event) {
    event.preventDefault();
    $("#register").addClass("hidden");
    $("#funds-form").removeClass("hidden");
    $("#button-group").removeClass("hidden");
    const accountName = $("#name-input").val();
    const initial = parseInt($("#initial-deposit").val());
    account = new Account(accountName, initial);
    $("#name").text(account.name);
    $("#funds").text("$" + account.balance);
  });

  $("#funds-form").submit(function (event) {
    event.preventDefault();
    const amount = parseInt($("#amount").val());
    if (isDeposit) {
      account.deposit(amount);
    } else {
      account.withdraw(amount);
    }
    $("#funds").text("$" + account.balance);
  });
  $Account(".btn");
  $("#withdraw-btn").click(function () {
    $("#process").text("Withdraw");
    $("#deposit-btn").removeClass("btn-active");
    $("#withdraw-btn").addClass("btn-active");
    isDeposit = false;
  });

  $("#deposit-btn").click(function () {
    $("#process").text("Deposit");
    $("#withdraw-btn").removeClass("btn-active");
    $("#deposit-btn").addClass("btn-active");
    isDeposit = true;
  });
});
