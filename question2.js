/*

Write a JavaScript function that takes a comma-separated numbers as input and returns the sum of those numbers. The function should validate the input:
 
If any non-numeric characters are present (except commas), treat those values as zero.
If the input string is empty, return zero.

*/

let numbers = "1, 2, 3,4, 7, k, 7, 8, 9, 10"

function sum(input){
    // change to array
    let array = input.split(",")
    console.log(array)
    let numberArray = []
    for (let i of array){
        i = +i
        if (isNaN(i)){
            i = 0
        }

        numberArray.push(i)
    }
    console.log(numberArray)
    // add  the array to return sum 
    let total = numberArray.reduce((acc, curr)=>acc+curr, 0)
    console.log(total)
    // return total
    
    }
   
 


sum(numbers)