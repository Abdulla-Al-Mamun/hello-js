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

function getOddOfArray(numbers) {
    // console.log(numbers);
    const oddArray = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 0) {
            // console.log(element);
            oddArray.push(element);
        }
    }
    return oddArray;
}

const myNumbers = [10, 20, 33, 40, 55, 60];
// const total = getSumOfArray(myNumbers);
const oddNumber = getOddOfArray(myNumbers);
// console.log(oddNumber);
const sumOdd = getSumOfArray(oddNumber);
console.log(sumOdd);