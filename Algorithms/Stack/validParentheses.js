function isValid(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of str) {
        if (pairs[char]) {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
