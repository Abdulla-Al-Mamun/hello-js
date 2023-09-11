// function numbers(values) {
//     let number = Math.max(values);
//     return number;
// }
// const num = [10, 20, 30]
// const givenValues = numbers(num);
// console.log(givenValues);

function numbers(num1, num2, num3) {
    return (Math.max(num1, num2, num3));

}
let number1 = 10;
let number2 = 25;
let number3 = 50;
let result = numbers(number1, number2, number3);

console.log(result);