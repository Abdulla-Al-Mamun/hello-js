// ............01...........

// for (i = 0; i < 100; i++) {
//     console.log("ajke amar mon valo nei", i)
// }

// ............02...........

// for (i = 58; i <= 98; i++) {
//     console.log(i)
// }

// ............03...........

// for (i = 412; i <= 456; i += 2) {
//     console.log(i)
// }

// ............04...........

// for (i = 581; i <= 623; i += 2) {
//     console.log(i)
// }

// ............05...........

var prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 210, 220, 230, 240, 250, 260, 270, 280, 200];

// console.log(price)

for (var i = 0; i < prices.length; i++) {
    var price = prices[i];
    if (price > 200) {
        // break;
        continue;
    }
    console.log(price);
}