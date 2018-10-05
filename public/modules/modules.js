var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Bad Bank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#" onclick="loadCreateAccount()"> Create Account </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadTransactions()">Transactions</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="loadAllData()">All Data</a>
        </li>
      </ul>
    </div>
</nav>
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Create Account</div>
  <div class="card-body">
  <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter email here">
    <small id="nameHelp" class="form-text text-muted">Enter Name Above</small>
  </div>
  <div class="form-group">
    <label for="name">E-mail Address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email here">
    <small id="emailHelp" class="form-text text-muted">Enter Email Above</small>
  </div>
  <div class="form-group">
    <label for="name">Password</label>
    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter Password">
    <small id="passwordHelp" class="form-text text-muted">Enter Password Above</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</div>
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
    <form>
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <input type="text" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter email here">
      <small id="nameHelp" class="form-text text-muted">Enter Email Above</small>
    </div>
    <div class="form-group">
    <label for="name">Password</label>
    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter Password">
    <small id="passwordHelp" class="form-text text-muted">Enter Password Above</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
    <form>
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <input type="text" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter email here">
      <small id="nameHelp" class="form-text text-muted">Enter Email Above</small>
    </div>
    <div class="form-group">
    <label for="name">Amount</label>
    <input type="text" class="form-control" id="amount" placeholder="Enter Amount">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
    <form>
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <input type="text" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter email here">
      <small id="nameHelp" class="form-text text-muted">Enter Email Above</small>
    </div>
    <div class="form-group">
    <label for="name">Amount</label>
    <input type="text" class="form-control" id="amount" placeholder="Enter Amount">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
    <form>
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <input type="text" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter email here">
      <small id="nameHelp" class="form-text text-muted">Enter Email Above</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
</div>

`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
<div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
    <form>
    <div class="form-group">
      <label for="email">E-mail Address</label>
      <input type="text" class="form-control" id="email" aria-describedby="nameHelp" placeholder="Enter email here">
      <small id="nameHelp" class="form-text text-muted">Enter Email Above</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</div>
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
<div class="card bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">Bad Bank</div>
    <div class="card-body">
      <h5 class="card-title">Welcome to Bad Bank</h5>
      <p class="card-text">Follow links above</p>
    </div>
</div>
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">All Data</div>
    <div class="card-body">
    <form>
    <button type="submit" class="btn btn-primary">All Data</button>
</form>
    </div>
</div>
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
