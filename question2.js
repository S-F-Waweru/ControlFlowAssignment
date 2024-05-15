/*

Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:
 
If any non-numeric characters are present (except commas), treat those values as zero.
If the input string is empty, return zero.

*/

let numbers = " 1, 2, 4, 5, 6, 7, 8, 9, 10"

function sum(input){
    //split to array
    // console.log(input.split(','))
    // see the array
    for(let i of input.split()){
        console.log(i + 2)

    }
    // check for non numeric characters
    //
}

sum(numbers)