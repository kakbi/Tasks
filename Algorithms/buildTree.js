function buildTree(list) {
    const map = new Map();
    const roots = [];

    for (const item of list) {
        map.set(item.id, { ...item, replies: [] });
    }

    for (const item of list) {
        const node = map.get(item.id);

        if (item.parentId === null) {
            roots.push(node);
        } else {
            const parent = map.get(item.parentId);
            if (parent) {
                parent.replies.push(node);
            }
        }
    }

    return roots;
}

const comments = [
    { id: 5, parentId: null, text: 'Second' },
    { id: 1, parentId: null, text: 'First' },
    { id: 3, parentId: 1, text: 'Another reply' },
    { id: 2, parentId: 1, text: 'Reply to First' },
    { id: 4, parentId: 2, text: 'Reply to reply' },
];

// console.log(buildTree(comments));

const items = [
    { id: 1, parentId: null },
    { id: 2, parentId: 1 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 2 },
    { id: 5, parentId: 2 },
    { id: 6, parentId: 3 },
];

function buildTreeRecursive(items, parentId = null) {
    return items
        .filter((item) => item.parentId === parentId)
        .map((item) => ({
            ...item,
            children: buildTreeRecursive(items, item.id),
        }));
}

console.log(buildTreeRecursive(items));
