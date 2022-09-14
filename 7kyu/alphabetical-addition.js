// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
    // your code here
    let array = []
    array = [...arguments]
    console.log(array)
    let sum = array[0].map((num, i) => {
        console.log(i)
        console.log(array[1])
        //console.log(num)

        console.log(array[0].join('').charCodeAt(i))
        return ((array[0].join('').charCodeAt(i)) -97)
    })
    .reduce((sum, num) => sum + num, 0)
    console.log(`sum ${sum}`)
    let final = String.fromCharCode(sum % 26 + 98)
    return final
    //.map((num, i, arr) => arr.charCodeAt(i)).reduce((sum, num) => sum + num, 0)
    //return String.fromCharCode(26 % sum)
    
  }

  let a = ['z', 'a']

console.log(addLetters(a))

console.log(`test ${3 % 26}`)