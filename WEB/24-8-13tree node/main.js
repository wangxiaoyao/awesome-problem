// 方案一：Map O(n)
function listToTree(list) {
    const map = new Map();
    const tree = [];

    // 首先将所有节点存储在 map 中
    list.forEach(item => {
        map.set(item.id, { ...item, children: [] });
    });

    // 然后遍历列表，构建树结构
    list.forEach(item => {
        const node = map.get(item.id);
        if (item.parent) {
            const parent = map.get(item.parent);
            if (parent) {
                parent.children.push(node);
            }
        } else {
            // 没有 parent 的节点为根节点
            tree.push(node);
        }
    });

    return tree;
}

// 方案二： 双循环
const listToTree = (list) => {
    let treeObjMap = new Map();

    for (let i = 0; i < list.length; i++) {
        if ('parent' in list[i]) {

            for (let j = 0; j < list.length; j++) {
                if (list[i].parent === list[j].id) {
                    if ('children' in list[j]) {
                        list[j].children.push(list[i])
                    } else {
                        list[j].children = [];
                        list[j].children.push(list[i])
                    }

                    if (!('parent' in list[j])) {
                        treeObjMap.set(list[j].id, list[j])
                    }
                }
            }
        }
    }
    return [...treeObjMap.values()];
}