/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    //step 6: create a variable that stores the number that gets carried over and set to 0
    let carry = 0;
    //step 10: create a variable that will keep track of the previous node
    let PreviousNode = new ListNode();  //initialize it to an empty node
    let headNode = PreviousNode;
    //step 1: I want to traverse the link list using a while loop
    while(l1 || l2){ //step 2: traverse both link list to the very end, the loop needs to keep running while l1 or l2 is not null
        //step 4: create a variable where it stores the value
        let val1 = l1 ? l1.val : 0; // terary operator, if l1 is not null set val1 to be val1.val else set it to be 0
        let val2 = l2 ? l2.val : 0;
        //step 3: since l1 and l2 can have different lengths we need an if statement
        //if l1 is equal to null
        if(l1){
            //set l1 to be the next node
            l1 = l1.next;
        }
        //if l2 is equal to null
        if(l2){
            //set l2 to be the next node
            l2 = l2.next;
        }
        
        //step 5: create a variable where it stores the sum of both of the lists
        let sum = val1 + val2 + carry;
        //step 7: set carry to be the number getting carried over
        carry = Math.floor(sum/10) // sum > 9 ? 1 : 0;
        //step 8: create a variable that stores the leftover of the sum Ex. 14 % 10 = 4. 
        let digit = sum % 10;
        //step 9: create a linked list to return
        let currNode = new ListNode(digit);
        PreviousNode.next = currNode;
        PreviousNode = currNode;
    }
    return headNode.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))