const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [{ value: 4 }, { value: 5 }],
        },
        {
            value: 3,
            children: [{ value: 6 }, { value: 7 }],
        },
    ],
};
function getTreeValues(tree) {
    const queue = [tree];
    const result = [];
    while (queue.length) {
        const node = queue.shift();
        result.push(node.value);
        if (Array.isArray(node.children)) {
            node.children.forEach((el) => {
                queue.push(el);
            });
        }
    }
    return result;
}

console.log(getTreeValues(tree));
