console.log('A');

setTimeout(() => {
    console.log('B');

    Promise.resolve().then(() => {
        console.log('C');
    });
}, 0);

Promise.resolve().then(() => {
    console.log('D');
});

console.log('E');

// A; - call stack
// E; - call stack
// D; - micro task
// B; - macro task
// C; - micro

// A, E, D, B, C
