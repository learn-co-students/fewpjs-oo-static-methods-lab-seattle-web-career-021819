
//
// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.



class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(str){
    let stringArray = str.split(" "); //turn string into array
    let exclude = ['the','a', 'an', 'but', 'of', 'and', 'for', "at", "by","from"] //excluded words
    let newArray = new Array();

    stringArray.map((word)=>{
      if (stringArray.indexOf(word) > 0){
        if (exclude.includes(word)){
          newArray.push(word)
        } else {
          word = word.charAt(0).toUpperCase() + word.slice(1);
          console.log(word);
          newArray.push(word)
        }
      } else {
        word = Formatter.capitalize(word)
        newArray.push(word)
      }
    })
    console.log(newArray.join(" "));
    return newArray.join(" ");
  }
}

Formatter.titleize('this is a test')
