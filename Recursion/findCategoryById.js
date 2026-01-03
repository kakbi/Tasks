const categories = {
    data: [
        {
            id: 1,
            name: 'Electronics',
            children: [
                {
                    id: 2,
                    name: 'Phones',
                    children: [
                        { id: 3, name: 'Smartphones', children: [] },
                        { id: 4, name: 'Tablets', children: [] },
                    ],
                },
                {
                    id: 5,
                    name: 'Laptops',
                    children: [
                        { id: 6, name: 'Gaming', children: [] },
                        { id: 7, name: 'Business', children: [] },
                    ],
                },
            ],
        },
        {
            id: 8,
            name: 'Cloth',
            children: [
                { id: 9, name: "Women's clothing", children: [] },
                { id: 10, name: "Men's clothing", children: [] },
            ],
        },
    ],
};

function findCategoryById(categories, id) {
    for (let category of categories) {
        if (category.id === id) return category;

        if (category.children.length > 0) {
            let found = findCategoryById(category.children, id);
            if (found) return found;
        }
    }
    return null;
}

async function fetchCategories() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(categories.data);
        }, 2000);
    });
}

async function findCategoryByIdAsync(id) {
    const categories = await fetchCategories();
    return findCategoryById(categories, id);
}

fetchCategories().then(console.log);
findCategoryByIdAsync(8).then(console.log);
findCategoryByIdAsync(9).then(console.log);
