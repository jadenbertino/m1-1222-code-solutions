/* exported titleCase */

/*
  create function titleCase that takes one arg: title (string)
  split title by spaces then store in variable words
  iterate through each word in words
    word is api -> API
    word is javascript -> JavaScript

    iterate through each char in word
      capitalize char if
        - first char & word is four letters or more
        - first char & word is first or last index
        - char comes after a hyphen (-)

    otherwise lowercase char 
  join together list of words then return
*/

function titleCase(str) {
  const words = str.split(' ')
  const titleCaseWords = []
  const MINORWORDS = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ]

  const result = words.map((word, wordIndex) => {
    // iterate thru each word

    // hardcoded cases --- javascript / api
    if (word.toLowerCase() === 'api') return 'API'
    if (word.toLowerCase() === 'javascript') return 'JavaScript'
    if (word.toLowerCase() === 'javascript:') return 'JavaScript:'
    
    const chars = word.split('')
    return chars.map((char, charIndex) => {
      // iterate through each char
      
      // first char capitalizations
      if (charIndex === 0) {
        
        // 4+ letters
        if (word.length >= 4) return char.toUpperCase()

        // first / last word 
        if (wordIndex === 0 || wordIndex === words.length - 1) return char.toUpperCase()
        
        // not a 'minor' word
        if (!MINORWORDS.includes(word.toLowerCase())) return char.toUpperCase()

        // subtitle
        const prevWord = words[wordIndex - 1]
        const lastCharOfPrevWord = prevWord[prevWord.length - 1]
        if (prevWord && lastCharOfPrevWord === ':') return char.toUpperCase()
      }
    
      // hyphen
      if (word[charIndex - 1] === '-') return char.toUpperCase()

      // otherwise lowercase
      return char.toLowerCase()

    }).join('')
  }).join(' ')
  return result
}