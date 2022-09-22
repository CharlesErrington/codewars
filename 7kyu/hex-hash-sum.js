// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113

//My solution

function func(one) {

    return one.split('')
              .map(num => num.charCodeAt().toString(16))
              .join('')
              .split('')
              .map(char => +char)
              .filter(Boolean)
              .reduce((sum, num) => sum + num, 0)
  }

//Alternative

const hexHash = (str) => 
    str.length === 0 ? 0 : str.replace( /./g, x=> (x.codePointAt()).toString(16) ).match(/\d/g).reduce((a,b)=> +a + +b,0)
