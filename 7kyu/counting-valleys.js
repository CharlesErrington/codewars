// You need count how many valleys you will pass.

// Start is always from zero level.

// Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

// One passed valley is equal one entry and one exit of a valley.

// s='FUFFDDFDUDFUFUF'
// U=UP
// F=FORWARD
// D=DOWN
// To represent string above

// (level 1)  __
// (level 0)_/  \         _(exit we are again on level 0)
// (entry-1)     \_     _/
// (level-2)       \/\_/
// So here we passed one valley

//My solution

const countingValleys = (str) => {
    let sum = 0;
    let level = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'U') {
        level++;
      } else if (str[i] === 'D') {
        level--;
      }
      if (level === 0 && str[i] === 'U') {
        sum++;
      }
    }
    return sum;
  };

  //Alternative

  function countingValleys(s) {
    //here we go again
    let level=0;
    let valleys = 0;
    s.split("").forEach(el=>{
      if(level===-1&&el==="U") valleys++;
      if(el==="D") level-=1;
      if(el==="U") level+=1;
    })
    return valleys;
  }