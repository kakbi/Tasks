function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        clearInterval(timerId);

        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const debouncedLog = debounce(console.log, 300);

debouncedLog(1);
debouncedLog(2);
debouncedLog(3);

// after 300ms -> 3

const debounceSayHello = debounce(function (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}, 1000);

debounceSayHello('Vadym', 'Cheba');

function debounce1(fn, delay) {
    let timerId;
    return function (...args) {
        let context = this;

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

const user = {
    firstName: 'Bob',
    lastName: 'Grom',
    sayHello: function () {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
    debounceSayHello: debounce1(function () {
        this.sayHello();
    }, 1000),
};

user.debounceSayHello();

function debounce(fn, delay, immediate = false) {
    let timerId;

    return function (...args) {
        const context = this;
        const callNow = immediate && !timerId;

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            timerId = null;
            if (!immediate) {
                fn.apply(context, args);
            }
        }, delay);

        if (callNow) {
            fn.apply(context, args);
        }
    };
}
