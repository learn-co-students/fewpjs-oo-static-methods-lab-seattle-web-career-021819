class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^\w\s-']/g, '');
  }

  static titleize(string) {
    let dontCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let stringSplit = string.split(" ");
    let newString = "";
    for (let word of stringSplit) {
      if (!dontCapitalize.includes(word) || word === stringSplit[0]){
        newString += (word.charAt(0).toUpperCase() + word.slice(1) + " ");
      } else {
        newString += (word + " ");
      }
    }
    return newString.trim();
  }
}
