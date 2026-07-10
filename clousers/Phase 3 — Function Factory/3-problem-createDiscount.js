function validPercentDiscount(percentDiscount) {
    if(percentDiscount<0) throw new Error(`Invalid Percent Value ${percentDiscount}`)
}

function createDiscount(percentDiscount=0) {
    validPercentDiscount(percentDiscount);

    return function(value) {
        if(percentDiscount == 0) return value;

        return (value - ((percentDiscount/100)*value));
    }
}

const student = createDiscount(20);

console.log(student(1000)); // 800
console.log(student(500));  // 400