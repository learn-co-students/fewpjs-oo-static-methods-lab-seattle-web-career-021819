class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(sentence){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let returnArray = [];
    let wordArray = sentence.split(" ")
    for (let i = 0; i < wordArray.length; i++){
      if (i == 0){
        returnArray.push(this.capitalize(wordArray[0]))
      } else {
        if (exceptions.includes(wordArray[i])){
          returnArray.push(wordArray[i])
        }  else {
        returnArray.push(this.capitalize(wordArray[i]))
      }
    }

  }
  return returnArray.join(" ")
  }

}
