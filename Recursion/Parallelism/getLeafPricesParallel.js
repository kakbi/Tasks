const tree = {
    id: 'root',
    children: [
        { id: 'phone', children: [] },
        {
            id: 'tech',
            children: [
                { id: 'tv', children: [] },
                { id: 'laptop', children: [] },
            ],
        },
    ],
};

const prices = {
    phone: 500,
    tv: 300,
    laptop: 1000,
};

function fetchPrice(id) {
    return new Promise((res) => setTimeout(() => res(prices[id]), 2000));
}

async function getAllLeafPricesParallel(tree) {
    const leaves = collectLeaves(tree);

    const prices = await Promise.all(leaves.map((id) => fetchPrice(id)));

    return leaves.map((id, i) => ({
        id,
        price: [prices[i]],
    }));
}

function collectLeaves(node) {
    if (node.children.length === 0) {
        return [node.id];
    }

    return node.children.flatMap((child) => collectLeaves(child));
}

getAllLeafPricesParallel(tree).then(console.log);

// [
//   { id: "phone", price: 500 },
//   { id: "tv", price: 300 },
//   { id: "laptop", price: 1000 }
// ]
