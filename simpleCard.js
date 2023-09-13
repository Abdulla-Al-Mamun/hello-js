const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 1500, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 3 },
    { name: 'belt', price: 300, quantity: 2 },
    { name: 'boxer', price: 250, quantity: 3 },
]

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
        // console.log(product);
    }
    return sum;
}


const expense = totalCost(shoppingCart);
console.log('Total Expense Today:', expense);