function processPayment(amount) {
    if (typeof amount != 'number') {
        throw Error('amount must be a valid number');
    }
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {
    if (typeof orderId != 'number') {
        throw Error('orderId must be a valid number');
    }
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

function main() {
    console.log(`Processing orders`);
    processOrder(12321, 10.99);
    processOrder(12322, 12.99);
    processOrder(12323, 15.00);
    console.log(`All the orders have been processed`)
}

main();
