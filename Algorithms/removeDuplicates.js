function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7]));

function removeDuplicates2(arr) {
    const obj = {};

    for (const el of arr) {
        obj[el] = el;
    }

    return Object.keys(obj).map((el) => +el);
}

// console.log(removeDuplicates2([1, 2, 3, 4, 4, 5, 6, 6, 7]));

function removeDuplicates3(arr) {
    return arr.filter((el, index) => arr.indexOf(el) === index);
}

// console.log(removeDuplicates3([1, 2, 3, 4, 4, 5, 6, 6, 7]));

function removeDuplicates4(arr) {
    return arr.reduce((acc, el) => {
        if (!acc.includes(el)) acc.push(el);
        return acc;
    }, []);
}

// console.log(removeDuplicates4([1, 2, 3, 4, 4, 5, 6, 6, 7]));

function removeDuplicates5(arr) {
    return [...new Map(arr.map((el) => [el, el])).values()];
}

// console.log(removeDuplicates5([1, 2, 3, 4, 4, 5, 6, 6, 7]));

function removeDuplicates6(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) result.push(arr[i]);
    }
    return result;
}

// console.log(removeDuplicates6([1, 2, 3, 4, 4, 5, 6, 6, 7]));
