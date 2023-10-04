function multiplyNode(node, count, deep) {
    for (let i =0, copy; i < count -1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy,node);
    }
}

multiplyNode(document.querySelector('#box'),6, true);