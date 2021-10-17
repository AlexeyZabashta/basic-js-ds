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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}