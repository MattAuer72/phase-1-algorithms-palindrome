function isPalindrome(word) {
  // Write your algorithm here
  // Write a function isPalindrome that will receive one argument, a string. 
  // should return true if the string is a palindrome, like "mom" or "racecar"
  // )return false if it is not a palindrome.
  // my first thought is too make if then statements..not sure yet
  // get the total length of the words  
  const len = word.length;  
  
    // Use for loop to divide the words into 2 half  
  for (let i = 0; i < len / 2; i++) {  
      // validate the first and last characters are the same  
      if (word[i] !== word[len - 1 - i]) {  
          return false;
      }  
  }  
// If they are not the same, then it is not a palindrome
    return true;
}

/* 
  Add your pseudocode here
  if word lenght cut in half is equal then return true
  if word lentght not not equal when cut in half return false
*/ 

/*
  Add written explanation of your solution here
  i googled how to write a function for a palindrom.  I reviewed it
  that they did a for loop that divided the word in half.  the for loop used a strict enequality operator 
  proving that the first and second half equalled.


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
