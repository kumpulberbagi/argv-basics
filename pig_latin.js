'use strict'


let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}


var tampung = "";
var i = 2;
//console.log(convert(["hallo " , "wold", "lol"]));
// Your CLI code here
process.argv.forEach((val, index,array) => {
    // pigLatin(val);
  if (i<array.length) {
    tampung+=" "+array[i]
    i++
  }
});

console.log(convert(tampung));
