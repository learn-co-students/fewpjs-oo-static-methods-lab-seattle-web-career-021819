class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^0-9a-zA-Z ' -]/g, '')
  }

  static titleize(string) {
    let except = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let array = string.split( " " )
     for (let n = 0; n < array.length; n++) {
       if (n == 0) {
         result.push( this.capitalize(array[n]))
       } else {
         if (except.includes(array[n])) {
           result.push(array[n])
         } else {
           result.push(this.capitalize(array[n]))
         }
       }

     }
     return result.join(" ");
   }
}
