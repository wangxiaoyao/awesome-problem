// Q1：实现一个函数，平铺List转Tree结构，子节点parent字段对应父节点id

//     ```js
// ## 输入
// const list = [
// { id: 2, content: 'CORS', parent: 1 }, 
// { id: 3, content: 'Axios', parent: 1 }, 
// { id: 5, content: '~', parent: 6 }, 
// { id: 1, content: 'JSContext' }, 
// { id: 6, content: 'Event Loop' }, 
// { id: 9, content: 'webpack/rollup', parent: 5 },
// { id: 7, content: 'Serverless', parent: 3 }
// ]

// ## 输出
// const tree = [
//     {
//         'id': 1,
//         'content': 'JSContext',
//         'children': [
//             { 'id': 2, 'content': 'CORS', 'parent': 1 },
//             { 'id': 3, 'content': 'Axios', 'parent': 1, 'children': [{ 'id': 7, 'content': 'Serverless', 'parent': 3 }] }，
//         ]
//     },
//     {
//         'id': 6,
//         'content': 'Event Loop',
//         'children': [
//             {
//                 'id': 5, 'content': '~', 'parent': 6,
//                 'children': [{ 'id': 9, 'content': 'webpack/rollup', 'parent': 5 }]
//             }
//         ]
//     }
// ]
// ```

const list = [
    { id: 2, content: 'CORS', parent: 1 },
    { id: 3, content: 'Axios', parent: 1 },
    { id: 5, content: '~', parent: 6 },
    { id: 1, content: 'JSContext' },
    { id: 6, content: 'Event Loop' },
    { id: 9, content: 'webpack/rollup', parent: 5 },
    { id: 7, content: 'Serverless', parent: 3 }
]

const arrToTree = (list) => {
    let root = [];
    let map = new Map();
    list.forEach(item => {
        map.set(item.id, item)
    });

    list.forEach((item) => {
        const node = map.get(item.id);
        if (item.parent && map.has(item.parent)) {
            const parentNode = map.get(item.parent);
            // if (!parentNode.children) {
            //     parentNode.children = [];
            // }
            // parentNode.children.push(item);
            (parentNode.children = parentNode.children || []).push(item);

        } else {
            root.push(node);
        }
    })
    return root;
}
const tree = arrToTree(list);

console.log(JSON.stringify(tree, null, 2));
