    function once(fn) {
        let hasExecuted = false;
        let result;

        return function(...args) {
            hasExecuted ? (console.log(result), result) : (hasExecuted = true, result = fn(...args));
        }
    }

    function login() {
        let user;
        return function(username) {
            user = username;
            console.log(`${user} logged in`);
            return `${user} is already logged in`;
        }
    }

    const login1 = once(login());
    login1("Aadarsh");
    login1("Aadarsh 2");

    const login2 = once(login());
    login2("Aman");
    login2("Aman 2");