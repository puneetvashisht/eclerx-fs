// "Internal modules" becomes "Namespaces"
// "External modules" becomes "Modules"
var Account;
(function (Account) {
    function createAccount(customer) {
        console.log("Creating multiple accounts for " + customer);
    }
    Account.createAccount = createAccount;
    //nested namespace 1
    var SavingsAccount;
    (function (SavingsAccount) {
        function roi() {
            console.log("ROI for savings account is " + 3.5 + "%.");
            // return 4;
        }
        SavingsAccount.roi = roi;
    })(SavingsAccount = Account.SavingsAccount || (Account.SavingsAccount = {}));
    //nested namespace 2
    var CurrentAccount;
    (function (CurrentAccount) {
        function roi() {
            console.log("ROI for savings account is " + 5.5 + "%.");
            // return 6;
        }
        CurrentAccount.roi = roi;
    })(CurrentAccount = Account.CurrentAccount || (Account.CurrentAccount = {}));
})(Account || (Account = {}));
