const numberOfPassengers = (100);
function publicBusFare(public) {
    if (typeof public == "number") {
        let bus = public - 50;
        let car = bus - 11;
        let rest = car;
        let totalcost = rest * 250;
        return totalcost;
    }
    else {
        return " Error Input! Please Give Number type value.";
    }
}
const result = publicBusFare(numberOfPassengers);
console.log(result);