const departments = {
    id: 'company',
    children: [
        {
            id: 'dev',
            children: [
                { id: 'frontend', children: [] },
                { id: 'backend', children: [] },
            ],
        },
        { id: 'hr', children: [] },
    ],
};

async function fetchNode(node) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(node), 1000);
    });
}

async function findDepartment(tree, id, path = []) {
    const data = await fetchNode(tree);
    const currentPath = [...path, data.id];

    if (data.id === id) return currentPath;

    for (const child of data.children) {
        const result = await findDepartment(child, id, currentPath);
        if (result) return result;
    }
    return null;
}

findDepartment(departments, 'backend').then(console.log);
// [ 'company', 'dev', 'backend' ]
