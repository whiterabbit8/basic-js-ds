const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.firstNode = null;
  }

  root() {
    return this.firstNode;
  }

  add(data) {
    this.firstNode = addBranch(this.firstNode, data)

    function addBranch(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (value === node.data) {
        return node;
      }

      if (value < node.data) {
        node.left = addBranch(node.left, value)
      } else {
        node.right = addBranch(node.right, value)
      }

      return node;
    }
  }

  has(data) {
    return findNode(this.firstNode, data)

    function findNode(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return findNode(node.left, value)
      } else {
        return findNode(node.right, value)
      }
    }
  }

  find(data) {
    return findNode(this.firstNode, data)

    function findNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return findNode(node.left, value)
      } else {
        return findNode(node.right, value)
      }
    }
  }

  remove(data) {
    return removeNode(this.firstNode, data)

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.data > value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        node.data = maxFromLeft.data;
        maxFromLeft = null;

        return node;
      }
    }
  }

  min() {
    if (!this.firstNode) {
      return null;
    }

    let min = this.firstNode;

    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.firstNode) {
      return null;
    }

    let max = this.firstNode;

    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};