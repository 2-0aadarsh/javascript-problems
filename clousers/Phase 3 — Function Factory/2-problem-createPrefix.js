function required(paramName) {
    return new Error(`${paramName} is required`);
}

function createPrefix(prefix = required("prefix")) {

    return function(str) {
        return prefix + " " + str;
    }
};

const info = createPrefix("[INFO]");

console.log(info("Server Started"));
console.log(info("Connected"));