class Formatter {
  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static sanitize(text) {
    const regex = /([^0-9a-zA-Z' ,-])/g;
    return text.replace(regex, '');
  }

  static titleize(text) {
    const array = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let sentence = text.split(' ');
    let newSentence = sentence.map(word => {
      if (word == sentence[0] || array.includes(word) === false) {
        return Formatter.capitalize(word) + " ";
      } else if (array.includes(word)) {
        return word + " "
      }
    })
    return newSentence.toString().replace(/,/g, '').slice(0, -1)
  }

  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

}
