var number1 = 12;
var number2 = 79;
var number3 = 100;

// if (number1 > number2 || number1 > number3) {

//     if (number2 > number1 || number2 > number3) {
//         console.log('Largest Number Is 79')

//         if (number3 > number1 || number3 > number2) {
//             console.log('Largest Number Is 100')
//         }
//     }
// }
// else {
//     console.log('mm');
// }



if (number1 > number2 && number1 > number3) {
    console.log('Largest Number Is 12')
}
else if (number2 > number1 && number2 > number3) {
    console.log('Largest Number Is 79')
}
else if (number3 > number1 && number3 > number2) {
    console.log('Largest Number Is 100')
}
else {
    console.log('No largest number ')
}