/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

var reversePrint = function(head) {
    let nums = [];
    let node = head;
    while(node !== null) {
        nums.unshift(node.val);
        node = node.next;
    }

    return nums;
};