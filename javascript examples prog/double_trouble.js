// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 2, 3, 4, 5, 6, 6, 10];

function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log(arr[i] * 2); // Only double one of them
            i++; // Skip the next one since it's a duplicate
        } else {
            console.log(arr[i] * 2);
        }
    }
}