/* LZW Algorithm */

function encode(text) {
    let dictSize = 256;
    let dictionary = new Map();
    for (let i = 0; i < dictSize; i++) {
      dictionary.set(String.fromCharCode(i), i);
    }
  
    let foundChars = "";
    let result = [];
    for (let character of text) {
      let charsToAdd = foundChars + character;
      if (dictionary.has(charsToAdd)) {
        foundChars = charsToAdd;
      } else {
        result.push(dictionary.get(foundChars));
        dictionary.set(charsToAdd, dictSize++);
        foundChars = character;
      }
    }
    if (foundChars !== "") {
      result.push(dictionary.get(foundChars));
    }
    return result;
}

function decode(encodedText) {
    let dictSize = 256;
    let dictionary = new Map();
    for (let i = 0; i < dictSize; i++) {
      dictionary.set(i, String.fromCharCode(i));
    }
  
    let characters = String.fromCharCode(encodedText.shift());
    let result = characters;
    for (let code of encodedText) {
      let entry = dictionary.has(code) ? dictionary.get(code) : characters + characters.charAt(0);
      result += entry;
      dictionary.set(dictSize++, characters + entry.charAt(0));
      characters = entry;
    }
    return result;
}

// console.log(encode("hello"));
// console.log(decode([72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33]));

module.exports = { encode, decode };