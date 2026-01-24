setTimeout(() => {
    console.log('timeout1');

    Promise.resolve().then(() => {
        console.log('promise1');
    });
}, 0);

setTimeout(() => {
    console.log('timeout2');
}, 0);

// timeout1 - macro
// promise1 - micro
// timeout2 - macro

// timeout1, promise1, timeout2
