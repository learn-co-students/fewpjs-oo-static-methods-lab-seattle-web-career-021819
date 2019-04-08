class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string){
    let newString = ''
    let stringArr = string.split(" ")
    stringArr.forEach(function(word){
    if(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" ||  word === "by" || word === "from")
      {newString = newString + " " + word}
    else
     {newString = newString + " " + (word.charAt(0).toUpperCase() + word.slice(1))}
  })
    newString = newString.slice(1)
    return (newString.charAt(0).toUpperCase() + newString.slice(1))
  }

}
