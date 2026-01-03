const tree = {
    id: 'root',
    children: [
        {
            id: 'header',
            children: [
                { id: 'logo', children: [] },
                { id: 'menu', children: [] },
            ],
        },
        {
            id: 'main',
            children: [
                {
                    id: 'section-1',
                    children: [
                        { id: 'article-1', children: [] },
                        { id: 'article-2', children: [] },
                    ],
                },
                { id: 'section-2', children: [] },
            ],
        },
        {
            id: 'footer',
            children: [],
        },
    ],
};

function fetchNode(node) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(node);
        }, 100);
    });
}

async function findNodeAsync(tree, id) {
    const data = await fetchNode(tree);

    if (data.id === id) {
        return data;
    }

    for (const child of tree.children) {
        const result = await findNodeAsync(child, id);
        if (result) return result;
    }

    return null;
}

findNodeAsync(tree, 'menu').then(console.log);
// { id: 'menu', children: [] }

findNodeAsync(tree, 'article-2').then(console.log);
// { id: 'article-2', children: [] }

findNodeAsync(tree, 'nope').then(console.log);
// null
