// Check if two strings are anagrams of each other

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const res = isAnagram("anagram", "nagaram");
console.log(res);
