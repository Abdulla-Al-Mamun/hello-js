function getSumOfArray(numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


const myNumbers = [10, 20, 30, 40, 50, 60];
const total = getSumOfArray(myNumbers);
console.log(total);