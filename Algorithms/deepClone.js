function deepClone(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    const result = Array.isArray(value) ? [] : {};

    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            result[key] = deepClone(value[key]);
        }
    }

    return result;
}

const original = {
    name: 'Alex',
    skills: ['JS', 'React'],
    address: {
        city: 'Kyiv',
    },
};

const copy = deepClone(original);

copy.address.city = 'Lviv';
copy.skills.push('TS');

console.log(original.address.city); // Kyiv
console.log(original.skills); // ['JS', 'React']
