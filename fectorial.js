// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//     }
//     return result;
// }

// const result = factorial(9);
// console.log(result);


// factorial reverse by while loop

function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}

const result = factorial(9);
console.log(result);