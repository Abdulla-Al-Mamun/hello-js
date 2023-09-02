var myComputer = {
    band: "asus",
    price: 2000,
    color: "white",
    processor: "i7",
}

console.log(myComputer);
myComputer.processor = "i21";
myComputer['price'] = 500;
console.log(myComputer);

var bands = myComputer.band;

var bands2 = myComputer['band'];

var propertyName = "band"
var propertValu = myComputer[propertyName];


var properties = Object.keys(myComputer);

var properties2 = Object.values(myComputer);
console.log(properties);
console.log(properties2);

