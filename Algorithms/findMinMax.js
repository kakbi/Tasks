function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };

    let min, max;
    const sorted = arr.sort((a, b) => a - b);
    min = sorted[0];
    max = sorted[sorted.length - 1];
    return { min, max };
}

// console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5])); //{ min: 1, max: 9 }

function findMinMax2(arr) {
    if (arr.length === 0) return { min: null, max: null };

    let min = arr[0];
    let max = arr[0];
    for (const el of arr) {
        if (el < min) min = el;
        if (el > max) max = el;
    }
    return { min, max };
}

// console.log(findMinMax2([3, 1, 4, 1, 5, 9, 2, 6, 5]));

function findMinMax3(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    return { min, max };
}

// console.log(findMinMax3([3, 1, 4, 1, 5, 9, 2, 6, 5]));

function findMinMax4(arr) {
    return arr.reduce(
        (acc, cur) => {
            if (cur < acc.min) acc.min = cur;
            if (cur > acc.max) acc.max = cur;
            return acc;
        },
        { min: arr[0], max: arr[0] }
    );
}

// console.log(findMinMax4([3, 1, 4, 1, 5, 9, 2, 6, 5]));

function findMinMax5(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}

// console.log(findMinMax5([3, 1, 4, 1, 5, 9, 2, 6, 5]));
