function countWordFrequency(str) {
    let arr = str
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(' ');

    let obj = {};

    for (const word of arr) {
        if (word) {
            obj[word] = (obj[word] || 0) + 1;
        }
    }

    return obj;
}

console.log(countWordFrequency('hello, world. hello hello everyone!'));
// { hello: 3, world: 1, everyone: 1 }
