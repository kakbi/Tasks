function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const stack = [];

    for (let char of cleanStr) {
        stack.push(char);
    }

    for (let char of cleanStr) {
        if (char !== stack.pop()) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('level')); // true
console.log(isPalindrome('hello')); // false
