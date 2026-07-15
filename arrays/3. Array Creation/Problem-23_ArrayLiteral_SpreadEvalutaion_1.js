const arr = [10, 20];

const result = [
    5,
    ...arr,
    30
];

console.log(result);


/*
1. here, what parser sees is
                ├── Expression → 5
                ├── Spread Element → ...arr
                └── Expression → 30

2. Now what runtime will do it will first create this Reference#A array object and store this reference inside the arr varaible

    Reference #A
        ↓
    {
        "0" : 10,
        "1" : 20,
        length : 2
    }

    arr = Reference #A

    now till now result = <uninitialized>
    now at runtime comes the [ and thus js engine will create another array object and initialized it with length 0. 

    Reference #B
        ↓
    {
        length : 0
    }
    1. now it will first found the expression and it is 5 and then it evaluates to 5 only thus 5 get store at property "0"
    2. now it will found the Spread Element and js engine will iterate over this iterable to get first value as 10 then store it and again it get 20 then store it, and now iterable  ended looping. 
    3. now it will lastly found the expression and it is 30 and then it evaluates to 30 only thus 30 get store at property "3"
    
    therefore result = Reference #B 
                            ↓
                        {
                            "0" : 5,
                            "1" : 10,
                            "2" : 20,
                            "3" : 30,
                            length : 0
                        }

CONCLUSION :
    The runtime reaches the Spread Element (...arr), obtains values from the array's iterator one at a time, and inserts each produced value into the next available index of the new array. The original array object itself is never copied as a single value; only its produced element values are inserted.

*/