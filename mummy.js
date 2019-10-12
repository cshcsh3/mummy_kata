const mummy = (str) => {
    let result = str.toLowerCase()
    const vowels = 'aeiou'

    let counter = 0
    for (const character of result) {
       if (vowels.includes(character)) {
           counter += 1   
       } 
    }

    if ((counter/result.length) > 0.3) {
        result = result.replace(/[aeiou]+/g, 'mummy')
    } 

    return result
}

export default mummy
