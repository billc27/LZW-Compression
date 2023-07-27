function mtfEncode(text) {
    // Initialize symbol table
    let symbolTable = [];
    for (let i = 0; i < 256; i++) {
      symbolTable.push(String.fromCharCode(i));
    }
  
    // Encode the text
    let encodedData = [];
    for (let character of text) {
      let index = symbolTable.indexOf(character);
      encodedData.push(index);
      symbolTable.splice(index, 1);
      symbolTable.unshift(character);
    }
  
    // Convert encoded data to string
    let encodedString = "";
    for (let index of encodedData) {
      encodedString += String.fromCharCode(index);
    }
  
    return encodedString;
}
  
function mtfDecode(encodedString) {
    // Convert encoded string to array of integers
    let encodedData = [];
    for (let character of encodedString) {
      encodedData.push(character.charCodeAt(0));
    }
  
    // Initialize symbol table
    let symbolTable = [];
    for (let i = 0; i < 256; i++) {
      symbolTable.push(String.fromCharCode(i));
    }
  
    // Decode the data
    let text = "";
    for (let index of encodedData) {
      let character = symbolTable[index];
      text += character;
      symbolTable.splice(index, 1);
      symbolTable.unshift(character);
    }
    
    return text;
}

module.exports = { mtfEncode, mtfDecode };