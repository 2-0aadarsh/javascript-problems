const arr = [1, 2, 3];

let length = arr.push(arr.shift());

console.log(length, arr);


/*
push on recieving the agrument, first it will evaluate the expression inside it and thus, arr.shift() will executed first. Now arr.shift()   will shift the values of the properties  to the left, delete the last property and update the  length and returns the deleted item i.e "1" here. So, the array becomes [2, 3] as array object get :
{
    "0" : 1,
    "1" : 2,
    "2" : 3,
    length : 3,
}
    to 
{
    "0" : 2,  -> shifted the values to the right
    "1" : 2,
    "2" : 3,
    length : 3,
}
    then 
{
    "0" : 2,
    "1" : 3,  -> shifted the values to the right
    "2" : 3,
    length : 3,
}
    finally 
{
    "0" : 2,
    "1" : 3,  
                -> deleted the last property
    length : 2, -> and upadted the length
}

Now arr.push(1) will be executed and thus, it will  add another property of number "length" i.e. "2" here and add the value (1) to it, update the length and return the length.

Thus the updated array will be [2, 3, 1]
*/