function createToggle() {
    let isToggle = false;

    return function() {
        isToggle = !isToggle;
        return isToggle;
    }
}

const toggle = createToggle();
console.log(toggle()); // true
console.log(toggle()); // false
console.log(toggle()); // true
console.log(toggle()); // false
