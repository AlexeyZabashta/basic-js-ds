const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){    
    this.root1=null;       
  } 
  root() {
    return this.root1;    
  }
  insert(node,newNode){
    if (newNode.data < node.data) {
      if (node.left === null) {
          node.left = newNode;
      } else {
          this.insert(node.left, newNode);
      }
  } else {
      if (node.right === null) {
          node.right = newNode;
      } else {
          this.insert(node.right, newNode);
      }
  }
  }
  add(data) {
    let newNode = new Node(data);
    if (this.root1===null){
      this.root1=newNode;
    }
    else{
      this.insert(this.root1, newNode);
    }

  }
  
  has(data) {
    return search(this.root1, data) 
    function search(node, data){
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }

      return data < node.data ?
        search(node.left, data):
        search(node.right, data);
    }
  }

  find(data) {
    return search(this.root1, data) 
    function search(node, data){
      if (!node){
        return null;
      }
      if (node.data === data){
        return node;
      }

      return data < node.data ?
        search(node.left, data):
        search(node.right, data);
    }
  }

  remove(data) {
    this.root1=remNode(this.root1, data);

    function remNode(node, data){
      if (!node){
        return null;
      }
      if (data <node.data){
        node.left = remNode(node.left, data);
        return node;
      } else if (node.data < data){
        node.right = remNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }
        if (!node.left){
          node=node.right;
          return node;
        }
        if (!node.right){
          node=node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left){
          minFromRight=minFromRight.left;
        }
        node.data = minFromRight.data; 
        node.right = remNode(node.right, minFromRight.data);
        return node;      
      }
    }
  }

  min() {    
    if (!this.root1){
      return null;
    }

    let node = this.root1;
    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root1){
      return null;
    }

    let node = this.root1;
    while (node.right){
      node = node.right;
    }
    return node.data;
  }

  leftTrav(cb){
    doLeft(this.root, cb);
    function doLeft(node, cb){
      if (node){
        doLeft(node.left, cb);
        cb(node.data);
        doLeft(node.rigth,cb);
      }
    }
  }
  rightTrav(cb){
    doRight(this.root, cb);
    function doRight(node, cb){
      if (node){
        doRight(node.right, cb);
        cb(node.data);
        doRight(node.left,cb);
      }
    }
  }

}