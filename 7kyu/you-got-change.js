// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

// giveChange(365) // =>  [0,1,1,0,1,3]
// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

// giveChange(217) // => [2,1,1,0,0,2]

//My solutions

function giveChange(amount) {
    let array = []
    
      array.push(Math.floor(amount/100))
      amount -= Math.floor(amount/100) * 100
  
      array.push(Math.floor(amount/50))
      amount -= Math.floor(amount/50) * 50
  
      array.push(Math.floor(amount/20))
      amount -= Math.floor(amount/20) * 20
  
      array.push(Math.floor(amount/10))
      amount -= Math.floor(amount/10) * 10
  
      array.push(Math.floor(amount/5))
      amount -= Math.floor(amount/5) * 5
  
      array.push(Math.floor(amount/1))
      amount -= Math.floor(amount/1)
  
    return array.reverse()
    }

    //Alternative

    function giveChange(amount) {
        var arr=[0,0,0,0,0,0]
        while (amount>=100)
        {
          arr[5]++;
          amount-=100;
        }
        while (amount>=50)
        {
          arr[4]++;
          amount-=50;
        }
        while (amount>=20)
        {
          arr[3]++;
          amount-=20;
        }
        while (amount>=10)
        {
          arr[2]++;
          amount-=10;
        }
        while (amount>=5)
        {
          arr[1]++;
          amount-=5;
        }
        while (amount>=1)
        {
          arr[0]++;
          amount--;
        }
        return arr;
      }

      const bills = [100, 50, 20, 10, 5, 1];

const giveChange = amount => (
  bills
    .map(value => {
      let result = Math.trunc(amount / value);
      amount = amount % value;

      return result;
    })
    .reverse()
);