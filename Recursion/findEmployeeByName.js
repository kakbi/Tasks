const company = [
    {
        id: 1,
        name: 'Development',
        employees: [
            {
                id: 101,
                name: 'Ivan Ivanov',
                position: 'Frontend Developer',
            },
            {
                id: 102,
                name: 'Petr Petrov',
                position: 'Backend Developer',
            },
            {
                id: 103,
                name: 'Maria Sidorova',
                position: 'UI/UX Designer',
            },
        ],
        departments: [],
    },
    {
        id: 2,
        name: 'Marketing',
        employees: [
            {
                id: 201,
                name: 'Li Bin',
                position: 'SEO Specialist',
            },
            {
                id: 202,
                name: 'Joe West',
                position: 'SMM Manager',
            },
        ],
        departments: [],
    },
    {
        id: 3,
        name: 'HR',
        employees: [
            {
                id: 301,
                name: 'Lana Rey',
                position: 'HR Manager',
            },
            {
                id: 302,
                name: 'Anna Karenina',
                position: 'Recruiter',
            },
        ],
        departments: [],
    },
];

function findEmployeeByName(company, name) {
    for (let department of company) {
        if (department.employees) {
            const found = department.employees.find((e) => e.name === name);
            if (found) {
                return found;
            }
        }

        if (department.departments.length > 0) {
            let foundSubDepartment = findEmployeeByName(
                department.departments,
                name
            );
            if (foundSubDepartment) {
                return foundSubDepartment;
            }
        }
    }
    return null;
}

console.log(findEmployeeByName(company, 'Anna Karenina'));
