const nodes = {
    id: 'root',
    children: [{ id: 'box', children: [] }],
};

const metadata = {
    root: { type: 'container' },
    box: { type: 'element' },
};

function fetchNode(node) {
    return new Promise((res) => setTimeout(() => res(node), 300));
}

function fetchMeta(id) {
    return new Promise((res) => setTimeout(() => res(metadata[id]), 300));
}

async function findWithMeta(tree, id) {
    const node = await findNode(tree, id);

    if (!node) {
        throw new Error(`Node with id ${id} not found`);
    }

    const meta = await fetchMeta(node.id);

    return { id: node.id, type: meta.type };
}

async function findNode(tree, id) {
    const data = await fetchNode(tree);

    if (data.id === id) {
        return data;
    }

    for (let child of data.children) {
        const result = await findNode(child, id);
        if (result) {
            return result;
        }
    }

    return null;
}

findWithMeta(nodes, 'box').then(console.log);
// { id: 'box', type: 'element' }
