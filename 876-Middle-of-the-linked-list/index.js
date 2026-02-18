//Given the head of a singly linked list, return the middle node of the linked list.
//If there are two middle nodes, return the second middle node.

//Example 1
//Input: head = [1,2,3,4,5]
//Output: [3,4,5]
//Explanation: The middle node of the list is node 3.

//Example 2
//Input: head = [1,2,3,4,5,6]
//Output: [4,5,6]
//Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Constraints:
// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100


// Solutions below
// This method is called Fast & slow pointer method (efficiet in memory)
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
var middleNode = function(head) {
    var end = head;
    var middle = head;
    while (end != null && end.next != null) {
        middle = middle.next;
        end = end.next.next; 
    }
    return middle;
};

// time complexity is O(n) as it iterates through whole list of nodes
// space complexity is O(1) as it has constant extra space (only middle and end pointers are used no extra memory)

//solution 2 
//Array Conversion method (simpler to code, uses extra memory)

var middleNode = function(head) {
    let nodes = [];
    let current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    return nodes[Math.floor(nodes.length / 2)];
};

// time complexity is O(n) as it iterates through whole list of nodes
// space complexity is O(n) as it stores all list of nodes in an array