function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    return false;
}


const leapYear = isLeapYear(2023);

console.log(leapYear);