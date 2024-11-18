function divideBy(firstNumber) {
    if (typeof firstNumber != 'number') {
        throw new Error('firstNumber must be a valid number');
    }
    return (secondNumber) => {
        if (typeof secondNumber != 'number') {
            throw new Error('secondNumber must be a valid number');
        }
        return secondNumber / firstNumber;
    }
}

function addBy(firstNumber) {
    if (typeof firstNumber != 'number') {
        throw new Error('firstNumber must be a valid number');
    }
    return (secondNumber) => {
        if (typeof secondNumber != 'number') {
            throw new Error('secondNumber must be a valid number');
        }
        return firstNumber + secondNumber;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);
