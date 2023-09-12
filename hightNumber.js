function hightNumberInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {

        const index = i;
        const element = numbers[index];
        // console.log(element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [155, 160, 125, 185, 256];
const tallest = hightNumberInArray(heights);
console.log(tallest);
console.log(tallest); console.log(tallest); console.log(tallest);