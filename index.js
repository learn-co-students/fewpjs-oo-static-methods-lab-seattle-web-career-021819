class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static titleize(string) {
    let words = string.split(" ");
    let sentence = []
    let exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    words.forEach (word => {
      if (exceptWords.includes(word)) {
        sentence.push(word);
      } else {
        sentence.push(this.capitalize(word));
      }
    })
    return this.capitalize(sentence.join(' '));
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
}
