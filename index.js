class Formatter {

static capitalize(string){
  let letter = string.charAt(0).toUpperCase()
  return letter + string.slice(1)
}

static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

static titleize(string){
  let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let output = []
  let array = string.split(" ")


  array.forEach(function(word){
    if(word == array [0]){
      let first = word[0].toUpperCase() + word.slice(1)
      output.push(first)
    } else if (!except.includes(word)) {
      let revisedWord = word[0].toUpperCase() + word.slice(1)
      output.push(revisedWord)
    } else {
      output.push(word)
    }
  })
  return output.join(" ")
}

}
