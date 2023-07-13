1;
function removeConsecutiveDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeConsecutiveDuplicates(['a', 'a', 'b', 'b', 'b', 'c']));

function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

console.log(titleCase('javascript is AWESOME'));

function countSubstringOccurrences(str, substr) {
  let count = 0;
  let startIndex = 0;
  while (true) {
    const index = str.indexOf(substr, startIndex);
    if (index === -1) {
      break;
    }
    count++;
    startIndex = index + substr.length;
  }
  return count;
}

console.log(countSubstringOccurrences('javascript is awesome', 'is'));

function isPowerOfThree(n) {
  if (n < 1) {
    return false;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}

console.log(isPowerOfThree(12));

function getUniqueCharacters(str) {
  const uniqueChars = [];
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars.push(str[i]);
    }
  }
  return uniqueChars.join('');
}

console.log(getUniqueCharacters('javascript is cool'));
