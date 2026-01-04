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
    return new Promise((res) => setTimeout(() => res(prices[id]), 200));
}

async function findMostExpensiveLeaf(tree) {
    const leaves = collectLeaves(tree);

    const pricesArray = await Promise.all(leaves.map((id) => fetchPrice(id)));

    let maxIndex = 0;

    for (let i = 1; i < pricesArray.length; i++) {
        if (pricesArray[i] > pricesArray[maxIndex]) {
            maxIndex = i;
        }
    }

    return {
        id: leaves[maxIndex],
        price: pricesArray[maxIndex],
    };
}

function collectLeaves(node) {
    if (node.children.length === 0) {
        return [node.id];
    }

    return node.children.flatMap((child) => collectLeaves(child));
}

findMostExpensiveLeaf(tree).then(console.log);
// { id: "laptop", price: 1000 }
