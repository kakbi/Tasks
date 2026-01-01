function reverseString(str) {
    return str.split('').reverse().join('');
}

// reverseString('hello'); //"olleh"
// console.log(reverseString('hello'));

function reverseString2(str) {
    let arr = str.split('');
    let reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    let reversedStr = reversedArr.join('');
    return reversedStr;
}

// reverseString2('hello');
// console.log(reverseString2('hello'));

function reverseString3(str) {
    if (str === '') return str;
    return reverseString3(str.slice(1)) + str[0];
}

// reverseString3('hello');
// console.log(reverseString3('hello'));

function reverseString4(str) {
    return str.split('').reduce((reversedStr, char) => char + reversedStr, '');
}

// reverseString4('hello');
// console.log(reverseString4('hello'));

function reverseString5(str) {
    let arr = str.split('');

    let left = 0,
        rigth = arr.length - 1;

    while (left < rigth) {
        [arr[left], arr[rigth]] = [arr[rigth], arr[left]];
        left++;
        rigth--;
    }

    return arr.join('');
}

// reverseString5('hello');
// console.log(reverseString5('hello'));

function reverseString6(str) {
    let reversedStr = '';
    str.split('').forEach((char) => {
        reversedStr = char + reversedStr;
    });
    return reversedStr;
}

// reverseString6('hello');
// console.log(reverseString6('hello'));
