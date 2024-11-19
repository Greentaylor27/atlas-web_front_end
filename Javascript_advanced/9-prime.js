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

let sTime = performance.now();
countPrimeNumbers();
let eTime = performance.now();
let time = eTime - sTime;

console.log(`Execution time of printing countPrimeNumbers was ${time} milliseconds.`);
