const countPairs = (colorArray) => {
    //To store the required count
    let counter = 0;
    //Sort the original array
    colorArray.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < colorArray.length - 1; ) {
      // if valid pair is found
      if (colorArray[i] === colorArray[i + 1]) {
        counter += 1;
        //Skip the elements of the current pair
        i = i + 2;
      }
      //Current elements doesn't make a valid pair with any other element
      else {
        i += 1;
      }
    }
    return counter;
  };//End of function 
// Sample Input
let ar = [10, 10, 10, 10, 20, 30, 30, 30, 30, 30, 30, 30, 40, 40, 40, 40];
//function Calling 
let result=countPairs(ar)
console.log(result);
//Sample output : result = 7