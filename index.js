class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let returnArray = []
    let wordArray = string.split(" ")
    let arrayLength = wordArray.length
    let exceptArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 0; i < arrayLength; i++){
      if (i === 0){
        returnArray.push(this.capitalize(wordArray[0]))
      }
      else {
        if (exceptArray.includes(wordArray[i])) {
        returnArray.push(wordArray[i])
        }
        else{
        returnArray.push(this.capitalize(wordArray[i]))
        }
      }
    }
    return returnArray.join(" ")
  }
}
