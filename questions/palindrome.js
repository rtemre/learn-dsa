// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(10);
console.log(res);

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"

// =============================================================================

// Ques 1 : Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

// Input: head = [1,2,2,1]      ----->>>>>      Output: true;
// Input: head = [1,2]          ----->>>>>      Output: false;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var isPalindromeLinkedList = function (head) {
  let string1 = (string2 = "");
  let node = head;

  while (node != null) {
    string1 = `${string1}${node.val}`;
    string2 = `${node.val}${string2}`;
    node = node.next;
  }
  return string1 === string2;
};
