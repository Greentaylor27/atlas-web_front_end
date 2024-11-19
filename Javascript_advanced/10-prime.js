function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let isPrime = true;
        for (let x = 2; x <= Math.sqrt(i); x++){
            if (i % x === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count;
}

function countPrimeNumbers100Times() {
    for (let count = 1; count <= 100; count++) {
        countPrimeNumbers();
    }
}

let sTime = performance.now();
countPrimeNumbers100Times();
let eTime = performance.now();
let time = eTime - sTime;

console.log(`Execution time of counting countPrimeNumbers 100 times was ${time} milliseconds.`);
