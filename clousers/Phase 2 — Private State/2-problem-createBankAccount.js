function defaultValue(value) {
    return value;
}

function createBankAccount(initialBalance = defaultValue(0)) {
    let originalBalance = initialBalance;
    function deposit(amount) {
        initialBalance = initialBalance + amount;
    }

    function withdraw(amount) {
        if(amount<=initialBalance) {
            initialBalance = initialBalance - amount;
        } else {
            throw new Error(`Insufficient current amount`);
        }
    }

    function getBalance() {
        return initialBalance;
    }

    function reset() {
        initialBalance = originalBalance;
    }

    return {
        deposit, withdraw, getBalance, reset
    }
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100

account.deposit(50); // 150
console.log(account.getBalance()); // 150

account.withdraw(80);
console.log(account.getBalance()); // 70

account.reset();
console.log(account.getBalance()); // 100