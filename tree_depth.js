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
    let values = [tree.value];

    if (Array.isArray(tree.children)) {
        tree.children.forEach(
            (item) => (values = values.concat(getTreeValues(item)))
        );
    }
    return values;
}

console.log(getTreeValues(tree));
