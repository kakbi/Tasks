async function test() {
    console.log('A');
    await Promise.resolve();
    console.log('B');
}

Promise.resolve().then(() => {
    console.log('C');
});

test();
console.log('D');

// A, D, C, B
