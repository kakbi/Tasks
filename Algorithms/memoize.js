function memoize(fn) {
    const cashe = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cashe.has(key)) {
            return cashe.get(key);
        }

        const result = fn(...args);
        cashe.set(key, result);

        return result;
    };
}

function add(a, b) {
    console.log('calculate');
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2)); //calculate -> 3
console.log(memoizedAdd(1, 2)); //3 from cashe

function memoize2(fn) {
    const cashe = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cashe.has(key)) {
            return cashe.get(key);
        }

        const result = fn.apply(this, args);
        cashe.set(key, result);

        return result;
    };
}

const obj = {
    prefix: 'Hello',
    multiply(a, b) {
        return `${this.prefix} ${a * b}`;
    },
};

const memoizedMultiply = memoize2(obj.multiply);

console.log(memoizedMultiply.call(obj, 1, 2)); // "Hello 3"
