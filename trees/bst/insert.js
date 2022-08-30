/* 
###########
BST: INSERT
###########
Adding values to a tree is a recursive process whereby you traverse the tree:
- start at root element
- choose left if new data < root/parent node 
- choose right if new data > root/parent node
- if a child already exists: make a recursive fn call with the child node 
as an argument
- if their is no child node found on the branch, insert node
- track the size with a variable
NOTE: no duplicate values are allowed, if you want to account for duplicates
insert them as left child nodes by simple adjusting data <= node.data
*/
const Node = require('./createNode');

module.exports = function insert(data){
    let node = this.root;
    let size = this.size;
    if(!this.root){
        this.root = new Node(data);
        this.size++;      
        console.log(`Node ${data} added to the tree as root node.`);
    } else {
        const searchTree = function(node){
            if(data < node.data){
                if(!node.left){
                    node.left = new Node(data);
                    size++;
                    console.log(`Node ${data} added as left child node of ${node.data}`);
                } else {
                    console.log(`Existing left child node found, start recursive function call with next node ${node.left.data}.`);
                    searchTree(node.left);
                }
            } else if(data > node.data){
                if(!node.right){
                    node.right = new Node(data);
                    size++;
                    console.log(`Node ${data} added as right child node of ${node.data}`);
                } else {
                    console.log(`Existing right child node found, start recursive function call with next node ${node.right.data}.`);
                    searchTree(node.right);
                }
            } else {
                console.log('This tree does not accept duplicate values.')
                return null;
            }       
        }
        searchTree(node);
        this.size = size;
    } 
}