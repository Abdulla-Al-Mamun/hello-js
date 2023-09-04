// function isLeapYear(year) {
//     const remainder = year % 4;
//     if (remainder === 0) {
//         return true;
//     }
//     return false;
// }

// const 
// const leapYear = isLeapYear(2023);

// console.log(leapYear);

// fine leap years and add a array 


function findLeapYear(year) {
    // console.log(years);
    const newLeapYear = [];
    for (let i = 0; i < year.length; i++) {
        const index = i;
        const element = year[index];
        // console.log(index, element);
        if (element % 2 === 0) {
            newLeapYear.push(element);
        }
    }
    return newLeapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
const leapYear = findLeapYear(years);
console.log(leapYear);
