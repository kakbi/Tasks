async function foo() {
    console.log(1);
    await bar();
    console.log(2);
}

async function bar() {
    console.log(3);
}

console.log(4);
foo();
console.log(5);

// call stack 4,1,3,5
//micro task 2

// 4, 1, 3, 5, 2
