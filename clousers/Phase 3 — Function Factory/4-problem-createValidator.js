function createValidator(minLength) {
    if(minLength<0) {
        throw new Error(`Invalid length size ${minLength}`)
    }
    return function(str) {
        if(str.length < minLength) {
            return false;
        } 
        return true;
    }
}

const validateUsername = createValidator(5);

console.log(validateUsername("abc"));      // false
console.log(validateUsername("abcde"));   // true