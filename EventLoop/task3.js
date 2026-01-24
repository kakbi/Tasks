Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    });

console.log(3);

// call stack - 3
// microtasks - 1, 2

// 3,1,2
