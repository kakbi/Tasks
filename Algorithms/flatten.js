function flatten(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

// console.log(flatten([1, 2, [3, [4, 5], 6], 7]));

function flatten2(arr) {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            acc.push(...flatten2(cur));
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
}

// console.log(flatten2([1, 2, [3, [4, 5], 6], 7]));

function flatten3(arr) {
    const stack = [...arr];
    const result = [];

    while (stack.length) {
        const item = stack.pop();

        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.push(item);
        }
    }

    return result.reverse();
}

// console.log(flatten3([1, 2, [3, [4, 5]]]));

function flatten4(arr, depth = 1) {
    if (depth === 0) return arr.slice();

    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten4(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten4([1, 2, [3, [4, 5]]], 2));
