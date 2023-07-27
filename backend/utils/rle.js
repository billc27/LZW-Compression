function rleEncode(text) {
    let encodedText = "";
    let count = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i + 1]) {
            count++;
        } else {
            encodedText += count + text[i];
            count = 1;
        }
    }
    return encodedText;
}
  
function rleDecode(encodedText) {
    let text = "";
    let count = "";
    for (let i = 0; i < encodedText.length; i++) {
        if (isNaN(encodedText[i])) {
            text += encodedText[i].repeat(parseInt(count));
            count = "";
        } else {
            count += encodedText[i];
        }
    }
    return text;
}

module.exports = { rleEncode, rleDecode };