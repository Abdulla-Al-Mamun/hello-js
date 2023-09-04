function isEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        return "number is Even";
    }
    else if (remainder != 0) {
        return "Number is odd";
    }

}

const evenNumber = isEven(102);
console.log(evenNumber);

const oddNumber = isEven(2001);
console.log(oddNumber);
