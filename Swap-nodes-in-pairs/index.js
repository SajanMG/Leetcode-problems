// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Explanation:



// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]

 

// Constraints:

// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(node) {
    if (!node || !node.next) {  // if empty or single node, return node
        return node;
    }
    const secondNode = node.next;  
    const remainingNodes = secondNode.next;

    //swap the nodes position
    secondNode.next = node;  // place first node after secondNode  1 -> 2 becomes 2 -> 1.

    node.next = swapPairs(remainingNodes); //since now list looks like this secondNode -> node -> remainingNodes. So. node.next can be calculated with swapping remainingNodes
    return secondNode;  // we return secondNode as it is the first node in the list now
};

// time complexity is O(n);
//spcace complexity is O(n);