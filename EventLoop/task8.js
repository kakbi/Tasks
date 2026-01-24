async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(() => {
    console.log('timeout');
}, 0);

async1();

Promise.resolve().then(() => {
    console.log('promise');
});

console.log('script end');

// script start
// async1 start
// async2
// script end
// async1 end
// promise
// timeout
