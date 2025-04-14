// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [1,2,3,4,5,6,-7,8,9];

function sumAll(arr){
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<0){
            console.log("Neagative Number");
            return sum;
        } else{
            sum+= arr[i];
        }
    }
    return sum;
}

let result = sumAll(arr);
console.log("Sum:", result);
