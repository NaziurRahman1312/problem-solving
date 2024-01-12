
 //Definition for a binary tree node.
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

 class BSTIterator {
    private stack : TreeNode[];

    constructor(root: TreeNode | null) {
        this.stack = [];

        this.AddNodeToStack(root);
    }

    private AddNodeToStack(node: TreeNode | null | undefined){
        while(node != null){
            this.stack.push(node);
            node = node.left;
        }
    }

    private RemoveTopFromStack(): number{
        let removed : TreeNode | undefined | null = this.stack.pop();

        this.AddNodeToStack(removed?.right);

        return removed != null ? removed.val : -1;
    }

    next(): number {
        return this.RemoveTopFromStack();
    }

    hasNext(): boolean {
        return this.stack.length != 0;
    }
}